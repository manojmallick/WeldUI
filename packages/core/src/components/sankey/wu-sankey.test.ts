import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-sankey.js';

describe('wu-sankey', () => {
  it('renders placeholder', async () => {
    const el: any = await fixture(html`<wu-sankey></wu-sankey>`);
    expect(el.shadowRoot!.querySelector('.placeholder')).toBeTruthy();
  });

  it('shows title', async () => {
    const el: any = await fixture(html`<wu-sankey .title=${'Flow'}></wu-sankey>`);
    expect(el.title).toBe('Flow');
  });
});
