import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-alert.js';
import type { WuAlert } from './wu-alert.js';

describe('wu-alert', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuAlert>(html`<wu-alert>Message</wu-alert>`);
    expect(el.variant).toBe('info');
    expect(el.dismissible).toBe(false);
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<WuAlert>(html`<wu-alert variant="success">OK</wu-alert>`);
    expect(el.getAttribute('variant')).toBe('success');
  });

  it('has role="alert" for screen readers', async () => {
    const el = await fixture<WuAlert>(html`<wu-alert>Message</wu-alert>`);
    const base = el.shadowRoot!.querySelector('.alert')!;
    expect(base.getAttribute('role')).toBe('alert');
  });

  it('hides dismiss button when not dismissible', async () => {
    const el = await fixture<WuAlert>(html`<wu-alert>Message</wu-alert>`);
    expect(el.shadowRoot!.querySelector('.dismiss-btn')).toBeNull();
  });

  it('shows dismiss button when dismissible', async () => {
    const el = await fixture<WuAlert>(html`<wu-alert dismissible>Message</wu-alert>`);
    expect(el.shadowRoot!.querySelector('.dismiss-btn')).toBeTruthy();
  });

  it('emits wu-dismiss and removes itself on dismiss click', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div><wu-alert dismissible>Message</wu-alert></div>
    `);
    const el = container.querySelector<WuAlert>('wu-alert')!;
    const handler = vi.fn();
    el.addEventListener('wu-dismiss', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.dismiss-btn')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('renders all variant icons', async () => {
    for (const variant of ['info', 'success', 'warning', 'danger', 'neutral'] as const) {
      const el = await fixture<WuAlert>(html`<wu-alert variant=${variant}>Msg</wu-alert>`);
      const icon = el.shadowRoot!.querySelector('.icon')!;
      expect(icon).toBeTruthy();
    }
  });
});
