import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-select.js';

describe('wu-select', () => {
  it('renders a select element', async () => {
    const el = await fixture(html`<wu-select></wu-select>`);
    expect(el.shadowRoot?.querySelector('select')).toBeTruthy();
  });

  it('renders options', async () => {
    const el = await fixture(html`<wu-select .options=${[{ value: 'a', label: 'A' }]}></wu-select>`);
    const options = el.shadowRoot?.querySelectorAll('option');
    expect(options?.length).toBeGreaterThan(0);
  });

  it('emits wu-change when selection changes', async () => {
    const el = await fixture(html`<wu-select .options=${[{ value: 'x', label: 'X' }]}></wu-select>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const select = el.shadowRoot!.querySelector('select')!;
    select.value = 'x';
    select.dispatchEvent(new Event('change'));
    expect(handler).toHaveBeenCalledOnce();
  });
});
