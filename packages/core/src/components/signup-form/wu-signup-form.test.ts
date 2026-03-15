import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuSignupForm } from './wu-signup-form.js';
import './wu-signup-form.js';

describe('wu-signup-form', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuSignupForm>(html`<wu-signup-form></wu-signup-form>`);
    expect(el.heading).toBe('Create account');
  });

  it('renders name, email, password, confirm inputs', async () => {
    const el = await fixture<WuSignupForm>(html`<wu-signup-form></wu-signup-form>`);
    expect(el.shadowRoot!.querySelector('#name')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('#email')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('#password')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('#confirm')).toBeTruthy();
  });

  it('shows password mismatch error', async () => {
    const el = await fixture<WuSignupForm>(html`<wu-signup-form></wu-signup-form>`);
    const pw = el.shadowRoot!.querySelector('#password') as HTMLInputElement;
    const confirm = el.shadowRoot!.querySelector('#confirm') as HTMLInputElement;
    pw.value = 'abc123'; pw.dispatchEvent(new Event('input'));
    confirm.value = 'xyz789'; confirm.dispatchEvent(new Event('input'));
    await el.updateComplete;
    (el.shadowRoot!.querySelector('.submit-btn') as HTMLButtonElement).click();
    await el.updateComplete;
    const err = el.shadowRoot!.querySelector('.field-error');
    expect(err).toBeTruthy();
  });

  it('emits wu-submit when form is valid', async () => {
    const el = await fixture<WuSignupForm>(html`<wu-signup-form></wu-signup-form>`);
    const handler = vi.fn();
    el.addEventListener('wu-submit', handler);
    const fill = (selector: string, value: string) => {
      const inp = el.shadowRoot!.querySelector(selector) as HTMLInputElement;
      inp.value = value;
      inp.dispatchEvent(new Event('input'));
    };
    fill('#name', 'Jane'); fill('#email', 'jane@example.com');
    fill('#password', 'secret123'); fill('#confirm', 'secret123');
    await el.updateComplete;
    (el.shadowRoot!.querySelector('.submit-btn') as HTMLButtonElement).click();
    await el.updateComplete;
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.email).toBe('jane@example.com');
  });

  it('shows error message', async () => {
    const el = await fixture<WuSignupForm>(html`<wu-signup-form error="Email taken"></wu-signup-form>`);
    expect(el.shadowRoot!.querySelector('.error-msg')?.textContent?.trim()).toBe('Email taken');
  });
});
