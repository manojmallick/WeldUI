import { describe, it, expect } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-sidebar.js';
import type { WuSidebar } from './wu-sidebar.js';
import type { WuSidebarItem } from './wu-sidebar.js';

describe('wu-sidebar', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuSidebar>(html`<wu-sidebar></wu-sidebar>`);
    expect(el.collapsed).toBe(false);
    expect(el.hideToggle).toBe(false);
  });

  it('renders slotted sidebar items', async () => {
    const el = await fixture<WuSidebar>(html`
      <wu-sidebar>
        <wu-sidebar-item href="#">Home</wu-sidebar-item>
        <wu-sidebar-item href="#">Settings</wu-sidebar-item>
      </wu-sidebar>
    `);
    expect(el.querySelectorAll('wu-sidebar-item').length).toBe(2);
  });

  it('toggle button exists in shadow root', async () => {
    const el = await fixture<WuSidebar>(html`<wu-sidebar></wu-sidebar>`);
    const btn = el.shadowRoot!.querySelector('button.toggle');
    expect(btn).toBeTruthy();
  });

  it('collapses on toggle click', async () => {
    const el = await fixture<WuSidebar>(html`<wu-sidebar></wu-sidebar>`);
    el.shadowRoot!.querySelector<HTMLButtonElement>('button.toggle')!.click();
    await elementUpdated(el);
    expect(el.collapsed).toBe(true);
    expect(el.hasAttribute('collapsed')).toBe(true);
  });

  it('expands again on second toggle click', async () => {
    const el = await fixture<WuSidebar>(html`<wu-sidebar collapsed></wu-sidebar>`);
    el.shadowRoot!.querySelector<HTMLButtonElement>('button.toggle')!.click();
    await elementUpdated(el);
    expect(el.collapsed).toBe(false);
  });

  it('emits wu-collapse with detail when toggled', async () => {
    const el = await fixture<WuSidebar>(html`<wu-sidebar></wu-sidebar>`);
    let detail: { collapsed: boolean } | null = null;
    el.addEventListener('wu-collapse', (e: Event) => {
      detail = (e as CustomEvent).detail;
    });
    el.shadowRoot!.querySelector<HTMLButtonElement>('button.toggle')!.click();
    expect(detail).toBeTruthy();
    expect((detail as { collapsed: boolean }).collapsed).toBe(true);
  });

  it('hides toggle when hide-toggle is set', async () => {
    const el = await fixture<WuSidebar>(html`<wu-sidebar hide-toggle></wu-sidebar>`);
    expect(el.shadowRoot!.querySelector('button.toggle')).toBeNull();
  });
});

describe('wu-sidebar-item', () => {
  it('renders as link when href is provided', async () => {
    const el = await fixture<WuSidebarItem>(html`
      <wu-sidebar-item href="/home">Home</wu-sidebar-item>
    `);
    const link = el.shadowRoot!.querySelector('a');
    expect(link).toBeTruthy();
    expect(link!.getAttribute('href')).toBe('/home');
  });

  it('renders as button when no href', async () => {
    const el = await fixture<WuSidebarItem>(html`
      <wu-sidebar-item>Click me</wu-sidebar-item>
    `);
    expect(el.shadowRoot!.querySelector('button')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('a')).toBeNull();
  });

  it('reflects active attribute', async () => {
    const el = await fixture<WuSidebarItem>(html`
      <wu-sidebar-item href="#" active>Home</wu-sidebar-item>
    `);
    expect(el.hasAttribute('active')).toBe(true);
    expect(el.shadowRoot!.querySelector('a')!.getAttribute('aria-current')).toBe('page');
  });
});
