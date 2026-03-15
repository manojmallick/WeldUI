import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-dropdown.js';

describe('wu-dropdown', () => {
  it('is hidden by default', async () => {
    const el = await fixture(html`<wu-dropdown></wu-dropdown>`);
    const menu = el.shadowRoot!.querySelector('.dropdown-menu') as HTMLElement;
    expect(menu.hidden).toBe(true);
  });

  it('opens when open is set', async () => {
    const el: any = await fixture(html`<wu-dropdown></wu-dropdown>`);
    el.open = true;
    await elementUpdated(el);
    const menu = el.shadowRoot!.querySelector('.dropdown-menu') as HTMLElement;
    expect(menu.hidden).toBe(false);
  });

  it('renders items from items prop', async () => {
    const el: any = await fixture(html`<wu-dropdown .items=${[{ label: 'Edit', value: 'edit' }, { label: 'Delete', value: 'delete' }]} .open=${true}></wu-dropdown>`);
    await elementUpdated(el);
    const btns = el.shadowRoot!.querySelectorAll('.item');
    expect(btns.length).toBe(2);
  });

  it('emits wu-select when item clicked', async () => {
    const el: any = await fixture(html`<wu-dropdown .items=${[{ label: 'Edit', value: 'edit' }]} .open=${true}></wu-dropdown>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-select', handler);
    el.shadowRoot!.querySelector('.item')!.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toBe('edit');
  });

  it('does not emit wu-select for disabled items', async () => {
    const el: any = await fixture(html`<wu-dropdown .items=${[{ label: 'X', value: 'x', disabled: true }]} .open=${true}></wu-dropdown>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-select', handler);
    el.shadowRoot!.querySelector('.item')!.click();
    expect(handler).not.toHaveBeenCalled();
  });
});
