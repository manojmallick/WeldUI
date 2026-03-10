/**
 * Interactive prompts for create-weldui-theme CLI.
 * Uses Node.js built-in readline/promises — no external dependencies.
 */

import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import type { ThemeOptions } from './generator.js';

const HEX_RE = /^#?[0-9a-fA-F]{6}$/;

function normalizeHex(hex: string): string {
  return hex.startsWith('#') ? hex.toLowerCase() : `#${hex.toLowerCase()}`;
}

function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function runPrompts(outputDir: string): Promise<ThemeOptions> {
  const rl = readline.createInterface({ input, output });

  console.log('\n  \x1b[1mWelcome to create-weldui-theme!\x1b[0m');
  console.log('  Create a WCAG AA-compliant WeldUI theme package.\n');

  // 1. Display name
  const displayName = await rl.question('  Theme display name (e.g. "Acme Corp"): ');
  if (!displayName.trim()) {
    rl.close();
    throw new Error('Theme name is required.');
  }

  // 2. Theme slug (auto-suggested)
  const suggestedSlug = toKebabCase(displayName.trim());
  const rawSlug = await rl.question(`  Theme slug [${suggestedSlug}]: `);
  const themeName = rawSlug.trim() || suggestedSlug;
  if (!/^[a-z][a-z0-9-]*$/.test(themeName)) {
    rl.close();
    throw new Error('Theme slug must be lowercase kebab-case (e.g. acme-corp).');
  }

  // 3. npm package name
  const suggestedPkg = `@your-scope/weldui-theme-${themeName}`;
  const rawPkg = await rl.question(`  npm package name [${suggestedPkg}]: `);
  const packageName = rawPkg.trim() || suggestedPkg;

  // 4. Primary color
  let primaryHex = '';
  while (!HEX_RE.test(primaryHex)) {
    const raw = await rl.question('  Primary color (hex, e.g. #e11d48): ');
    primaryHex = raw.trim();
    if (!HEX_RE.test(primaryHex)) {
      console.log('  \x1b[33m  Please enter a valid 6-digit hex color.\x1b[0m');
    }
  }
  primaryHex = normalizeHex(primaryHex);

  // 5. Background/surface color
  let surfaceHex = '';
  const rawSurface = await rl.question('  Background color [#ffffff]: ');
  surfaceHex = rawSurface.trim() || '#ffffff';
  if (!HEX_RE.test(surfaceHex)) {
    console.log('  Invalid hex — defaulting to #ffffff');
    surfaceHex = '#ffffff';
  }
  surfaceHex = normalizeHex(surfaceHex);

  // 6. Modes
  let rawModes = '';
  while (!['1', '2', '3'].includes(rawModes)) {
    rawModes = await rl.question('  Generate modes? [1] Light only  [2] Dark only  [3] Both: ');
    rawModes = rawModes.trim() || '3';
  }
  const modes = rawModes === '1' ? 'light' : rawModes === '2' ? 'dark' : 'both';

  rl.close();

  return {
    themeName,
    packageName,
    displayName: displayName.trim(),
    primaryHex,
    surfaceHex,
    modes: modes as ThemeOptions['modes'],
    outputDir,
  };
}
