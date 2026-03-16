import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-candlestick.js';

const candles = [
  { date: 'Mon', open: 100, high: 115, low: 95, close: 110 },
  { date: 'Tue', open: 110, high: 120, low: 105, close: 108 },
];

describe('wu-candlestick', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-candlestick></wu-candlestick>`);
    expect(el).toBeTruthy();
  });

  it('shows title', async () => {
    const el: any = await fixture(html`<wu-candlestick .title=${'SPY'}></wu-candlestick>`);
    expect(el.title).toBe('SPY');
  });

  it('renders candles', async () => {
    const el: any = await fixture(html`<wu-candlestick></wu-candlestick>`);
    el.candles = candles;
    await el.updateComplete;
    await new Promise(r => setTimeout(r, 0));
    expect(el.candles.length).toBe(2);
  });

  it('marks up candles as figure', async () => {
    const el = await fixture(html`<wu-candlestick></wu-candlestick>`);
    const fig = el.shadowRoot!.querySelector('[role="figure"]');
    expect(fig).toBeTruthy();
  });

  it('applies up/down classes', async () => {
    const el: any = await fixture(html`<wu-candlestick></wu-candlestick>`);
    el.candles = candles;
    await el.updateComplete;
    expect(el.candles[0].close >= el.candles[0].open).toBe(true);
    expect(el.candles[1].close < el.candles[1].open).toBe(true);
  });
});
