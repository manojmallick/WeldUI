import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-toggle.js';

describe('wu-toggle', () => {
  it('renders unchecked by default', async () => {
    const el = await fixture(html`<wu-toggle></wu-toggle>`);
    const input = el.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.checked).toBe(false);
  });

  it('reflects checked prop', async () => {
    const el = await fixture(html`<wu-toggle checked></wu-toggle>`);
    const input = el.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it('emits wu-change on toggle', async () => {
    const el = await fixture(html`<wu-toggle></wu-toggle>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    el.shadowRoot!.querySelector('input')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('renders label when provided', async () => {
    const el = await fixture(html`<wu-toggle label="Toggle me"></wu-toggle>`);
    expect(el.shadowRoot?.querySelector('label')?.textContent?.trim()).toBe('Toggle me');
  });

  it('is disabled when disabled prop set', async () => {
    const el = await fixture(html`<wu-toggle disabled></wu-toggle>`);
    const input = el.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });
});
