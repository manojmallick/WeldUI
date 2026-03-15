import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-signature.js';

describe('wu-signature', () => {
  it('renders canvas element', async () => {
    const el = await fixture(html`<wu-signature></wu-signature>`);
    const canvas = el.shadowRoot!.querySelector('canvas');
    expect(canvas).toBeTruthy();
  });

  it('shows placeholder when empty', async () => {
    const el = await fixture(html`<wu-signature></wu-signature>`);
    const placeholder = el.shadowRoot!.querySelector('.placeholder');
    expect(placeholder).toBeTruthy();
  });

  it('shows clear button', async () => {
    const el = await fixture(html`<wu-signature></wu-signature>`);
    const btn = el.shadowRoot!.querySelector('.clear-btn');
    expect(btn).toBeTruthy();
  });

  it('emits wu-clear when clear() called', async () => {
    const el: any = await fixture(html`<wu-signature></wu-signature>`);
    const handler = vi.fn();
    el.addEventListener('wu-clear', handler);
    el.clear();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('empty is true by default', async () => {
    const el: any = await fixture(html`<wu-signature></wu-signature>`);
    expect(el.empty).toBe(true);
  });
});
