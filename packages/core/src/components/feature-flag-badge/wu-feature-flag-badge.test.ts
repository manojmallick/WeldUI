import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-feature-flag-badge.js';
import type { WuFeatureFlagBadge } from './wu-feature-flag-badge.js';

describe('wu-feature-flag-badge', () => {
  it('renders beta by default', async () => {
    const el = await fixture<WuFeatureFlagBadge>(html`<wu-feature-flag-badge></wu-feature-flag-badge>`);
    expect(el.shadowRoot!.querySelector('.badge')?.textContent?.trim()).toBe('Beta');
  });

  it('renders correct label for each variant', async () => {
    for (const [variant, expected] of [['alpha','Alpha'],['new','New'],['stable','Stable']]) {
      const el = await fixture<WuFeatureFlagBadge>(
        html`<wu-feature-flag-badge variant=${variant}></wu-feature-flag-badge>`,
      );
      expect(el.shadowRoot!.querySelector('.badge')?.textContent?.trim()).toBe(expected);
    }
  });

  it('uses custom label when provided', async () => {
    const el = await fixture<WuFeatureFlagBadge>(
      html`<wu-feature-flag-badge label="Preview"></wu-feature-flag-badge>`,
    );
    expect(el.shadowRoot!.querySelector('.badge')?.textContent?.trim()).toBe('Preview');
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<WuFeatureFlagBadge>(
      html`<wu-feature-flag-badge variant="experimental"></wu-feature-flag-badge>`,
    );
    expect(el.getAttribute('variant')).toBe('experimental');
  });

  it('has role status on badge', async () => {
    const el = await fixture<WuFeatureFlagBadge>(html`<wu-feature-flag-badge></wu-feature-flag-badge>`);
    expect(el.shadowRoot!.querySelector('.badge')?.getAttribute('role')).toBe('status');
  });
});
