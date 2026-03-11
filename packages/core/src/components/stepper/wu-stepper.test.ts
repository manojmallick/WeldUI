import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-stepper.js';
import type { WuStepper, WuStep } from './wu-stepper.js';

describe('wu-stepper', () => {
  it('renders with active step 0', async () => {
    const el = await fixture<WuStepper>(html`
      <wu-stepper>
        <wu-step label="Step 1"></wu-step>
        <wu-step label="Step 2"></wu-step>
        <wu-step label="Step 3"></wu-step>
      </wu-stepper>
    `);
    await elementUpdated(el);
    const steps = el.querySelectorAll<WuStep>('wu-step');
    expect(steps[0].status).toBe('active');
    expect(steps[1].status).toBe('pending');
    expect(steps[2].status).toBe('pending');
  });

  it('advances on next()', async () => {
    const el = await fixture<WuStepper>(html`
      <wu-stepper>
        <wu-step label="A"></wu-step>
        <wu-step label="B"></wu-step>
        <wu-step label="C"></wu-step>
      </wu-stepper>
    `);
    await elementUpdated(el);
    el.next();
    await elementUpdated(el);
    const steps = el.querySelectorAll<WuStep>('wu-step');
    expect(steps[0].status).toBe('complete');
    expect(steps[1].status).toBe('active');
  });

  it('emits wu-step-change on next()', async () => {
    const el = await fixture<WuStepper>(html`
      <wu-stepper>
        <wu-step label="A"></wu-step>
        <wu-step label="B"></wu-step>
      </wu-stepper>
    `);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-step-change', handler);
    el.next();
    await elementUpdated(el);
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.step).toBe(1);
  });

  it('does not go below 0 on prev()', async () => {
    const el = await fixture<WuStepper>(html`
      <wu-stepper>
        <wu-step label="A"></wu-step>
        <wu-step label="B"></wu-step>
      </wu-stepper>
    `);
    await elementUpdated(el);
    el.prev();
    await elementUpdated(el);
    expect(el.activeStep).toBe(0);
  });

  it('renders step labels', async () => {
    const el = await fixture<WuStep>(html`<wu-step label="My Step" index="0" status="active"></wu-step>`);
    expect(el.shadowRoot!.querySelector('.label')!.textContent!.trim()).toBe('My Step');
  });
});
