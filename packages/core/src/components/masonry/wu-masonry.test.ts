import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-masonry.js';
import type { WuMasonry } from './wu-masonry.js';

describe('wu-masonry', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuMasonry>(html`<wu-masonry></wu-masonry>`);
    expect(el.columns).toBe(3);
    expect(el.gap).toBe('md');
  });

  it('reflects columns attribute', async () => {
    const el = await fixture<WuMasonry>(html`<wu-masonry columns="4"></wu-masonry>`);
    expect(el.getAttribute('columns')).toBe('4');
    expect(el.columns).toBe(4);
  });

  it('reflects gap attribute', async () => {
    const el = await fixture<WuMasonry>(html`<wu-masonry gap="lg"></wu-masonry>`);
    expect(el.getAttribute('gap')).toBe('lg');
  });

  it('passes column count to inline style', async () => {
    const el = await fixture<WuMasonry>(html`<wu-masonry columns="5"></wu-masonry>`);
    const base = el.shadowRoot?.querySelector('.masonry') as HTMLElement;
    expect(base.style.getPropertyValue('--wu-masonry-columns')).toBe('5');
  });

  it('renders slotted content', async () => {
    const el = await fixture<WuMasonry>(html`<wu-masonry><div>Item</div></wu-masonry>`);
    expect(el.textContent).toContain('Item');
  });
});
