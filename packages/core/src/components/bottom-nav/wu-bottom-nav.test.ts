import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-bottom-nav.js';

describe('wu-bottom-nav', () => {
  it('renders nav role', async () => {
    const el = await fixture(html`<wu-bottom-nav></wu-bottom-nav>`);
    expect(el.shadowRoot!.querySelector('nav')).toBeTruthy();
  });

  it('renders item label and icon', async () => {
    const el = await fixture(html`<wu-bottom-nav-item label="Home" icon="🏠"></wu-bottom-nav-item>`);
    expect(el.shadowRoot!.querySelector('.label')!.textContent).toBe('Home');
    expect(el.shadowRoot!.querySelector('.icon')!.textContent).toBe('🏠');
  });

  it('sets active on the clicked item', async () => {
    const nav: any = await fixture(html`
      <wu-bottom-nav>
        <wu-bottom-nav-item value="home" label="Home"></wu-bottom-nav-item>
        <wu-bottom-nav-item value="search" label="Search"></wu-bottom-nav-item>
      </wu-bottom-nav>`);
    const items = nav.querySelectorAll('wu-bottom-nav-item');
    items[0].shadowRoot!.querySelector('button')!.click();
    await elementUpdated(items[0]);
    expect(items[0].active).toBe(true);
    expect(items[1].active).toBe(false);
  });

  it('emits wu-change with value', async () => {
    const nav: any = await fixture(html`
      <wu-bottom-nav>
        <wu-bottom-nav-item value="profile" label="Profile"></wu-bottom-nav-item>
      </wu-bottom-nav>`);
    const handler = vi.fn();
    nav.addEventListener('wu-change', handler);
    nav.querySelector('wu-bottom-nav-item')!.shadowRoot!.querySelector('button')!.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toBe('profile');
  });

  it('reflects active attribute', async () => {
    const el: any = await fixture(html`<wu-bottom-nav-item value="x" label="X"></wu-bottom-nav-item>`);
    el.active = true;
    await elementUpdated(el);
    expect(el.hasAttribute('active')).toBe(true);
  });
});
