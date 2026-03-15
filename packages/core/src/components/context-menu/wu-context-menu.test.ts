import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-context-menu.js';
import type { WuContextMenu, ContextMenuItem } from './wu-context-menu.js';

const items: ContextMenuItem[] = [
  { label: 'Edit', value: 'edit' },
  { label: 'Delete', value: 'delete', danger: true },
  { separator: true, label: '', value: '' },
  { label: 'Share', value: 'share', disabled: true }
];

describe('wu-context-menu', () => {
  it('is hidden by default', async () => {
    const el = await fixture<WuContextMenu>(html`<wu-context-menu .items=${items}></wu-context-menu>`);
    expect(el.open).toBe(false);
  });
  it('renders items when open', async () => {
    const el = await fixture<WuContextMenu>(html`<wu-context-menu open .items=${items}></wu-context-menu>`);
    const btns = el.shadowRoot!.querySelectorAll('[role="menuitem"]');
    expect(btns.length).toBe(3);
  });
  it('renders separator', async () => {
    const el = await fixture<WuContextMenu>(html`<wu-context-menu open .items=${items}></wu-context-menu>`);
    expect(el.shadowRoot!.querySelector('[role="separator"]')).toBeTruthy();
  });
  it('emits wu-select on item click', async () => {
    const el = await fixture<WuContextMenu>(html`<wu-context-menu open .items=${items}></wu-context-menu>`);
    const handler = vi.fn();
    el.addEventListener('wu-select', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('[role="menuitem"]')!.click();
    expect(handler).toHaveBeenCalledOnce();
    expect((handler.mock.calls[0][0] as CustomEvent).detail.value).toBe('edit');
  });
  it('has menu role', async () => {
    const el = await fixture<WuContextMenu>(html`<wu-context-menu open .items=${items}></wu-context-menu>`);
    expect(el.shadowRoot!.querySelector('[role="menu"]')).toBeTruthy();
  });
});
