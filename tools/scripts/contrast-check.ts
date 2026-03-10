#!/usr/bin/env tsx
// tools/scripts/contrast-check.ts
// Validates WCAG colour contrast ratios in theme CSS files.
// Usage: pnpm contrast-check packages/themes/[name]/light.css

import fs from 'fs';

const file = process.argv[2];
if (!file || !fs.existsSync(file)) {
  console.error('❌ Usage: pnpm contrast-check <path-to-theme.css>');
  process.exit(1);
}

/** Convert hex to relative luminance */
function hexToLuminance(hex: string): number {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  const toLinear = (v: number) => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/** Calculate contrast ratio between two hex colours */
function contrastRatio(hex1: string, hex2: string): number {
  const l1 = hexToLuminance(hex1);
  const l2 = hexToLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/** Extract hex values from CSS file */
function extractHexValues(css: string): Record<string, string> {
  const vars: Record<string, string> = {};
  const regex = /--(wu-color-[a-z-]+):\s*(#[0-9a-fA-F]{3,8})/g;
  let match;
  while ((match = regex.exec(css)) !== null) {
    vars[`--${match[1]}`] = match[2];
  }
  return vars;
}

const css = fs.readFileSync(file, 'utf-8');
const vars = extractHexValues(css);

console.log(`\n🎨 Contrast Check: ${file}\n`);
console.log(`Found ${Object.keys(vars).length} hex colour variables\n`);

// Key pairs to check
const pairs = [
  { fg: '--wu-color-text', bg: '--wu-color-background', label: 'Body text on background' },
  { fg: '--wu-color-text', bg: '--wu-color-surface', label: 'Body text on surface' },
  { fg: '--wu-color-text-secondary', bg: '--wu-color-background', label: 'Secondary text on background' },
  { fg: '--wu-color-primary-fg', bg: '--wu-color-primary', label: 'Primary foreground on primary (buttons)' },
  { fg: '--wu-color-text-inverse', bg: '--wu-color-primary', label: 'Inverse text on primary' },
];

let failures = 0;
let warnings = 0;

for (const pair of pairs) {
  const fgHex = vars[pair.fg];
  const bgHex = vars[pair.bg];

  if (!fgHex || !bgHex) {
    console.log(`  ⚠️  ${pair.label}: Missing variables (${pair.fg}: ${fgHex || 'not found'}, ${pair.bg}: ${bgHex || 'not found'})`);
    warnings++;
    continue;
  }

  const ratio = contrastRatio(fgHex, bgHex);
  const passAA = ratio >= 4.5;
  const passAAA = ratio >= 7;
  const icon = passAA ? (passAAA ? '✅' : '✔️ ') : '❌';
  const level = passAAA ? 'AAA' : (passAA ? 'AA ' : 'FAIL');

  console.log(`  ${icon} [${level}] ${pair.label}`);
  console.log(`       ${fgHex} on ${bgHex} → ${ratio.toFixed(2)}:1`);

  if (!passAA) {
    console.log(`       ❌ Needs ${4.5}:1 minimum (WCAG AA). Currently ${ratio.toFixed(2)}:1.`);
    failures++;
  }
  console.log('');
}

console.log('─'.repeat(60));
if (failures > 0) {
  console.log(`\n❌ ${failures} contrast failure(s). Fix before publishing theme.\n`);
  process.exit(1);
} else if (warnings > 0) {
  console.log(`\n⚠️  ${warnings} warning(s). Review missing variables.\n`);
} else {
  console.log(`\n✅ All contrast checks passed (WCAG AA)!\n`);
}
