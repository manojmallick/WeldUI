import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-toast.js';
import type { WuToast } from './wu-toast.js';

describe('wu-toast', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuToast>(html`<wu-toast>Message</wu-toast>`);
    expect(el.variant).toBe('default');
    expect(el.heading).toBe('');
  });

  it('has role="alert" for screen readers', async () => {
    const el = await fixture<WuToast>(html`<wu-toast>Message</wu-toast>`);
    expect(el.shadowRoot!.querySelector('[role="alert"]')).toBeTruthy();
  });

  it('renders heading when provided', async () => {
    const el = await fixture<WuToast>(html`<wu-toast heading="Saved!">Your file was saved.</wu-toast>`);
    const title = el.shadowRoot!.querySelector('.title')!;
    expect(title.textContent).toBe('Saved!');
  });

  it('emits wu-close on dismiss button click', async () => {
    const el = await fixture<WuToast>(html`<wu-toast>Message</wu-toast>`);
    const handler = vi.fn();
    el.addEventListener('wu-close', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.close-btn')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<WuToast>(html`<wu-toast variant="success">OK</wu-toast>`);
    expect(el.getAttribute('variant')).toBe('success');
  });

  it('auto-dismisses after duration', async () => {
    const container = await fixture<HTMLDivElement>(html`<div><wu-toast duration="50">Auto</wu-toast></div>`);
    const el = container.querySelector<WuToast>('wu-toast')!;
    const handler = vi.fn();
    el.addEventListener('wu-close', handler);
    await new Promise(r => setTimeout(r, 100));
    expect(handler).toHaveBeenCalledOnce();
  });
});
