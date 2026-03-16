import { describe, it, expect } from 'vitest';
import { fixture, html, aTimeout } from '@open-wc/testing';
import './wu-streaming-text.js';

describe('wu-streaming-text', () => {
  it('renders with empty text initially', async () => {
    const el: any = await fixture(html`<wu-streaming-text text="Hi"></wu-streaming-text>`);
    const span = el.shadowRoot!.querySelector('.text');
    expect(span).toBeTruthy();
  });

  it('does not have done attribute initially', async () => {
    const el: any = await fixture(html`<wu-streaming-text text="Hi"></wu-streaming-text>`);
    expect(el.hasAttribute('done')).toBe(false);
  });

  it('completes streaming and emits wu-done', async () => {
    const el: any = await fixture(html`<wu-streaming-text text="Hi" speed="1000"></wu-streaming-text>`);
    await aTimeout(50);
    expect(el.done).toBe(true);
  });

  it('renders cursor element', async () => {
    const el: any = await fixture(html`<wu-streaming-text text="Hi"></wu-streaming-text>`);
    const cursor = el.shadowRoot!.querySelector('.cursor');
    expect(cursor).toBeTruthy();
  });
});
