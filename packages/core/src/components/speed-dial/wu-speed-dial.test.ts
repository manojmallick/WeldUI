import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-speed-dial.js';

const actions = [
  { label: 'Edit', value: 'edit', icon: '✏️' },
  { label: 'Share', value: 'share', icon: '📤' },
  { label: 'Delete', value: 'delete', icon: '🗑️' },
];

describe('wu-speed-dial', () => {
  it('renders FAB button', async () => {
    const el = await fixture(html`<wu-speed-dial></wu-speed-dial>`);
    expect(el.shadowRoot!.querySelector('.fab')).toBeTruthy();
  });

  it('actions hidden by default', async () => {
    const el: any = await fixture(html`<wu-speed-dial .actions=${actions}></wu-speed-dial>`);
    expect(el.shadowRoot!.querySelector('.actions')!.hasAttribute('hidden')).toBe(true);
  });

  it('toggles open on FAB click', async () => {
    const el: any = await fixture(html`<wu-speed-dial .actions=${actions}></wu-speed-dial>`);
    el.shadowRoot!.querySelector('.fab')!.click();
    await elementUpdated(el);
    expect(el.open).toBe(true);
  });

  it('renders action buttons when open', async () => {
    const el: any = await fixture(html`<wu-speed-dial .actions=${actions} .open=${true}></wu-speed-dial>`);
    await elementUpdated(el);
    const btns = el.shadowRoot!.querySelectorAll('.action-btn');
    expect(btns.length).toBe(3);
  });

  it('emits wu-action-click on action button click', async () => {
    const el: any = await fixture(html`<wu-speed-dial .actions=${actions} .open=${true}></wu-speed-dial>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-action-click', handler);
    el.shadowRoot!.querySelector('.action-btn')!.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toBe('edit');
  });
});
