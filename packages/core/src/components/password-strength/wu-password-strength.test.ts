import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuPasswordStrength } from './wu-password-strength.js';
import './wu-password-strength.js';

describe('wu-password-strength', () => {
  it('renders 4 bar segments', async () => {
    const el = await fixture<WuPasswordStrength>(html`<wu-password-strength></wu-password-strength>`);
    expect(el.shadowRoot!.querySelectorAll('.bar').length).toBe(4);
  });

  it('shows no label for empty password', async () => {
    const el = await fixture<WuPasswordStrength>(html`<wu-password-strength></wu-password-strength>`);
    expect(el.shadowRoot!.querySelector('.label')).toBeNull();
  });

  it('shows Strong label for score 4', async () => {
    const el = await fixture<WuPasswordStrength>(html`<wu-password-strength .score=${4}></wu-password-strength>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.label')?.textContent?.trim()).toBe('Strong');
  });

  it('shows Weak label for score 1', async () => {
    const el = await fixture<WuPasswordStrength>(html`<wu-password-strength .score=${1}></wu-password-strength>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.label')?.textContent?.trim()).toBe('Weak');
  });

  it('computes score from password string', async () => {
    const el = await fixture<WuPasswordStrength>(html`<wu-password-strength password="Abcdef1!"></wu-password-strength>`);
    await el.updateComplete;
    const label = el.shadowRoot!.querySelector('.label')?.textContent?.trim();
    expect(['Good', 'Strong']).toContain(label);
  });
});
