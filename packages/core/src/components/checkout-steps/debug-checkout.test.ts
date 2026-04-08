import { describe, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import '/Users/manojmallick/Documents/WeldUI/packages/core/src/components/checkout-steps/wu-checkout-steps.js';
import type { WuCheckoutSteps } from '/Users/manojmallick/Documents/WeldUI/packages/core/src/components/checkout-steps/wu-checkout-steps.js';

describe('debug-checkout', () => {
  it('prints shadow DOM default', async () => {
    const el = await fixture<WuCheckoutSteps>(html`<wu-checkout-steps></wu-checkout-steps>`);
    await el.updateComplete;
    console.log('DEFAULT innerHTML:', el.shadowRoot!.innerHTML.replace(/\s+/g, ' '));
    console.log('steps:', el.shadowRoot!.querySelectorAll('.step').length);
    console.log('connectors:', el.shadowRoot!.querySelectorAll('.connector').length);
  });

  it('prints shadow DOM with current=2', async () => {
    const el = await fixture<WuCheckoutSteps>(html`<wu-checkout-steps current="2"></wu-checkout-steps>`);
    await el.updateComplete;
    const content = el.shadowRoot!.innerHTML.replace(/\s+/g, ' ').substring(0, 800);
    console.log('CURRENT=2 innerHTML:', content);
    const steps = el.shadowRoot!.querySelectorAll('.step');
    console.log('steps count:', steps.length, 'current prop:', el.current, typeof el.current);
    for (let i = 0; i < steps.length; i++) {
      const cls = (steps[i] as HTMLElement).className;
      const ac = steps[i].getAttribute('aria-current');
      console.log('steps[' + i + '] class="' + cls + '" aria-current="' + ac + '"');
    }
  });
});
