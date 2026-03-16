import { describe, it, expect } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-token-counter.js';

describe('wu-token-counter', () => {
  it('renders with default props', async () => {
    const el: any = await fixture(html`<wu-token-counter count="100" limit="4096"></wu-token-counter>`);
    expect(el.count).toBe(100);
    expect(el.limit).toBe(4096);
  });

  it('shows progressbar', async () => {
    const el: any = await fixture(html`<wu-token-counter count="512" limit="4096"></wu-token-counter>`);
    expect(el.shadowRoot!.querySelector('[role="progressbar"]')).toBeTruthy();
  });

  it('sets over-limit attribute when count exceeds limit', async () => {
    const el: any = await fixture(html`<wu-token-counter count="5000" limit="4096"></wu-token-counter>`);
    await elementUpdated(el);
    expect(el.hasAttribute('over-limit')).toBe(true);
  });

  it('sets near-limit attribute at warnAt threshold', async () => {
    const el: any = await fixture(html`<wu-token-counter count="3500" limit="4096"></wu-token-counter>`);
    await elementUpdated(el);
    expect(el.hasAttribute('near-limit')).toBe(true);
  });
});
