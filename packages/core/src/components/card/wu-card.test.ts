import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-card.js';
import type { WuCard } from './wu-card.js';

describe('wu-card', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuCard>(html`<wu-card>Content</wu-card>`);
    expect(el.interactive).toBe(false);
  });

  it('renders body slot content', async () => {
    const el = await fixture<WuCard>(html`<wu-card>Body text</wu-card>`);
    const body = el.shadowRoot!.querySelector('.body')!;
    expect(body).toBeTruthy();
  });

  it('does not emit wu-click when not interactive', async () => {
    const el = await fixture<WuCard>(html`<wu-card>Content</wu-card>`);
    const handler = vi.fn();
    el.addEventListener('wu-click', handler);
    el.shadowRoot!.querySelector('.card')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(handler).not.toHaveBeenCalled();
  });

  it('emits wu-click when interactive and clicked', async () => {
    const el = await fixture<WuCard>(html`<wu-card interactive>Content</wu-card>`);
    const handler = vi.fn();
    el.addEventListener('wu-click', handler);
    el.shadowRoot!.querySelector('.card')!.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('sets role="button" when interactive', async () => {
    const el = await fixture<WuCard>(html`<wu-card interactive>Content</wu-card>`);
    const card = el.shadowRoot!.querySelector('.card')!;
    expect(card.getAttribute('role')).toBe('button');
  });

  it('sets role="article" when not interactive', async () => {
    const el = await fixture<WuCard>(html`<wu-card>Content</wu-card>`);
    const card = el.shadowRoot!.querySelector('.card')!;
    expect(card.getAttribute('role')).toBe('article');
  });

  it('reflects interactive attribute', async () => {
    const el = await fixture<WuCard>(html`<wu-card interactive>Content</wu-card>`);
    expect(el.hasAttribute('interactive')).toBe(true);
  });
});
