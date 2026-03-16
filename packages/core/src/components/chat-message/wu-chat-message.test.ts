import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-chat-message.js';

describe('wu-chat-message', () => {
  it('renders with default user role', async () => {
    const el = await fixture(html`<wu-chat-message>Hello</wu-chat-message>`);
    expect(el.getAttribute('role')).toBe('user');
  });

  it('reflects assistant role', async () => {
    const el = await fixture(html`<wu-chat-message role="assistant">Reply</wu-chat-message>`);
    expect(el.getAttribute('role')).toBe('assistant');
  });

  it('renders author and timestamp', async () => {
    const el: any = await fixture(html`<wu-chat-message author="Alice" timestamp="12:00">Hi</wu-chat-message>`);
    const metas = el.shadowRoot!.querySelectorAll('.meta');
    expect(metas.length).toBe(2);
  });

  it('renders code block for type=code', async () => {
    const el: any = await fixture(html`<wu-chat-message type="code">const x = 1;</wu-chat-message>`);
    expect(el.shadowRoot!.querySelector('.code-block')).toBeTruthy();
  });

  it('renders tool-call for type=tool-call', async () => {
    const el: any = await fixture(html`<wu-chat-message type="tool-call" tool-name="search">...</wu-chat-message>`);
    expect(el.shadowRoot!.querySelector('.tool-call')).toBeTruthy();
  });
});
