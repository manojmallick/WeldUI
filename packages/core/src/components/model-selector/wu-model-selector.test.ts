import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-model-selector.js';

describe('wu-model-selector', () => {
  it('renders a select element', async () => {
    const el: any = await fixture(html`<wu-model-selector></wu-model-selector>`);
    expect(el.shadowRoot!.querySelector('select')).toBeTruthy();
  });

  it('shows default models', async () => {
    const el: any = await fixture(html`<wu-model-selector></wu-model-selector>`);
    const options = el.shadowRoot!.querySelectorAll('option');
    expect(options.length).toBeGreaterThanOrEqual(4);
  });

  it('emits wu-change on selection', async () => {
    const el: any = await fixture(html`<wu-model-selector></wu-model-selector>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const select = el.shadowRoot!.querySelector('select') as HTMLSelectElement;
    select.value = 'claude-3-opus';
    select.dispatchEvent(new Event('change'));
    expect(handler).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is set', async () => {
    const el: any = await fixture(html`<wu-model-selector disabled></wu-model-selector>`);
    const select = el.shadowRoot!.querySelector('select');
    expect(select!.disabled).toBe(true);
  });
});
