import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-mark.js';
import type { WuMark } from './wu-mark.js';

describe('wu-mark', () => {
  it('renders with default variant', async () => {
    const el = await fixture<WuMark>(html`<wu-mark>highlight</wu-mark>`);
    expect(el.variant).toBe('default');
  });

  it('renders a mark element', async () => {
    const el = await fixture<WuMark>(html`<wu-mark>text</wu-mark>`);
    expect(el.shadowRoot?.querySelector('mark[part="base"]')).toBeTruthy();
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<WuMark>(html`<wu-mark variant="success">good</wu-mark>`);
    expect(el.getAttribute('variant')).toBe('success');
  });

  it('displays slotted content', async () => {
    const el = await fixture<WuMark>(html`<wu-mark>highlighted text</wu-mark>`);
    expect(el.textContent).toContain('highlighted text');
  });

  it('accepts all variants', async () => {
    for (const v of ['default', 'success', 'warning', 'danger', 'info'] as const) {
      const el = await fixture<WuMark>(html`<wu-mark variant=${v}>text</wu-mark>`);
      expect(el.variant).toBe(v);
    }
  });
});
