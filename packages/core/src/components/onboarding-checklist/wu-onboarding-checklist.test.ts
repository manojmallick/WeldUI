import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuOnboardingChecklist } from './wu-onboarding-checklist.js';
import './wu-onboarding-checklist.js';

const items = [
  { id: 'a', label: 'Step A', completed: false },
  { id: 'b', label: 'Step B', completed: true },
];

describe('wu-onboarding-checklist', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuOnboardingChecklist>(html`<wu-onboarding-checklist></wu-onboarding-checklist>`);
    expect(el.title).toBe('Getting Started');
    expect(el.items).toEqual([]);
  });

  it('renders all items', async () => {
    const el = await fixture<WuOnboardingChecklist>(html`<wu-onboarding-checklist .items=${items}></wu-onboarding-checklist>`);
    const liItems = el.shadowRoot!.querySelectorAll('.item');
    expect(liItems.length).toBe(2);
  });

  it('emits wu-item-complete when an uncompleted step is clicked', async () => {
    const el = await fixture<WuOnboardingChecklist>(html`<wu-onboarding-checklist .items=${items}></wu-onboarding-checklist>`);
    const handler = vi.fn();
    el.addEventListener('wu-item-complete', handler);
    const firstBtn = el.shadowRoot!.querySelectorAll('.check-btn')[0] as HTMLButtonElement;
    firstBtn.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.id).toBe('a');
  });

  it('emits wu-dismiss when dismiss button is clicked', async () => {
    const el = await fixture<WuOnboardingChecklist>(html`<wu-onboarding-checklist .items=${items}></wu-onboarding-checklist>`);
    const handler = vi.fn();
    el.addEventListener('wu-dismiss', handler);
    (el.shadowRoot!.querySelector('.dismiss-btn') as HTMLButtonElement).click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('shows correct progress text', async () => {
    const el = await fixture<WuOnboardingChecklist>(html`<wu-onboarding-checklist .items=${items}></wu-onboarding-checklist>`);
    const text = el.shadowRoot!.querySelector('.progress-text')!.textContent!.trim();
    expect(text).toContain('1');
    expect(text).toContain('2');
  });
});
