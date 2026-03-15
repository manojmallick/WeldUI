import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-mega-menu.js';

describe('wu-mega-menu', () => {
  it('is hidden by default', async () => {
    const el = await fixture(html`<wu-mega-menu></wu-mega-menu>`);
    expect(el.shadowRoot!.querySelector('.overlay')!.hasAttribute('hidden')).toBe(true);
  });

  it('opens on trigger click', async () => {
    const el: any = await fixture(html`<wu-mega-menu><button slot="trigger">Menu</button></wu-mega-menu>`);
    el.shadowRoot!.querySelector('.trigger-slot')!.click();
    await elementUpdated(el);
    expect(el.open).toBe(true);
  });

  it('emits wu-open on open', async () => {
    const el: any = await fixture(html`<wu-mega-menu></wu-mega-menu>`);
    const handler = vi.fn();
    el.addEventListener('wu-open', handler);
    el.shadowRoot!.querySelector('.trigger-slot')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('closes on backdrop click', async () => {
    const el: any = await fixture(html`<wu-mega-menu .open=${true}></wu-mega-menu>`);
    await elementUpdated(el);
    el.shadowRoot!.querySelector('.backdrop')?.click();
    await elementUpdated(el);
    expect(el.open).toBe(false);
  });

  it('emits wu-close on close', async () => {
    const el: any = await fixture(html`<wu-mega-menu .open=${true}></wu-mega-menu>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-close', handler);
    el._close();
    expect(handler).toHaveBeenCalledOnce();
  });
});
