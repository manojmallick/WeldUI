import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-notification-center.js';

const notes = [
  { id: '1', title: 'New message', body: 'You have a new message.', time: '2m ago', read: false },
  { id: '2', title: 'Deployment done', body: 'v1.2.0 deployed.', time: '1h ago', read: true },
];

describe('wu-notification-center', () => {
  it('shows bell trigger button', async () => {
    const el = await fixture(html`<wu-notification-center></wu-notification-center>`);
    expect(el.shadowRoot!.querySelector('.trigger')).toBeTruthy();
  });

  it('shows unread badge when unread notifications exist', async () => {
    const el: any = await fixture(html`<wu-notification-center .notifications=${[{ id: '1', title: 'Hi', read: false }]}></wu-notification-center>`);
    expect(el.shadowRoot!.querySelector('.badge')).toBeTruthy();
  });

  it('opens panel on bell click', async () => {
    const el: any = await fixture(html`<wu-notification-center .notifications=${notes}></wu-notification-center>`);
    el.shadowRoot!.querySelector('.trigger')!.click();
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.panel')!.hasAttribute('hidden')).toBe(false);
  });

  it('renders notification items', async () => {
    const el: any = await fixture(html`<wu-notification-center .notifications=${notes} ._open=${true}></wu-notification-center>`);
    el._open = true;
    await elementUpdated(el);
    const items = el.shadowRoot!.querySelectorAll('.item');
    expect(items.length).toBe(2);
  });

  it('emits wu-notification-click on item click', async () => {
    const el: any = await fixture(html`<wu-notification-center .notifications=${[...notes]}></wu-notification-center>`);
    el._open = true;
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-notification-click', handler);
    el.shadowRoot!.querySelector('.item')!.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.id).toBe('1');
  });
});
