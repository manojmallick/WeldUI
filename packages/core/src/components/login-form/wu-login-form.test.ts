import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuLoginForm } from './wu-login-form.js';
import './wu-login-form.js';

describe('wu-login-form', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuLoginForm>(html`<wu-login-form></wu-login-form>`);
    expect(el.heading).toBe('Sign in');
    expect(el.loading).toBe(false);
  });

  it('renders email and password inputs', async () => {
    const el = await fixture<WuLoginForm>(html`<wu-login-form></wu-login-form>`);
    expect(el.shadowRoot!.querySelector('input[type="email"]')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('input[type="password"]')).toBeTruthy();
  });

  it('shows error message when error prop is set', async () => {
    const el = await fixture<WuLoginForm>(html`<wu-login-form error="Invalid credentials"></wu-login-form>`);
    const msg = el.shadowRoot!.querySelector('.error-msg');
    expect(msg?.textContent?.trim()).toBe('Invalid credentials');
  });

  it('shows remember-me checkbox when show-remember is set', async () => {
    const el = await fixture<WuLoginForm>(html`<wu-login-form show-remember></wu-login-form>`);
    expect(el.shadowRoot!.querySelector('input[type="checkbox"]')).toBeTruthy();
  });

  it('emits wu-submit with credentials', async () => {
    const el = await fixture<WuLoginForm>(html`<wu-login-form></wu-login-form>`);
    const handler = vi.fn();
    el.addEventListener('wu-submit', handler);
    const emailInput = el.shadowRoot!.querySelector('#email') as HTMLInputElement;
    const pwInput = el.shadowRoot!.querySelector('#password') as HTMLInputElement;
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    pwInput.value = 'secret';
    pwInput.dispatchEvent(new Event('input'));
    await el.updateComplete;
    (el.shadowRoot!.querySelector('.submit-btn') as HTMLButtonElement).click();
    await el.updateComplete;
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.email).toBe('test@example.com');
  });
});
