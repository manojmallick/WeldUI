import { describe, expect, it, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-banner.js';
import type { WuBanner } from './wu-banner.js';

describe('wu-banner', () => {
  it('renders with default variant info', async () => {
    const el = await fixture<WuBanner>(html`<wu-banner>Message</wu-banner>`);
    expect(el.variant).toBe('info');
    expect(el.dismissible).toBe(false);
  });

  it('renders the banner container', async () => {
    const el = await fixture<WuBanner>(html`<wu-banner>Alert</wu-banner>`);
    expect(el.shadowRoot?.querySelector('.banner[part="base"]')).toBeTruthy();
  });

  it('shows dismiss button when dismissible', async () => {
    const el = await fixture<WuBanner>(html`<wu-banner dismissible>Message</wu-banner>`);
    expect(el.shadowRoot?.querySelector('.close[part="close"]')).toBeTruthy();
  });

  it('hides dismiss button when not dismissible', async () => {
    const el = await fixture<WuBanner>(html`<wu-banner>Message</wu-banner>`);
    expect(el.shadowRoot?.querySelector('.close')).toBeNull();
  });

  it('emits wu-dismiss and hides when dismissed', async () => {
    const el = await fixture<WuBanner>(html`<wu-banner dismissible>Message</wu-banner>`);
    const handler = vi.fn();
    el.addEventListener('wu-dismiss', handler);
    const btn = el.shadowRoot?.querySelector('.close') as HTMLButtonElement;
    btn.click();
    await el.updateComplete;
    expect(handler).toHaveBeenCalledOnce();
    expect(el.shadowRoot?.querySelector('.banner')).toBeNull();
  });
});
