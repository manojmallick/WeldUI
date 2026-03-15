import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-command-bar.js';
import type { WuCommandBar } from './wu-command-bar.js';

describe('wu-command-bar', () => {
  it('renders input by default', async () => {
    const el = await fixture<WuCommandBar>(html`<wu-command-bar></wu-command-bar>`);
    expect(el.shadowRoot!.querySelector('input')).toBeTruthy();
  });

  it('renders shortcut kbd by default', async () => {
    const el = await fixture<WuCommandBar>(html`<wu-command-bar></wu-command-bar>`);
    const kbd = el.shadowRoot!.querySelector('kbd');
    expect(kbd?.textContent?.trim()).toBe('⌘K');
  });

  it('hides kbd when shortcut is empty string', async () => {
    const el = await fixture<WuCommandBar>(html`<wu-command-bar shortcut=""></wu-command-bar>`);
    expect(el.shadowRoot!.querySelector('kbd')).toBeNull();
  });

  it('emits wu-search on input', async () => {
    const el = await fixture<WuCommandBar>(html`<wu-command-bar></wu-command-bar>`);
    const handler = vi.fn();
    el.addEventListener('wu-search', handler);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;
    input.value = 'hello';
    input.dispatchEvent(new Event('input'));
    expect(handler).toHaveBeenCalledOnce();
    expect((handler.mock.calls[0][0] as CustomEvent).detail).toEqual({ query: 'hello' });
  });

  it('shows placeholder text in readonly-trigger mode', async () => {
    const el = await fixture<WuCommandBar>(html`<wu-command-bar readonly-trigger placeholder="Search…"></wu-command-bar>`);
    expect(el.shadowRoot!.querySelector('input')).toBeNull();
    expect(el.shadowRoot!.querySelector('.placeholder')?.textContent).toBe('Search…');
  });
});
