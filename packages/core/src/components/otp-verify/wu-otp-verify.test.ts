import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuOtpVerify } from './wu-otp-verify.js';
import './wu-otp-verify.js';

describe('wu-otp-verify', () => {
  it('renders default 6 digit inputs', async () => {
    const el = await fixture<WuOtpVerify>(html`<wu-otp-verify></wu-otp-verify>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelectorAll('.digit').length).toBe(6);
  });

  it('renders custom digit count', async () => {
    const el = await fixture<WuOtpVerify>(html`<wu-otp-verify digits="4"></wu-otp-verify>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelectorAll('.digit').length).toBe(4);
  });

  it('emits wu-complete when all digits are filled', async () => {
    const el = await fixture<WuOtpVerify>(html`<wu-otp-verify digits="4"></wu-otp-verify>`);
    await el.updateComplete;
    const handler = vi.fn();
    el.addEventListener('wu-complete', handler);
    const inputs = el.shadowRoot!.querySelectorAll<HTMLInputElement>('.digit');
    ['1','2','3','4'].forEach((v, i) => {
      inputs[i].value = v;
      inputs[i].dispatchEvent(new Event('input', { bubbles: true }));
    });
    await el.updateComplete;
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.code).toBe('1234');
  });

  it('shows heading', async () => {
    const el = await fixture<WuOtpVerify>(html`<wu-otp-verify heading="Enter code"></wu-otp-verify>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.heading')?.textContent?.trim()).toBe('Enter code');
  });

  it('shows hint text', async () => {
    const el = await fixture<WuOtpVerify>(html`<wu-otp-verify hint="Sent via SMS"></wu-otp-verify>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.hint')?.textContent?.trim()).toBe('Sent via SMS');
  });
});
