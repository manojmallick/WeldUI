import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-mention.js';

const users = [
  { id: '1', name: 'Alice Smith' },
  { id: '2', name: 'Bob Jones' },
  { id: '3', name: 'Charlie Brown' },
];

describe('wu-mention', () => {
  it('renders input', async () => {
    const el = await fixture(html`<wu-mention></wu-mention>`);
    expect(el.shadowRoot!.querySelector('input')).toBeTruthy();
  });

  it('renders textarea in multiline mode', async () => {
    const el = await fixture(html`<wu-mention multiline></wu-mention>`);
    expect(el.shadowRoot!.querySelector('textarea')).toBeTruthy();
  });

  it('shows mention list when @ typed', async () => {
    const el: any = await fixture(html`<wu-mention .users=${users}></wu-mention>`);
    el._query = 'Ali';
    el._showList = true;
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.mention-list')!.hasAttribute('hidden')).toBe(false);
  });

  it('filters users by query', async () => {
    const el: any = await fixture(html`<wu-mention .users=${users}></wu-mention>`);
    el._query = 'bob';
    el._showList = true;
    await elementUpdated(el);
    const items = el.shadowRoot!.querySelectorAll('.mention-item');
    expect(items.length).toBe(1);
  });

  it('emits wu-mention on user select', async () => {
    const el: any = await fixture(html`<wu-mention .users=${users} .value=${'Hello @Al'} ._query=${'Al'} ._showList=${true}></wu-mention>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-mention', handler);
    el._selectUser(users[0]);
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.user.name).toBe('Alice Smith');
  });
});
