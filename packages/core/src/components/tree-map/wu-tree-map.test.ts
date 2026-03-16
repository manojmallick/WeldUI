import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-tree-map.js';

describe('wu-tree-map', () => {
  it('renders placeholder', async () => {
    const el: any = await fixture(html`<wu-tree-map></wu-tree-map>`);
    expect(el.shadowRoot!.querySelector('.placeholder')).toBeTruthy();
  });
  it('shows title', async () => {
    const el: any = await fixture(html`<wu-tree-map .title=${'Market'}></wu-tree-map>`);
    expect(el.title).toBe('Market');
  });
});
