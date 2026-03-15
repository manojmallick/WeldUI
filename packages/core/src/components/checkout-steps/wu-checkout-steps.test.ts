import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuCheckoutSteps } from './wu-checkout-steps.js';
import './wu-checkout-steps.js';

describe('wu-checkout-steps', () => {
  it('renders default 4 steps', async () => {
    const el = await fixture<WuCheckoutSteps>(html`<wu-checkout-steps></wu-checkout-steps>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelectorAll('.step').length).toBe(4);
  });

  it('marks current step correctly', async () => {
    const el = await fixture<WuCheckoutSteps>(html`<wu-checkout-steps current="1"></wu-checkout-steps>`);
    await el.updateComplete;
    const steps = el.shadowRoot!.querySelectorAll('.step');
    expect(steps[0].classList.contains('done')).toBe(true);
    expect(steps[1].classList.contains('current')).toBe(true);
    expect(steps[2].classList.contains('upcoming')).toBe(true);
  });

  it('sets aria-current on current step', async () => {
    const el = await fixture<WuCheckoutSteps>(html`<wu-checkout-steps current="2"></wu-checkout-steps>`);
    await el.updateComplete;
    const steps = el.shadowRoot!.querySelectorAll('.step');
    expect(steps[2].getAttribute('aria-current')).toBe('step');
  });

  it('renders connectors between steps', async () => {
    const el = await fixture<WuCheckoutSteps>(html`<wu-checkout-steps></wu-checkout-steps>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelectorAll('.connector').length).toBe(3);
  });

  it('renders custom steps', async () => {
    const el = await fixture<WuCheckoutSteps>(html`<wu-checkout-steps .steps=${['A','B','C']}></wu-checkout-steps>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelectorAll('.step').length).toBe(3);
  });
});
