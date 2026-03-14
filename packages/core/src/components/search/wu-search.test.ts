import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-search.js';

describe('wu-search', () => {
  it('renders with default props', async () => {
    const el = await fixture<any>(html`<wu-search></wu-search>`);
    expect(el.value).toBe('');
    expect(el.placeholder).toBe('Search…');
    expect(el.loading).toBe(false);
    expect(el.clearable).toBe(true);
    expect(el.debounce).toBe(300);
  });

  it('renders a native input', async () => {
    const el = await fixture<any>(html`<wu-search></wu-search>`);
    const input = el.shadowRoot!.querySelector('input');
    expect(input).toBeTruthy();
  });

  it('does not show clear button when value is empty', async () => {
    const el = await fixture<any>(html`<wu-search></wu-search>`);
    const clear = el.shadowRoot!.querySelector('button.clear');
    expect(clear).toBeNull();
  });

  it('shows clear button when value is set', async () => {
    const el = await fixture<any>(html`<wu-search value="hello"></wu-search>`);
    await el.updateComplete;
    const clear = el.shadowRoot!.querySelector('button.clear');
    expect(clear).toBeTruthy();
  });

  it('shows spinner when loading', async () => {
    const el = await fixture<any>(html`<wu-search loading></wu-search>`);
    const spinner = el.shadowRoot!.querySelector('.spinner');
    expect(spinner).toBeTruthy();
  });

  it('hides clear button when loading even if value is set', async () => {
    const el = await fixture<any>(html`<wu-search value="test" loading></wu-search>`);
    await el.updateComplete;
    const clear = el.shadowRoot!.querySelector('button.clear');
    expect(clear).toBeNull();
  });

  it('emits wu-clear when clear button clicked', async () => {
    const el = await fixture<any>(html`<wu-search value="hello"></wu-search>`);
    await el.updateComplete;
    const handler = vi.fn();
    el.addEventListener('wu-clear', handler);
    const clear = el.shadowRoot!.querySelector('button.clear') as HTMLButtonElement;
    clear.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('clears value after clear button click', async () => {
    const el = await fixture<any>(html`<wu-search value="hello"></wu-search>`);
    await el.updateComplete;
    const clear = el.shadowRoot!.querySelector('button.clear') as HTMLButtonElement;
    clear.click();
    await el.updateComplete;
    expect(el.value).toBe('');
  });
});
