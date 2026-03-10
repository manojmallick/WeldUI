#!/usr/bin/env tsx
// tools/scripts/scaffold-component.ts
// Usage: pnpm scaffold:component <component-name>
// Example: pnpm scaffold:component date-picker

import fs from 'fs';
import path from 'path';
import readline from 'readline';

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Usage: pnpm scaffold:component <component-name>');
  console.error('   Example: pnpm scaffold:component date-picker');
  process.exit(1);
}

if (!/^[a-z][a-z0-9-]*$/.test(componentName)) {
  console.error('❌ Component name must be lowercase kebab-case: date-picker, not DatePicker');
  process.exit(1);
}

const className = 'Uf' + componentName
  .split('-')
  .map(p => p.charAt(0).toUpperCase() + p.slice(1))
  .join('');

const tag = `wu-${componentName}`;
const dir = path.join(process.cwd(), 'packages/core/src/components', componentName);

if (fs.existsSync(dir)) {
  console.error(`❌ Component already exists: ${dir}`);
  process.exit(1);
}

console.log(`\n🧱 Scaffolding WeldUI component: ${tag}\n`);

// ── Create directory ──
fs.mkdirSync(dir, { recursive: true });

// ── styles.ts ──
fs.writeFileSync(path.join(dir, `${tag}.styles.ts`), `import { css } from 'lit';

export const styles = css\`
  :host {
    display: inline-flex;

    /* ── Component Tokens ──────────────────────────────────────
       All values reference semantic tokens (Layer 2).
       Never use hardcoded colours, spacing, or radii.
       ──────────────────────────────────────────────────────── */
    --wu-${componentName}-bg:          var(--wu-color-surface);
    --wu-${componentName}-color:       var(--wu-color-text);
    --wu-${componentName}-border:      var(--wu-color-border);
    --wu-${componentName}-radius:      var(--wu-radius-md);
    --wu-${componentName}-font-size:   var(--wu-text-sm);
    --wu-${componentName}-padding-x:   var(--wu-space-4);
    --wu-${componentName}-padding-y:   var(--wu-space-2);
    --wu-${componentName}-transition:  all var(--wu-duration-normal) var(--wu-ease-default);
  }

  /* ── Variants ── */
  :host([variant="primary"]) {
    --wu-${componentName}-bg:    var(--wu-color-primary);
    --wu-${componentName}-color: var(--wu-color-primary-fg);
  }

  /* ── Sizes ── */
  :host([size="sm"]) {
    --wu-${componentName}-font-size:  var(--wu-text-xs);
    --wu-${componentName}-padding-x:  var(--wu-space-3);
  }
  :host([size="lg"]) {
    --wu-${componentName}-font-size:  var(--wu-text-base);
    --wu-${componentName}-padding-x:  var(--wu-space-6);
  }

  /* ── Disabled ── */
  :host([disabled]) {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }

  /* ── Base element ── */
  .base {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background:    var(--wu-${componentName}-bg);
    color:         var(--wu-${componentName}-color);
    border:        1px solid var(--wu-${componentName}-border);
    border-radius: var(--wu-${componentName}-radius);
    font-family:   var(--wu-font-sans);
    font-size:     var(--wu-${componentName}-font-size);
    padding:       var(--wu-${componentName}-padding-y) var(--wu-${componentName}-padding-x);
    transition:    var(--wu-${componentName}-transition);
    cursor: pointer;
  }

  .base:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }
\`;
`);

// ── component.ts ──
fs.writeFileSync(path.join(dir, `${tag}.ts`), `import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './${tag}.styles.js';

/**
 * TODO: Write a one-sentence description of this component.
 *
 * @element ${tag}
 *
 * @slot - Default slot content
 *
 * @event wu-change - Emitted when the value changes
 *
 * @csspart base - The component's base element
 *
 * @cssprop --wu-${componentName}-bg - Background colour
 * @cssprop --wu-${componentName}-color - Text colour
 * @cssprop --wu-${componentName}-border - Border colour
 * @cssprop --wu-${componentName}-radius - Border radius
 *
 * @example
 * \`\`\`html
 * <${tag} variant="primary">Content</${tag}>
 * \`\`\`
 */
@customElement('${tag}')
export class ${className} extends LitElement {
  static styles = styles;

  /** Visual style variant */
  @property({ reflect: true })
  variant: 'default' | 'primary' = 'default';

  /** Size variant */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  private handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent('wu-change', {
      bubbles: true,
      composed: true,
      detail: { originalEvent: e }
    }));
  }

  render() {
    return html\`
      <div
        part="base"
        class="base"
        role="button"
        tabindex=\${this.disabled ? '-1' : '0'}
        aria-disabled=\${this.disabled ? 'true' : 'false'}
        @click=\${this.handleClick}
      >
        <slot></slot>
      </div>
    \`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    '${tag}': ${className};
  }
}
`);

// ── stories.ts ──
fs.writeFileSync(path.join(dir, `${tag}.stories.ts`), `import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './${tag}.js';

const meta: Meta = {
  title: 'Components/${className.slice(2)}',
  component: '${tag}',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { variant: 'default', size: 'md', disabled: false },
  render: (args) => html\`
    <${tag}
      variant=\${args.variant}
      size=\${args.size}
      ?disabled=\${args.disabled}
    >
      ${className.slice(2)}
    </${tag}>
  \`,
};

export const AllVariants: Story = {
  render: () => html\`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;padding:16px">
      <${tag} variant="default">Default</${tag}>
      <${tag} variant="primary">Primary</${tag}>
      <${tag} disabled>Disabled</${tag}>
    </div>
  \`,
};

export const Sizes: Story = {
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center;padding:16px">
      <${tag} size="sm">Small</${tag}>
      <${tag} size="md">Medium</${tag}>
      <${tag} size="lg">Large</${tag}>
    </div>
  \`,
};
`);

// ── test.ts ──
fs.writeFileSync(path.join(dir, `${tag}.test.ts`), `import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './${tag}.js';
import type { ${className} } from './${tag}.js';

describe('${tag}', () => {
  it('renders with default props', async () => {
    const el = await fixture<${className}>(html\`<${tag}>Content</${tag}>\`);
    expect(el.variant).toBe('default');
    expect(el.size).toBe('md');
    expect(el.disabled).toBe(false);
  });

  it('reflects variant as attribute', async () => {
    const el = await fixture<${className}>(html\`<${tag} variant="primary">Content</${tag}>\`);
    expect(el.getAttribute('variant')).toBe('primary');
  });

  it('emits wu-change event on click', async () => {
    const el = await fixture<${className}>(html\`<${tag}>Content</${tag}>\`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    el.shadowRoot!.querySelector('.base')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('does not emit wu-change when disabled', async () => {
    const el = await fixture<${className}>(html\`<${tag} disabled>Content</${tag}>\`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    el.shadowRoot!.querySelector('.base')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(handler).not.toHaveBeenCalled();
  });

  it('renders slotted content', async () => {
    const el = await fixture<${className}>(html\`<${tag}>Hello World</${tag}>\`);
    const slot = el.shadowRoot!.querySelector('slot')!;
    expect(slot).toBeTruthy();
  });

  it('meets accessibility requirements', async () => {
    const el = await fixture<${className}>(html\`<${tag}>Accessible content</${tag}>\`);
    await expect(el).to.be.accessible();
  });
});
`);

// ── Update index.ts ──
const indexPath = path.join(process.cwd(), 'packages/core/src/index.ts');
if (fs.existsSync(indexPath)) {
  let index = fs.readFileSync(indexPath, 'utf-8');
  const exportLine = `export { ${className} } from './components/${componentName}/${tag}.js';\n`;
  const importLine = `import './components/${componentName}/${tag}.js';\n`;
  if (!index.includes(exportLine)) {
    index = exportLine + index;
    // Add side-effect import at end
    index = index + importLine;
    fs.writeFileSync(indexPath, index);
    console.log(`  ✅ Added to packages/core/src/index.ts`);
  }
}

console.log(`\n✅ Component scaffolded successfully!\n`);
console.log(`   Created files:`);
console.log(`   📁 packages/core/src/components/${componentName}/`);
console.log(`      ├── ${tag}.styles.ts`);
console.log(`      ├── ${tag}.ts`);
console.log(`      ├── ${tag}.stories.ts`);
console.log(`      └── ${tag}.test.ts\n`);
console.log(`   Next steps:`);
console.log(`   1. Implement the component logic in ${tag}.ts`);
console.log(`   2. Complete the styles in ${tag}.styles.ts`);
console.log(`   3. Add all variants to ${tag}.stories.ts`);
console.log(`   4. Run: pnpm test --filter @weldui/core`);
console.log(`   5. Run: pnpm storybook\n`);
