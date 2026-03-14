import { describe, it, expect } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-navbar.js';
import type { WuNavbar } from './wu-navbar.js';

describe('wu-navbar', () => {
  it('renders default props', async () => {
    const el = await fixture<WuNavbar>(html`<wu-navbar></wu-navbar>`);
    expect(el.sticky).toBe(false);
    expect(el.fixed).toBe(false);
  });

  it('renders logo, nav, and actions slots', async () => {
    const el = await fixture<WuNavbar>(html`
      <wu-navbar>
        <span slot="logo">Brand</span>
        <a href="#">Home</a>
        <button slot="actions">Login</button>
      </wu-navbar>
    `);
    expect(el.querySelector('[slot="logo"]')!.textContent).toBe('Brand');
    expect(el.querySelector('[slot="actions"]')!.tagName).toBe('BUTTON');
  });

  it('reflects sticky attribute', async () => {
    const el = await fixture<WuNavbar>(html`<wu-navbar sticky></wu-navbar>`);
    expect(el.hasAttribute('sticky')).toBe(true);
  });

  it('burger button is present in shadow root', async () => {
    const el = await fixture<WuNavbar>(html`<wu-navbar></wu-navbar>`);
    const burger = el.shadowRoot!.querySelector('button.burger');
    expect(burger).toBeTruthy();
  });

  it('toggles mobile drawer on burger click', async () => {
    const el = await fixture<WuNavbar>(html`<wu-navbar></wu-navbar>`);
    const burger = el.shadowRoot!.querySelector<HTMLButtonElement>('button.burger')!;
    burger.click();
    await elementUpdated(el);
    expect(el.hasAttribute('_open')).toBe(true);
    expect(burger.getAttribute('aria-expanded')).toBe('true');
  });

  it('closes drawer on second burger click', async () => {
    const el = await fixture<WuNavbar>(html`<wu-navbar></wu-navbar>`);
    const burger = el.shadowRoot!.querySelector<HTMLButtonElement>('button.burger')!;
    burger.click();
    await elementUpdated(el);
    burger.click();
    await elementUpdated(el);
    expect(el.hasAttribute('_open')).toBe(false);
  });

  it('emits wu-menu-open on open', async () => {
    const el = await fixture<WuNavbar>(html`<wu-navbar></wu-navbar>`);
    let fired = false;
    el.addEventListener('wu-menu-open', () => { fired = true; });
    el.shadowRoot!.querySelector<HTMLButtonElement>('button.burger')!.click();
    expect(fired).toBe(true);
  });

  it('emits wu-menu-close when closing', async () => {
    const el = await fixture<WuNavbar>(html`<wu-navbar></wu-navbar>`);
    const burger = el.shadowRoot!.querySelector<HTMLButtonElement>('button.burger')!;
    burger.click();
    await elementUpdated(el);
    let fired = false;
    el.addEventListener('wu-menu-close', () => { fired = true; });
    burger.click();
    expect(fired).toBe(true);
  });
});
