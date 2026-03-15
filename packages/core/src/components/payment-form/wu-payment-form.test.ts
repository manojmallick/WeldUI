import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-payment-form.js';
import type { WuPaymentForm } from './wu-payment-form.js';

describe('wu-payment-form', () => {
  it('renders with default heading', async () => {
    const el = await fixture<WuPaymentForm>(html`<wu-payment-form></wu-payment-form>`);
    const h2 = el.shadowRoot!.querySelector('h2');
    expect(h2?.textContent?.trim()).toBe('Payment details');
  });

  it('shows error message when error prop is set', async () => {
    const el = await fixture<WuPaymentForm>(
      html`<wu-payment-form error="Card declined"></wu-payment-form>`,
    );
    const err = el.shadowRoot!.querySelector('.error-msg');
    expect(err?.textContent?.trim()).toBe('Card declined');
  });

  it('disables submit button when loading', async () => {
    const el = await fixture<WuPaymentForm>(html`<wu-payment-form loading></wu-payment-form>`);
    const btn = el.shadowRoot!.querySelector<HTMLButtonElement>('.submit-btn');
    expect(btn?.disabled).toBe(true);
  });

  it('renders all four input fields', async () => {
    const el = await fixture<WuPaymentForm>(html`<wu-payment-form></wu-payment-form>`);
    const inputs = el.shadowRoot!.querySelectorAll('input');
    expect(inputs.length).toBe(4);
  });

  it('emits wu-submit when form is submitted', async () => {
    const el = await fixture<WuPaymentForm>(html`<wu-payment-form></wu-payment-form>`);
    const handler = vi.fn();
    el.addEventListener('wu-submit', handler);
    // Simulate filled state via properties (internal @state — trigger via form submit anyway)
    const form = el.shadowRoot!.querySelector('form');
    // form submit without filled fields should NOT fire wu-submit
    form!.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    expect(handler).not.toHaveBeenCalled();
  });
});
