import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-label.js';
import type { WuLabel } from './wu-label.js';

describe('wu-label', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuLabel>(html`<wu-label>Name</wu-label>`);
    expect(el.required).toBe(false);
    expect(el.disabled).toBe(false);
  });

  it('shows required asterisk when required', async () => {
    const el = await fixture<WuLabel>(html`<wu-label required>Email</wu-label>`);
    const asterisk = el.shadowRoot?.querySelector('.required');
    expect(asterisk).toBeTruthy();
  });

  it('hides asterisk when not required', async () => {
    const el = await fixture<WuLabel>(html`<wu-label>Optional</wu-label>`);
    expect(el.shadowRoot?.querySelector('.required')).toBeNull();
  });

  it('reflects disabled attribute', async () => {
    const el = await fixture<WuLabel>(html`<wu-label disabled>Disabled</wu-label>`);
    expect(el.hasAttribute('disabled')).toBe(true);
  });

  it('renders slotted text', async () => {
    const el = await fixture<WuLabel>(html`<wu-label>Form label</wu-label>`);
    expect(el.textContent).toContain('Form label');
  });
});
