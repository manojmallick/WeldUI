import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-funnel-chart.js';

describe('wu-funnel-chart', () => {
  it('renders correct number of stages', async () => {
    const el: any = await fixture(html`
      <wu-funnel-chart .stages=${[
        { label: 'Step A', value: 100 },
        { label: 'Step B', value: 60 },
        { label: 'Step C', value: 20 },
      ]}></wu-funnel-chart>
    `);
    const stages = el.shadowRoot!.querySelectorAll('.stage');
    expect(stages.length).toBe(3);
  });

  it('renders title when provided', async () => {
    const el: any = await fixture(html`<wu-funnel-chart title="Funnel" .stages=${[]}></wu-funnel-chart>`);
    expect(el.shadowRoot!.querySelector('.title')!.textContent).toBe('Funnel');
  });

  it('has figure role', async () => {
    const el: any = await fixture(html`<wu-funnel-chart .stages=${[]}></wu-funnel-chart>`);
    expect(el.shadowRoot!.querySelector('[role="figure"]')).toBeTruthy();
  });
});
