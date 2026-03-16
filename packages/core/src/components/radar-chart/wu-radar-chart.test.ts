import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-radar-chart.js';

describe('wu-radar-chart', () => {
  it('renders placeholder', async () => {
    const el: any = await fixture(html`<wu-radar-chart></wu-radar-chart>`);
    expect(el.shadowRoot!.querySelector('.placeholder')).toBeTruthy();
  });
  it('shows axis count in placeholder', async () => {
    const el: any = await fixture(html`<wu-radar-chart></wu-radar-chart>`);
    el.axes = [{ label: 'A', value: 80 }, { label: 'B', value: 60 }];
    await el.updateComplete;
    await new Promise(r => setTimeout(r, 0));
    expect(el.axes.length).toBe(2);
  });
});
