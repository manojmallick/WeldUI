import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-container.js';
import type { WuContainer } from './wu-container.js';

describe('wu-container', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuContainer>(html`<wu-container>Content</wu-container>`);
    expect(el.size).toBe('lg');
    expect(el.flush).toBe(false);
  });

  it('reflects size as an attribute', async () => {
    const el = await fixture<WuContainer>(html`<wu-container size="xl">Content</wu-container>`);
    expect(el.getAttribute('size')).toBe('xl');
  });

  it('reflects flush as an attribute', async () => {
    const el = await fixture<WuContainer>(html`<wu-container flush>Content</wu-container>`);
    expect(el.hasAttribute('flush')).toBe(true);
  });

  it('renders the base part wrapper', async () => {
    const el = await fixture<WuContainer>(html`<wu-container>Content</wu-container>`);
    const base = el.shadowRoot?.querySelector('[part="base"]');
    expect(base).toBeTruthy();
  });

  it('renders slotted content', async () => {
    const el = await fixture<WuContainer>(html`<wu-container><span>Inner</span></wu-container>`);
    expect(el.textContent).toContain('Inner');
  });
});