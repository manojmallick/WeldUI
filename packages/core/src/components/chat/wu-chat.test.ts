import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-chat.js';

describe('wu-chat-bubble', () => {
  it('renders slotted content', async () => {
    const el = await fixture(html`<wu-chat-bubble>Hello</wu-chat-bubble>`);
    expect(el.textContent?.trim()).toBe('Hello');
  });

  it('reflects side attribute', async () => {
    const el = await fixture(html`<wu-chat-bubble side="right">Hi</wu-chat-bubble>`);
    expect(el.getAttribute('side')).toBe('right');
  });

  it('defaults side to left', async () => {
    const el: any = await fixture(html`<wu-chat-bubble>Hi</wu-chat-bubble>`);
    expect(el.side).toBe('left');
  });
});

describe('wu-chat', () => {
  it('renders with role log', async () => {
    const el = await fixture(html`<wu-chat></wu-chat>`);
    const inner = el.shadowRoot!.querySelector('[role="log"]');
    expect(inner).toBeTruthy();
  });

  it('accepts slotted bubbles', async () => {
    const el = await fixture(html`
      <wu-chat>
        <wu-chat-bubble>Msg</wu-chat-bubble>
      </wu-chat>
    `);
    expect(el.querySelector('wu-chat-bubble')).toBeTruthy();
  });
});
