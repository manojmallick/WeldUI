import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-modal.js';
import type { WuModal } from './wu-modal.js';

describe('wu-modal', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuModal>(html`<wu-modal label="Test Modal">Content</wu-modal>`);
    expect(el.open).toBe(false);
    expect(el.label).toBe('Test Modal');
  });

  it('does not show dialog when open=false', async () => {
    const el = await fixture<WuModal>(html`<wu-modal label="Test">Content</wu-modal>`);
    const dialog = el.shadowRoot!.querySelector('dialog')!;
    expect(dialog.open).toBe(false);
  });

  it('shows dialog when open=true', async () => {
    const el = await fixture<WuModal>(html`<wu-modal label="Test" open>Content</wu-modal>`);
    const dialog = el.shadowRoot!.querySelector('dialog')!;
    expect(dialog.open).toBe(true);
  });

  it('emits wu-open when opened', async () => {
    const el = await fixture<WuModal>(html`<wu-modal label="Test">Content</wu-modal>`);
    const handler = vi.fn();
    el.addEventListener('wu-open', handler);
    el.open = true;
    await el.updateComplete;
    expect(handler).toHaveBeenCalledOnce();
  });

  it('emits wu-close with reason "button" when close button clicked', async () => {
    const el = await fixture<WuModal>(html`<wu-modal label="Test" open>Content</wu-modal>`);
    const handler = vi.fn();
    el.addEventListener('wu-close', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.close-btn')!.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.reason).toBe('button');
  });

  it('hides close button when hide-close is set', async () => {
    const el = await fixture<WuModal>(html`<wu-modal label="Test" open hide-close>Content</wu-modal>`);
    const closeBtn = el.shadowRoot!.querySelector('.close-btn');
    expect(closeBtn).toBeNull();
  });

  it('has aria-labelledby pointing to modal title', async () => {
    const el = await fixture<WuModal>(html`<wu-modal label="Test">Content</wu-modal>`);
    const dialog = el.shadowRoot!.querySelector('dialog')!;
    expect(dialog.getAttribute('aria-labelledby')).toBe('modal-title');
  });
});
