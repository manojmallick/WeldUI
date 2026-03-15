import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-stat.js';
import type { WuStat } from './wu-stat.js';

describe('wu-stat', () => {
  it('renders label and value', async () => {
    const el = await fixture<WuStat>(html`<wu-stat label="Revenue" value="$12,400"></wu-stat>`);
    expect(el.shadowRoot!.querySelector('.label')?.textContent?.trim()).toBe('Revenue');
    expect(el.shadowRoot!.querySelector('.value')?.textContent?.trim()).toBe('$12,400');
  });
  it('renders delta with up trend', async () => {
    const el = await fixture<WuStat>(html`<wu-stat label="Users" value="1024" delta="+12%" trend="up"></wu-stat>`);
    const delta = el.shadowRoot!.querySelector('.delta');
    expect(delta?.classList.contains('up')).toBe(true);
  });
  it('renders delta with down trend', async () => {
    const el = await fixture<WuStat>(html`<wu-stat label="Churn" value="5%" delta="-2%" trend="down"></wu-stat>`);
    expect(el.shadowRoot!.querySelector('.delta')?.classList.contains('down')).toBe(true);
  });
  it('renders description', async () => {
    const el = await fixture<WuStat>(html`<wu-stat value="99.9%" description="30-day average"></wu-stat>`);
    expect(el.shadowRoot!.querySelector('.description')?.textContent?.trim()).toBe('30-day average');
  });
  it('does not render delta when not provided', async () => {
    const el = await fixture<WuStat>(html`<wu-stat value="100"></wu-stat>`);
    expect(el.shadowRoot!.querySelector('.delta')).toBeFalsy();
  });
});
