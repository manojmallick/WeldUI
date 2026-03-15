import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-reaction-bar.js';
import type { WuReactionBar } from './wu-reaction-bar.js';

describe('wu-reaction-bar', () => {
  const reactions = [
    { emoji: '👍', count: 5, reacted: false },
    { emoji: '❤️', count: 2, reacted: true },
  ];

  it('renders correct number of reaction buttons', async () => {
    const el = await fixture<WuReactionBar>(html`<wu-reaction-bar .reactions=${reactions}></wu-reaction-bar>`);
    const btns = el.shadowRoot!.querySelectorAll('.reaction');
    expect(btns.length).toBe(2);
  });

  it('marks active reaction', async () => {
    const el = await fixture<WuReactionBar>(html`<wu-reaction-bar .reactions=${reactions}></wu-reaction-bar>`);
    const btns = el.shadowRoot!.querySelectorAll('.reaction');
    expect(btns[1].classList.contains('active')).toBe(true);
  });

  it('emits wu-react on click', async () => {
    const el = await fixture<WuReactionBar>(html`<wu-reaction-bar .reactions=${reactions}></wu-reaction-bar>`);
    const handler = vi.fn();
    el.addEventListener('wu-react', handler);
    el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.reaction')[0].click();
    expect(handler).toHaveBeenCalledOnce();
    expect((handler.mock.calls[0][0] as CustomEvent).detail.emoji).toBe('👍');
  });

  it('shows add button when show-add', async () => {
    const el = await fixture<WuReactionBar>(html`<wu-reaction-bar .reactions=${reactions} show-add></wu-reaction-bar>`);
    expect(el.shadowRoot!.querySelector('.add-btn')).toBeTruthy();
  });

  it('hides add button by default', async () => {
    const el = await fixture<WuReactionBar>(html`<wu-reaction-bar .reactions=${reactions}></wu-reaction-bar>`);
    expect(el.shadowRoot!.querySelector('.add-btn')).toBeNull();
  });
});
