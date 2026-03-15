import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-inline-message.js';
import type { WuInlineMessage } from './wu-inline-message.js';

describe('wu-inline-message', () => {
  it('renders with default variant info', async () => {
    const el = await fixture<WuInlineMessage>(html`<wu-inline-message>Hint</wu-inline-message>`);
    expect(el.variant).toBe('info');
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<WuInlineMessage>(html`<wu-inline-message variant="error">Error</wu-inline-message>`);
    expect(el.getAttribute('variant')).toBe('error');
  });

  it('uses role="alert" for error variant', async () => {
    const el = await fixture<WuInlineMessage>(html`<wu-inline-message variant="error">Bad input</wu-inline-message>`);
    const div = el.shadowRoot?.querySelector('.message');
    expect(div?.getAttribute('role')).toBe('alert');
  });

  it('uses role="status" for non-error variants', async () => {
    const el = await fixture<WuInlineMessage>(html`<wu-inline-message variant="success">Done</wu-inline-message>`);
    expect(el.shadowRoot?.querySelector('.message')?.getAttribute('role')).toBe('status');
  });

  it('renders slotted text', async () => {
    const el = await fixture<WuInlineMessage>(html`<wu-inline-message>Field hint</wu-inline-message>`);
    expect(el.textContent).toContain('Field hint');
  });
});
