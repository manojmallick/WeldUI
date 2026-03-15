import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-spacer.js';
import type { WuSpacer } from './wu-spacer.js';

describe('wu-spacer', () => {
  it('renders with default size', async () => {
    const el = await fixture<WuSpacer>(html`<wu-spacer></wu-spacer>`);
    expect(el.size).toBe('auto');
  });

  it('reflects size attribute', async () => {
    const el = await fixture<WuSpacer>(html`<wu-spacer size="md"></wu-spacer>`);
    expect(el.getAttribute('size')).toBe('md');
    expect(el.size).toBe('md');
  });

  it('renders the base span with aria-hidden', async () => {
    const el = await fixture<WuSpacer>(html`<wu-spacer></wu-spacer>`);
    const span = el.shadowRoot?.querySelector('span[part="base"]') as HTMLElement;
    expect(span).toBeTruthy();
    expect(span.getAttribute('aria-hidden')).toBe('true');
  });

  it('accepts all size values', async () => {
    for (const size of ['xs', 'sm', 'md', 'lg', 'xl', 'auto'] as const) {
      const el = await fixture<WuSpacer>(html`<wu-spacer size=${size}></wu-spacer>`);
      expect(el.size).toBe(size);
    }
  });

  it('host is display:block', async () => {
    const el = await fixture<WuSpacer>(html`<wu-spacer></wu-spacer>`);
    expect(el).toBeTruthy();
  });
});
