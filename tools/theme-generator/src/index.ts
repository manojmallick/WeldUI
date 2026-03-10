#!/usr/bin/env node
/**
 * create-weldui-theme — Interactive WeldUI theme generator CLI
 *
 * Usage:
 *   npx create-weldui-theme               → prompts for all options
 *   npx create-weldui-theme ./my-theme    → specify output directory
 */

import fs from 'fs';
import path from 'path';
import { runPrompts } from './prompts.js';
import {
  generateColorScale,
  generateLightCSS,
  generateDarkCSS,
  generatePackageJSON,
  generateReadme,
  generatePreviewHTML,
  checkContrastPairs,
  type ContrastIssue,
} from './generator.js';

async function main(): Promise<void> {
  const argDir = process.argv[2];
  const outputBase = argDir
    ? path.resolve(process.cwd(), argDir)
    : process.cwd();

  let opts;
  try {
    opts = await runPrompts(outputBase);
  } catch (err) {
    console.error(`\n  \x1b[31mError: ${(err as Error).message}\x1b[0m\n`);
    process.exit(1);
  }

  const themeDir = path.join(opts.outputDir, opts.themeName);

  if (fs.existsSync(themeDir)) {
    console.error(`\n  \x1b[31mError: Directory already exists: ${themeDir}\x1b[0m\n`);
    process.exit(1);
  }

  fs.mkdirSync(themeDir, { recursive: true });

  console.log('\n  \x1b[2mGenerating color scale...\x1b[0m');
  const scale = generateColorScale(opts.primaryHex);

  // WCAG contrast check
  const contrastPairs = [
    { label: 'text on background', fg: scale.get(900)!, bg: opts.surfaceHex },
    { label: 'primary-fg on primary', fg: '#ffffff', bg: scale.get(600)! },
    { label: 'secondary text on background', fg: scale.get(700)!, bg: opts.surfaceHex },
  ];
  const issues: ContrastIssue[] = checkContrastPairs(contrastPairs);

  if (issues.length > 0) {
    console.log('\n  \x1b[33mWCGA AA contrast warnings:\x1b[0m');
    for (const issue of issues) {
      console.log(
        `    \x1b[33m⚠ ${issue.pair}: ${issue.ratio.toFixed(2)}:1 (minimum 4.5:1)\x1b[0m`,
      );
      console.log(`      ${issue.fg} on ${issue.bg}`);
    }
  }

  // Write files
  const write = (filename: string, content: string) => {
    fs.writeFileSync(path.join(themeDir, filename), content, 'utf-8');
    console.log(`  \x1b[32m✓\x1b[0m ${filename}`);
  };

  console.log(`\n  Writing to \x1b[1m${themeDir}\x1b[0m\n`);

  write('package.json', generatePackageJSON(opts));
  write('README.md', generateReadme(opts, scale));
  write('preview.html', generatePreviewHTML(opts, scale));

  if (opts.modes === 'light' || opts.modes === 'both') {
    write('light.css', generateLightCSS(opts, scale));
  }
  if (opts.modes === 'dark' || opts.modes === 'both') {
    write('dark.css', generateDarkCSS(opts, scale));
  }

  console.log(`
  \x1b[32m✨ Theme created successfully!\x1b[0m

  Next steps:
    1. \x1b[1mcd ${themeDir}\x1b[0m
    2. Review and adjust colors in light.css / dark.css
    3. Open \x1b[1mpreview.html\x1b[0m in a browser to see your theme
    4. \x1b[1mnpm publish\x1b[0m to share your theme

  Add to Storybook toolbar in apps/docs/.storybook/preview.ts:
    { value: '${opts.themeName}', title: '${opts.displayName}' }
`);
}

main().catch((err: unknown) => {
  console.error('\n  \x1b[31mFatal error:', (err as Error).message, '\x1b[0m\n');
  process.exit(1);
});

