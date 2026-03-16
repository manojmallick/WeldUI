import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-presence.js';

describe('wu-presence', () => {
  it('renders no avatars for empty users', async () => {
    const el: any = await fixture(html`<wu-presence .users=${[]}></wu-presence>`);
    const avatars = el.shadowRoot!.querySelectorAll('.avatar');
    expect(avatars.length).toBe(0);
  });

  it('renders correct number of visible avatars', async () => {
    const users = [
      { id: '1', name: 'Alice' },
      { id: '2', name: 'Bob' },
      { id: '3', name: 'Carol' },
    ];
    const el: any = await fixture(html`<wu-presence .users=${users}></wu-presence>`);
    const avatars = el.shadowRoot!.querySelectorAll('.avatar:not(.overflow)');
    expect(avatars.length).toBe(3);
  });

  it('shows overflow avatar when exceeding max', async () => {
    const users = Array.from({ length: 8 }, (_, i) => ({ id: String(i), name: `User ${i}` }));
    const el: any = await fixture(html`<wu-presence .users=${users} max="5"></wu-presence>`);
    expect(el.shadowRoot!.querySelector('.overflow')).toBeTruthy();
  });

  it('shows label when show-label is set', async () => {
    const el: any = await fixture(html`<wu-presence .users=${[{ id: '1', name: 'Alice' }]} .showLabel=${true}></wu-presence>`);
    expect(el.showLabel).toBe(true);
  });
});
