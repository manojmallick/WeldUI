import { describe, it, expect } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-virtual-list.js';

describe('wu-virtual-list', () => {
  it('renders viewport', async () => {
    const el = await fixture(html`<wu-virtual-list></wu-virtual-list>`);
    expect(el.shadowRoot!.querySelector('.viewport')).toBeTruthy();
  });

  it('renders visible items', async () => {
    const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
    const el: any = await fixture(html`<wu-virtual-list .items=${items} .viewportHeight=${200}></wu-virtual-list>`);
    await elementUpdated(el);
    const rendered = el.shadowRoot!.querySelectorAll('.window > *');
    expect(rendered.length).toBeLessThan(items.length);
    expect(rendered.length).toBeGreaterThan(0);
  });

  it('respects viewport-height prop', async () => {
    const el: any = await fixture(html`<wu-virtual-list viewport-height="300"></wu-virtual-list>`);
    expect(el.viewportHeight).toBe(300);
  });

  it('sets total height on spacer', async () => {
    const items = Array.from({ length: 100 }, (_, i) => i);
    const el: any = await fixture(html`<wu-virtual-list .items=${items} .itemHeight=${50}></wu-virtual-list>`);
    await elementUpdated(el);
    const total = el.shadowRoot!.querySelector('.total') as HTMLElement;
    expect(total.style.height).toBe('5000px');
  });

  it('defaults item-height to 48', async () => {
    const el: any = await fixture(html`<wu-virtual-list></wu-virtual-list>`);
    expect(el.itemHeight).toBe(48);
  });
});
