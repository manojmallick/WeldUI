import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-drawer.js';
import type { WuDrawer } from './wu-drawer.js';

describe('wu-drawer', () => {
  it('is hidden by default', async () => {
    const el = await fixture<WuDrawer>(html`<wu-drawer label="Settings"></wu-drawer>`);
    expect(el.open).toBe(false);
  });
  it('shows when open is set', async () => {
    const el = await fixture<WuDrawer>(html`<wu-drawer open label="Panel"></wu-drawer>`);
    expect(el.open).toBe(true);
  });
  it('has dialog role', async () => {
    const el = await fixture<WuDrawer>(html`<wu-drawer open label="Nav"></wu-drawer>`);
    expect(el.shadowRoot!.querySelector('[role="dialog"]')).toBeTruthy();
  });
  it('emits wu-close on close button click', async () => {
    const el = await fixture<WuDrawer>(html`<wu-drawer open label="Test"></wu-drawer>`);
    const handler = vi.fn();
    el.addEventListener('wu-close', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.close-btn')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });
  it('emits wu-close on backdrop click', async () => {
    const el = await fixture<WuDrawer>(html`<wu-drawer open label="Test"></wu-drawer>`);
    const handler = vi.fn();
    el.addEventListener('wu-close', handler);
    el.shadowRoot!.querySelector<HTMLDivElement>('.backdrop')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });
  it('reflects placement attribute', async () => {
    const el = await fixture<WuDrawer>(html`<wu-drawer placement="left" label="Nav"></wu-drawer>`);
    expect(el.getAttribute('placement')).toBe('left');
  });
});
