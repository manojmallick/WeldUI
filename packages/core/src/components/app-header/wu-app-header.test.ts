import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-app-header.js';
import type { WuAppHeader } from './wu-app-header.js';

describe('wu-app-header', () => {
  it('renders heading as wordmark when set', async () => {
    const el = await fixture<WuAppHeader>(html`<wu-app-header heading="Acme"></wu-app-header>`);
    const wm = el.shadowRoot!.querySelector('.wordmark');
    expect(wm?.textContent?.trim()).toBe('Acme');
  });

  it('renders header element with role banner', async () => {
    const el = await fixture<WuAppHeader>(html`<wu-app-header></wu-app-header>`);
    const hdr = el.shadowRoot!.querySelector('header');
    expect(hdr?.getAttribute('role')).toBe('banner');
  });

  it('renders nav element', async () => {
    const el = await fixture<WuAppHeader>(html`<wu-app-header></wu-app-header>`);
    expect(el.shadowRoot!.querySelector('nav')).toBeTruthy();
  });

  it('renders actions slot container', async () => {
    const el = await fixture<WuAppHeader>(html`<wu-app-header></wu-app-header>`);
    expect(el.shadowRoot!.querySelector('.actions')).toBeTruthy();
  });

  it('empty heading shows no wordmark', async () => {
    const el = await fixture<WuAppHeader>(html`<wu-app-header></wu-app-header>`);
    expect(el.shadowRoot!.querySelector('.wordmark')).toBeNull();
  });
});
