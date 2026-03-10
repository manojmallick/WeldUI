import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-checkbox.js';

describe('wu-checkbox', () => {
  it('renders unchecked by default', async () => {
    const el = await fixture(html`<wu-checkbox></wu-checkbox>`);
    const input = el.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.checked).toBe(false);
  });

  it('reflects checked prop', async () => {
    const el = await fixture(html`<wu-checkbox checked></wu-checkbox>`);
    const input = el.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it('emits wu-change on click', async () => {
    const el = await fixture(html`<wu-checkbox></wu-checkbox>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const input = el.shadowRoot!.querySelector('input')!;
    input.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('renders label when provided', async () => {
    const el = await fixture(html`<wu-checkbox label="Agree"></wu-checkbox>`);
    expect(el.shadowRoot?.querySelector('label')?.textContent?.trim()).toBe('Agree');
  });

  it('is disabled when disabled prop is set', async () => {
    const el = await fixture(html`<wu-checkbox disabled></wu-checkbox>`);
    const input = el.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });
});
