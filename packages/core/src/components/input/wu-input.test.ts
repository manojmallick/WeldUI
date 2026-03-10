import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-input.js';

describe('wu-input', () => {
  it('renders with default type text', async () => {
    const el = await fixture(html`<wu-input></wu-input>`);
    const input = el.shadowRoot?.querySelector('input');
    expect(input?.type).toBe('text');
  });

  it('renders label when provided', async () => {
    const el = await fixture(html`<wu-input label="Name"></wu-input>`);
    expect(el.shadowRoot?.querySelector('label')?.textContent?.trim()).toBe('Name');
  });

  it('emits wu-change on input', async () => {
    const el = await fixture(html`<wu-input></wu-input>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const input = el.shadowRoot!.querySelector('input')!;
    input.value = 'hello';
    input.dispatchEvent(new Event('input'));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('shows error message', async () => {
    const el = await fixture(html`<wu-input error="Required"></wu-input>`);
    expect(el.shadowRoot?.querySelector('.error')?.textContent).toBe('Required');
  });

  it('disables input when disabled', async () => {
    const el = await fixture(html`<wu-input disabled></wu-input>`);
    expect(el.shadowRoot?.querySelector('input')?.disabled).toBe(true);
  });
});
