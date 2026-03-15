import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-dl.js';
import type { WuDl, WuDt, WuDd } from './wu-dl.js';

describe('wu-dl', () => {
  it('renders dl element', async () => {
    const el = await fixture<WuDl>(html`<wu-dl></wu-dl>`);
    expect(el.shadowRoot!.querySelector('dl')).toBeTruthy();
  });
  it('wu-dt renders dt', async () => {
    const el = await fixture<WuDt>(html`<wu-dt>Name</wu-dt>`);
    expect(el.shadowRoot!.querySelector('dt')).toBeTruthy();
  });
  it('wu-dd renders dd', async () => {
    const el = await fixture<WuDd>(html`<wu-dd>John Doe</wu-dd>`);
    expect(el.shadowRoot!.querySelector('dd')).toBeTruthy();
  });
  it('default layout is side-by-side', async () => {
    const el = await fixture<WuDl>(html`<wu-dl></wu-dl>`);
    expect(el.layout).toBe('side-by-side');
  });
  it('accepts stacked layout', async () => {
    const el = await fixture<WuDl>(html`<wu-dl layout="stacked"></wu-dl>`);
    expect(el.getAttribute('layout')).toBe('stacked');
  });
});
