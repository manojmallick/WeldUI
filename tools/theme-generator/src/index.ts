#!/usr/bin/env node
/**
 * WeldUI Theme Generator CLI
 * Scaffolds a new theme package from the _template.
 *
 * Usage: pnpm weldui-theme my-custom-theme
 */

import fs from 'fs';
import path from 'path';

const themeName = process.argv[2];

if (!themeName) {
  console.error('❌ Usage: pnpm weldui-theme <theme-name>');
  console.error('   Example: pnpm weldui-theme acme-corp');
  process.exit(1);
}

if (!/^[a-z][a-z0-9-]*$/.test(themeName)) {
  console.error('❌ Theme name must be lowercase kebab-case');
  process.exit(1);
}

const templateDir = path.join(process.cwd(), 'packages/themes/_template');
const outputDir = path.join(process.cwd(), `packages/themes/${themeName}`);

if (fs.existsSync(outputDir)) {
  console.error(`❌ Theme already exists: ${outputDir}`);
  process.exit(1);
}

console.log(`\n🎨 Scaffolding WeldUI theme: ${themeName}\n`);

fs.mkdirSync(outputDir, { recursive: true });

// Copy and process template files
const files = fs.readdirSync(templateDir);
for (const file of files) {
  let content = fs.readFileSync(path.join(templateDir, file), 'utf-8');
  content = content.replace(/THEME_NAME/g, themeName).replace(/REPLACE_NAME/g, themeName);
  fs.writeFileSync(path.join(outputDir, file), content);
  console.log(`  ✅ Created ${file}`);
}

console.log(`
✨ Theme scaffolded at packages/themes/${themeName}/

Next steps:
  1. Edit packages/themes/${themeName}/theme.css with your brand colours
  2. Run: pnpm contrast-check packages/themes/${themeName}/theme.css
  3. Add the theme to apps/docs/.storybook/preview.ts toolbar
`);
