import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-textarea.js';

describe('wu-textarea', () => {
  it('renders a textarea element', async () => {
    const el = await fixture(html`<wu-textarea></wu-textarea>`);
    expect(el.shadowRoot?.querySelector('textarea')).toBeTruthy();
  });

  it('renders label when provided', async () => {
    const el = await fixture(html`<wu-textarea label="Notes"></wu-textarea>`);
    expect(el.shadowRoot?.querySelector('label')?.textContent?.trim()).toBe('Notes');
  });

  it('emits wu-change on input', async () => {
    const el = await fixture(html`<wu-textarea></wu-textarea>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const ta = el.shadowRoot!.querySelector('textarea')!;
    ta.value = 'hi';
    ta.dispatchEvent(new Event('input'));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('shows char count when maxlength set', async () => {
    const el = await fixture(html`<wu-textarea maxlength="100"></wu-textarea>`);
    expect(el.shadowRoot?.querySelector('.char-count')).toBeTruthy();
  });
});
