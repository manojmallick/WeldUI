import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-validation-summary.js';
import type { WuValidationSummary } from './wu-validation-summary.js';

describe('wu-validation-summary', () => {
  it('renders nothing when errors is empty', async () => {
    const el = await fixture<WuValidationSummary>(html`<wu-validation-summary></wu-validation-summary>`);
    expect(el.shadowRoot?.querySelector('.summary')).toBeNull();
  });

  it('renders error list when errors are provided', async () => {
    const el = await fixture<WuValidationSummary>(html`<wu-validation-summary></wu-validation-summary>`);
    el.errors = ['Name is required.', 'Email is invalid.'];
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector('.list')).toBeTruthy();
    const items = el.shadowRoot?.querySelectorAll('.item');
    expect(items?.length).toBe(2);
  });

  it('renders the default heading', async () => {
    const el = await fixture<WuValidationSummary>(html`<wu-validation-summary></wu-validation-summary>`);
    el.errors = ['Error.'];
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector('.title')?.textContent).toContain('Please fix');
  });

  it('accepts a custom heading', async () => {
    const el = await fixture<WuValidationSummary>(html`<wu-validation-summary heading="Fix it:"></wu-validation-summary>`);
    el.errors = ['Issue'];
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector('.title')?.textContent).toContain('Fix it:');
  });

  it('has role="alert" for accessibility', async () => {
    const el = await fixture<WuValidationSummary>(html`<wu-validation-summary></wu-validation-summary>`);
    el.errors = ['Error'];
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector('[role="alert"]')).toBeTruthy();
  });
});
