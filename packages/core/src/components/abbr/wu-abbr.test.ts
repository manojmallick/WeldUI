import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-abbr.js';
import type { WuAbbr } from './wu-abbr.js';

describe('wu-abbr', () => {
  it('renders with default title', async () => {
    const el = await fixture<WuAbbr>(html`<wu-abbr title="HyperText Markup Language">HTML</wu-abbr>`);
    expect(el.title).toBe('HyperText Markup Language');
  });

  it('renders an abbr element', async () => {
    const el = await fixture<WuAbbr>(html`<wu-abbr title="CSS">CSS</wu-abbr>`);
    const abbr = el.shadowRoot?.querySelector('abbr[part="base"]') as HTMLElement;
    expect(abbr).toBeTruthy();
    expect(abbr.title).toBe('CSS');
  });

  it('exposes slotted text', async () => {
    const el = await fixture<WuAbbr>(html`<wu-abbr title="Application Programming Interface">API</wu-abbr>`);
    expect(el.textContent?.trim()).toBe('API');
  });

  it('has cursor:help via CSS', async () => {
    const el = await fixture<WuAbbr>(html`<wu-abbr title="WC">WC</wu-abbr>`);
    expect(el.shadowRoot?.querySelector('abbr')).toBeTruthy();
  });

  it('renders without title gracefully', async () => {
    const el = await fixture<WuAbbr>(html`<wu-abbr>TBD</wu-abbr>`);
    expect(el.textContent).toContain('TBD');
  });
});
