import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-spinner.js';
import type { WuSpinner } from './wu-spinner.js';

describe('wu-spinner', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuSpinner>(html`<wu-spinner></wu-spinner>`);
    expect(el.size).toBe('md');
    expect(el.label).toBe('Loading…');
  });

  it('renders spinner element', async () => {
    const el = await fixture<WuSpinner>(html`<wu-spinner></wu-spinner>`);
    expect(el.shadowRoot!.querySelector('.spinner')).toBeTruthy();
  });

  it('has role="status" for screen readers', async () => {
    const el = await fixture<WuSpinner>(html`<wu-spinner></wu-spinner>`);
    expect(el.shadowRoot!.querySelector('[role="status"]')).toBeTruthy();
  });

  it('reflects size attribute', async () => {
    const el = await fixture<WuSpinner>(html`<wu-spinner size="lg"></wu-spinner>`);
    expect(el.getAttribute('size')).toBe('lg');
  });

  it('uses custom label when provided', async () => {
    const el = await fixture<WuSpinner>(html`<wu-spinner label="Saving…"></wu-spinner>`);
    expect(el.label).toBe('Saving…');
  });
});
