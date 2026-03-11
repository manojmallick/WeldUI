/**
 * Custom Elements Manifest generator for WeldUI.
 * Uses TypeScript compiler API to parse component source files and emit
 * a CEM 1.0.0-compatible JSON that Storybook uses for autodocs arg tables.
 *
 * Usage:  node tools/scripts/generate-cem.mjs
 * Output: packages/core/custom-elements.json
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve, dirname, relative } from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(__dirname, '../..');
const CORE_SRC = join(ROOT, 'packages/core/src/components');
const OUT = join(ROOT, 'packages/core/custom-elements.json');

// ---------------------------------------------------------------------------
// Regex-based extraction (avoids complex TS compiler setup)
// ---------------------------------------------------------------------------

/** Extract the leading JSDoc block comment of a class. */
function extractClassJsDoc(source) {
  // Find the last /** ... */ block before 'export class' or '@customElement'
  const match = source.match(/\/\*\*([\s\S]*?)\*\/\s*@customElement/);
  return match ? match[1] : '';
}

/** Parse @tag description lines from a JSDoc block. */
function parseJsDocTags(jsDoc, tag) {
  const results = [];
  // Use \S+ to capture names that may contain hyphens (e.g. wu-click, --wu-btn-bg)
  const re = new RegExp(`@${tag}\\s+(\\S+)\\s*-?\\s*([^\n]*)`, 'g');
  let m;
  while ((m = re.exec(jsDoc)) !== null) {
    results.push({ name: m[1].trim(), description: m[2].trim() });
  }
  return results;
}

/** Parse @tag description (no name) lines. */
function parseJsDocTagNoName(jsDoc, tag) {
  const results = [];
  const re = new RegExp(`@${tag}\\s+([^\n]+)`, 'g');
  let m;
  while ((m = re.exec(jsDoc)) !== null) {
    results.push(m[1].trim());
  }
  return results;
}

/** Extract the first sentence of the JSDoc as the description. */
function extractClassDescription(jsDoc) {
  const lines = jsDoc
    .split('\n')
    .map((l) => l.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean);
  const desc = [];
  for (const line of lines) {
    if (line.startsWith('@')) break;
    desc.push(line);
  }
  return desc.join(' ').trim();
}

/** Extract @property() decorated members. Returns array of member info. */
function extractProperties(source) {
  const members = [];

  // Step 1: find every @property(...) call and its field declaration
  const propRegex = /@property\(([^)]*)\)\s*\n\s*(\w+)[?!]?\s*:\s*([^=\n]+)\s*=\s*([^\n;]+)/g;
  let m;

  while ((m = propRegex.exec(source)) !== null) {
    const optionsStr = m[1];
    const name = m[2];
    const typeRaw = m[3].trim();
    const defaultVal = m[4].replace(/;$/, '').trim();

    // Step 2: look backwards from this @property position for the nearest /** ... */ comment
    const start = m.index;
    const preceding = source.substring(Math.max(0, start - 600), start);
    // The last complete /** ... */ block before @property
    const docMatch = preceding.match(/\/\*\*([\s\S]*?)\*\/\s*$/);
    const doc = docMatch
      ? docMatch[1].replace(/\n\s*\*\s?/g, ' ').trim()
      : '';

    // Parse decorator options
    const reflectMatch = optionsStr.match(/reflect\s*:\s*true/);
    const typeMatch = optionsStr.match(/type\s*:\s*(\w+)/);
    const attrMatch = optionsStr.match(/attribute\s*:\s*['"]([^'"]+)['"]/);

    const attribute = attrMatch ? attrMatch[1] : name.replace(/([A-Z])/g, '-$1').toLowerCase();
    const propType = typeMatch ? typeMatch[1].toLowerCase() : 'string';

    members.push({
      kind: 'field',
      name,
      description: doc,
      type: { text: typeRaw },
      default: defaultVal.replace(/^['"]|['"]$/g, ''),
      attribute,
      reflects: !!reflectMatch,
      _rawType: propType,
    });
  }
  return members;
}

/**
 * Extract ALL custom element definitions from a source file.
 * Returns [{tagName, className, start, end}] — one entry per @customElement.
 * Handles files that define multiple components (e.g. wu-accordion.ts).
 */
function extractAllComponents(source) {
  const ceRegex = /@customElement\(['"]([^'"]+)['"]\)\s*\nexport\s+class\s+(\w+)/g;
  const positions = [];
  let m;
  while ((m = ceRegex.exec(source)) !== null) {
    positions.push({ tagName: m[1], className: m[2], start: m.index });
  }
  // Annotate each with its end (start of the next component, or EOF)
  return positions.map((p, i) => ({
    ...p,
    end: i + 1 < positions.length ? positions[i + 1].start : source.length,
  }));
}

// ---------------------------------------------------------------------------
// Build a single module declaration
// ---------------------------------------------------------------------------

function buildModule(tagName, className, description, members, slots, events, cssProperties, cssParts, filePath) {
  const attributes = members
    .filter((m) => m.attribute)
    .map((m) => ({
      name: m.attribute,
      description: m.description,
      type: m.type,
      default: m.default,
      fieldName: m.name,
    }));

  return {
    kind: 'javascript-module',
    path: filePath,
    declarations: [
      {
        kind: 'class',
        description,
        name: className,
        cssProperties: cssProperties.map((p) => ({
          name: p.name,
          description: p.description,
        })),
        cssParts: cssParts.map((p) => ({
          name: p.name,
          description: p.description,
        })),
        slots: slots.map((s) => ({
          name: s.name === '-' ? '' : s.name,
          description: s.description,
        })),
        members: members.map(({ _rawType, ...rest }) => rest),
        events: events.map((e) => ({
          name: e.name,
          description: e.description,
          type: { text: 'CustomEvent' },
        })),
        attributes,
        superclass: { name: 'LitElement', package: 'lit' },
        tagName,
        customElement: true,
      },
    ],
    exports: [
      {
        kind: 'js',
        name: className,
        declaration: { name: className, module: filePath },
      },
      {
        kind: 'custom-element-definition',
        name: tagName,
        declaration: { name: className, module: filePath },
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const componentDirs = await readdir(CORE_SRC, { withFileTypes: true });
  const modules = [];

  for (const entry of componentDirs) {
    if (!entry.isDirectory()) continue;

    const dir = join(CORE_SRC, entry.name);
    const files = await readdir(dir);

    for (const file of files) {
      // Only process main component files, not stories/test/styles
      if (!file.endsWith('.ts')) continue;
      if (file.includes('.stories.') || file.includes('.test.') || file.includes('.styles.')) continue;

      const filePath = join(dir, file);
      const source = await readFile(filePath, 'utf8');

      const allComponents = extractAllComponents(source);
      if (allComponents.length === 0) continue;

      const relPath = relative(join(ROOT, 'packages/core'), filePath);

      for (const comp of allComponents) {
        // The source slice covering this component (from its @customElement to the next)
        const compSource = source.substring(comp.start, comp.end);

        // JSDoc immediately preceding this @customElement (look back up to 800 chars)
        const preceding = source.substring(Math.max(0, comp.start - 800), comp.start);
        const docMatch = preceding.match(/\/\*\*([\s\S]*?)\*\/\s*$/);
        const jsDoc = docMatch ? docMatch[1] : '';

        const description = extractClassDescription(jsDoc);
        const members = extractProperties(compSource);
        const slots = parseJsDocTags(jsDoc, 'slot');
        const events = parseJsDocTags(jsDoc, 'event');
        const cssProperties = parseJsDocTags(jsDoc, 'cssprop');
        const cssParts = parseJsDocTags(jsDoc, 'csspart');

        modules.push(
          buildModule(comp.tagName, comp.className, description, members, slots, events, cssProperties, cssParts, relPath)
        );

        console.log(`  ✓ ${comp.tagName} (${comp.className})`);
      }
    }
  }

  const manifest = {
    schemaVersion: '1.0.0',
    readme: '',
    modules,
  };

  await writeFile(OUT, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`\nWrote ${modules.length} component modules to:\n  ${OUT}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
