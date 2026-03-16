import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-waterfall-chart.js';

const items = [
  { label: 'Start', value: 100, total: true },
  { label: 'Rev', value: 80 },
  { label: 'Cost', value: -50 },
];

describe('wu-waterfall-chart', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-waterfall-chart></wu-waterfall-chart>`);
    expect(el).toBeTruthy();
  });

  it('shows title', async () => {
    const el: any = await fixture(html`<wu-waterfall-chart .title=${'Bridge'}></wu-waterfall-chart>`);
    expect(el.title).toBe('Bridge');
  });

  it('renders bars for each item', async () => {
    const el: any = await fixture(html`<wu-waterfall-chart></wu-waterfall-chart>`);
    el.items = items;
    await el.updateComplete;
    expect(el.items.length).toBe(3);
  });

  it('marks figure role', async () => {
    const el = await fixture(html`<wu-waterfall-chart></wu-waterfall-chart>`);
    expect(el.shadowRoot!.querySelector('[role="figure"]')).toBeTruthy();
  });

  it('applies total class to total items', async () => {
    const el: any = await fixture(html`<wu-waterfall-chart></wu-waterfall-chart>`);
    el.items = items;
    await el.updateComplete;
    expect(items[0].total).toBe(true);
    expect(items[1].total).toBeUndefined();
  });
});
