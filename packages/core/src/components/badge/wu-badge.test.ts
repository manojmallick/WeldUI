import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-badge.js';

describe('wu-badge', () => {
  it('renders with default variant', async () => {
    const el = await fixture(html`<wu-badge>Label</wu-badge>`);
    // variant has reflect:true with default 'default', so attribute is present
    expect(el.getAttribute('variant')).toBe('default');
  });

  it('reflects variant attribute', async () => {
    const el = await fixture(html`<wu-badge variant="success">OK</wu-badge>`);
    expect(el.getAttribute('variant')).toBe('success');
  });

  it('renders slot content', async () => {
    const el = await fixture(html`<wu-badge>Hello</wu-badge>`);
    expect(el.textContent?.trim()).toBe('Hello');
  });
});
