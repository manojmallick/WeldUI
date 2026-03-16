import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-chat-input.js';

describe('wu-chat-input', () => {
  it('renders textarea with placeholder', async () => {
    const el: any = await fixture(html`<wu-chat-input placeholder="Ask me..."></wu-chat-input>`);
    const ta = el.shadowRoot!.querySelector('textarea');
    expect(ta!.placeholder).toBe('Ask me...');
  });

  it('does not emit wu-submit when value is empty', async () => {
    const el: any = await fixture(html`<wu-chat-input></wu-chat-input>`);
    const handler = vi.fn();
    el.addEventListener('wu-submit', handler);
    el.shadowRoot!.querySelector('button.send')!.click();
    expect(handler).not.toHaveBeenCalled();
  });

  it('is disabled when disabled attribute is set', async () => {
    const el: any = await fixture(html`<wu-chat-input disabled></wu-chat-input>`);
    const ta = el.shadowRoot!.querySelector('textarea');
    expect(ta!.disabled).toBe(true);
  });

  it('shows attach button when show-attach is set', async () => {
    const el: any = await fixture(html`<wu-chat-input show-attach></wu-chat-input>`);
    const btn = el.shadowRoot!.querySelector('button[aria-label="Attach file"]');
    expect(btn).toBeTruthy();
  });
});
