import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuCaptcha } from './wu-captcha.js';
import './wu-captcha.js';

describe('wu-captcha', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuCaptcha>(html`<wu-captcha></wu-captcha>`);
    expect(el.provider).toBe('CAPTCHA');
    expect(el.verified).toBe(false);
  });

  it('renders a checkbox', async () => {
    const el = await fixture<WuCaptcha>(html`<wu-captcha></wu-captcha>`);
    expect(el.shadowRoot!.querySelector('input[type="checkbox"]')).toBeTruthy();
  });

  it('emits wu-verified when checkbox is checked', async () => {
    const el = await fixture<WuCaptcha>(html`<wu-captcha></wu-captcha>`);
    const handler = vi.fn();
    el.addEventListener('wu-verified', handler);
    const cb = el.shadowRoot!.querySelector('.checkbox') as HTMLInputElement;
    cb.checked = true;
    cb.dispatchEvent(new Event('change'));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('shows pre-verified state', async () => {
    const el = await fixture<WuCaptcha>(html`<wu-captcha verified></wu-captcha>`);
    const cb = el.shadowRoot!.querySelector('.checkbox') as HTMLInputElement;
    expect(cb.checked).toBe(true);
  });

  it('shows brand name', async () => {
    const el = await fixture<WuCaptcha>(html`<wu-captcha provider="reCAPTCHA"></wu-captcha>`);
    expect(el.shadowRoot!.querySelector('.brand-name')?.textContent?.trim()).toBe('reCAPTCHA');
  });
});
