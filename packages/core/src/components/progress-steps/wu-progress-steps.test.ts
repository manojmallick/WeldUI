import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-progress-steps.js';
import type { WuProgressSteps } from './wu-progress-steps.js';

describe('wu-progress-steps', () => {
  const steps = ['Step 1', 'Step 2', 'Step 3'];

  it('renders with default props', async () => {
    const el = await fixture<WuProgressSteps>(html`<wu-progress-steps></wu-progress-steps>`);
    expect(el.current).toBe(0);
    expect(el.orientation).toBe('horizontal');
  });

  it('renders all steps', async () => {
    const el = await fixture<WuProgressSteps>(html`<wu-progress-steps></wu-progress-steps>`);
    el.steps = steps;
    await el.updateComplete;
    expect(el.shadowRoot?.querySelectorAll('.step').length).toBe(3);
  });

  it('marks the current step', async () => {
    const el = await fixture<WuProgressSteps>(html`<wu-progress-steps></wu-progress-steps>`);
    el.steps = steps;
    el.current = 1;
    await el.updateComplete;
    const items = el.shadowRoot?.querySelectorAll('.step');
    expect(items?.[1].classList.contains('current')).toBe(true);
  });

  it('marks completed steps', async () => {
    const el = await fixture<WuProgressSteps>(html`<wu-progress-steps></wu-progress-steps>`);
    el.steps = steps;
    el.current = 2;
    await el.updateComplete;
    const items = el.shadowRoot?.querySelectorAll('.step');
    expect(items?.[0].classList.contains('completed')).toBe(true);
    expect(items?.[1].classList.contains('completed')).toBe(true);
  });

  it('has aria-current="step" on current item', async () => {
    const el = await fixture<WuProgressSteps>(html`<wu-progress-steps></wu-progress-steps>`);
    el.steps = steps;
    el.current = 1;
    await el.updateComplete;
    const items = el.shadowRoot?.querySelectorAll('.step');
    expect(items?.[1].getAttribute('aria-current')).toBe('step');
  });
});
