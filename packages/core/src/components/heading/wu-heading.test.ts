import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-heading.js';
import type { WuHeading } from './wu-heading.js';

describe('wu-heading', () => {
  it('renders with default level 2', async () => {
    const el = await fixture<WuHeading>(html`<wu-heading>Title</wu-heading>`);
    expect(el.level).toBe(2);
    expect(el.size).toBe('auto');
    expect(el.truncate).toBe(false);
  });

  it('renders an h2 element by default', async () => {
    const el = await fixture<WuHeading>(html`<wu-heading>Title</wu-heading>`);
    expect(el.shadowRoot?.querySelector('h2')).toBeTruthy();
  });

  it('renders the correct heading tag per level', async () => {
    for (const level of [1, 2, 3, 4, 5, 6] as const) {
      const el = await fixture<WuHeading>(html`<wu-heading .level=${level}>H</wu-heading>`);
      expect(el.shadowRoot?.querySelector(`h${level}`)).toBeTruthy();
    }
  });

  it('applies explicit size class', async () => {
    const el = await fixture<WuHeading>(html`<wu-heading level="3" size="2xl">Heading</wu-heading>`);
    const h = el.shadowRoot?.querySelector('h3');
    expect(h?.className).toContain('size-2xl');
  });

  it('applies truncate class', async () => {
    const el = await fixture<WuHeading>(html`<wu-heading truncate>Long title</wu-heading>`);
    const h = el.shadowRoot?.querySelector('h2');
    expect(h?.className).toContain('truncate');
  });
});
