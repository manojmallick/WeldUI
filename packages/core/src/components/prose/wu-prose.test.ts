import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-prose.js';
import type { WuProse } from './wu-prose.js';

describe('wu-prose', () => {
  it('renders with default size', async () => {
    const el = await fixture<WuProse>(html`<wu-prose></wu-prose>`);
    expect(el.size).toBe('base');
  });

  it('reflects size attribute', async () => {
    const el = await fixture<WuProse>(html`<wu-prose size="lg"></wu-prose>`);
    expect(el.getAttribute('size')).toBe('lg');
  });

  it('renders the prose container', async () => {
    const el = await fixture<WuProse>(html`<wu-prose></wu-prose>`);
    expect(el.shadowRoot?.querySelector('.prose[part="base"]')).toBeTruthy();
  });

  it('renders slotted content', async () => {
    const el = await fixture<WuProse>(html`<wu-prose><p>Hello</p></wu-prose>`);
    expect(el.textContent).toContain('Hello');
  });

  it('accepts sm size', async () => {
    const el = await fixture<WuProse>(html`<wu-prose size="sm"></wu-prose>`);
    expect(el.size).toBe('sm');
  });
});
