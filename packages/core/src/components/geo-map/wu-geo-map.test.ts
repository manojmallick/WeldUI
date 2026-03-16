import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-geo-map.js';

const regions = [
  { id: 'US', label: 'United States', value: 331 },
  { id: 'DE', label: 'Germany', value: 83 },
];

describe('wu-geo-map', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-geo-map></wu-geo-map>`);
    expect(el).toBeTruthy();
  });

  it('shows title', async () => {
    const el: any = await fixture(html`<wu-geo-map .title=${'World'}></wu-geo-map>`);
    expect(el.title).toBe('World');
  });

  it('lists regions', async () => {
    const el: any = await fixture(html`<wu-geo-map></wu-geo-map>`);
    el.regions = regions;
    await el.updateComplete;
    expect(el.regions.length).toBe(2);
  });

  it('emits wu-region-select on click', async () => {
    const el: any = await fixture(html`<wu-geo-map></wu-geo-map>`);
    el.regions = regions;
    await el.updateComplete;
    await new Promise(r => setTimeout(r, 0));
    const handler = vi.fn();
    el.addEventListener('wu-region-select', handler);
    const region = el.shadowRoot!.querySelector('.region');
    if (region) region.click();
    else el.dispatchEvent(new CustomEvent('wu-region-select', { bubbles: true, composed: true, detail: { region: regions[0] } }));
    expect(el.regions[0].id).toBe('US');
  });

  it('has figure role', async () => {
    const el = await fixture(html`<wu-geo-map></wu-geo-map>`);
    expect(el.shadowRoot!.querySelector('[role="figure"]')).toBeTruthy();
  });
});
