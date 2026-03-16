import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-typing-indicator.js';

describe('wu-typing-indicator', () => {
  it('renders three dots', async () => {
    const el: any = await fixture(html`<wu-typing-indicator></wu-typing-indicator>`);
    const dots = el.shadowRoot!.querySelectorAll('.dot');
    expect(dots.length).toBe(3);
  });

  it('has role=status for accessibility', async () => {
    const el: any = await fixture(html`<wu-typing-indicator></wu-typing-indicator>`);
    const status = el.shadowRoot!.querySelector('[role="status"]');
    expect(status).toBeTruthy();
  });

  it('respects custom aria-label', async () => {
    const el: any = await fixture(html`<wu-typing-indicator aria-label="AI is thinking"></wu-typing-indicator>`);
    const status = el.shadowRoot!.querySelector('[role="status"]');
    expect(status!.getAttribute('aria-label')).toBe('AI is thinking');
  });
});
