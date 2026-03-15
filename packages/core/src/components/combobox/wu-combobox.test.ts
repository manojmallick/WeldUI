import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-combobox.js';
import type { WuCombobox } from './wu-combobox.js';

const OPTIONS = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'py', label: 'Python' },
];

describe('wu-combobox', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuCombobox>(html`<wu-combobox></wu-combobox>`);
    expect(el.value).toBe('');
    expect(el.disabled).toBe(false);
  });

  it('renders label when provided', async () => {
    const el = await fixture<WuCombobox>(html`<wu-combobox label="Language"></wu-combobox>`);
    const label = el.shadowRoot!.querySelector('label');
    expect(label!.textContent).toBe('Language');
  });

  it('filters options based on query', async () => {
    const el = await fixture<WuCombobox>(html`<wu-combobox .options=${OPTIONS}></wu-combobox>`);
    await elementUpdated(el);
    const input = el.shadowRoot!.querySelector('input')!;
    input.value = 'type';
    input.dispatchEvent(new Event('input'));
    await elementUpdated(el);
    const items = el.shadowRoot!.querySelectorAll('.option');
    expect(items.length).toBe(1);
    expect(items[0].textContent).toBe('TypeScript');
  });

  it('emits wu-input on keystroke', async () => {
    const el = await fixture<WuCombobox>(html`<wu-combobox .options=${OPTIONS}></wu-combobox>`);
    const handler = vi.fn();
    el.addEventListener('wu-input', handler);
    const input = el.shadowRoot!.querySelector('input')!;
    input.value = 'py';
    input.dispatchEvent(new Event('input'));
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.query).toBe('py');
  });

  it('emits wu-change when option is clicked', async () => {
    const el = await fixture<WuCombobox>(html`<wu-combobox .options=${OPTIONS}></wu-combobox>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const input = el.shadowRoot!.querySelector('input')!;
    input.value = 'java';
    input.dispatchEvent(new Event('input'));
    await elementUpdated(el);
    const option = el.shadowRoot!.querySelector('.option') as HTMLElement;
    option?.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toBe('js');
  });

  it('renders error message', async () => {
    const el = await fixture<WuCombobox>(
      html`<wu-combobox error="Required field"></wu-combobox>`
    );
    const errEl = el.shadowRoot!.querySelector('.error-msg');
    expect(errEl!.textContent).toBe('Required field');
  });

  it('disables the input when disabled', async () => {
    const el = await fixture<WuCombobox>(html`<wu-combobox disabled></wu-combobox>`);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.disabled).toBe(true);
  });

  it('shows loading spinner', async () => {
    const el = await fixture<WuCombobox>(html`<wu-combobox loading></wu-combobox>`);
    const spinner = el.shadowRoot!.querySelector('.loading-indicator');
    expect(spinner).toBeTruthy();
  });

  it('renders combobox role on input', async () => {
    const el = await fixture<WuCombobox>(html`<wu-combobox></wu-combobox>`);
    const input = el.shadowRoot!.querySelector('input');
    expect(input!.getAttribute('role')).toBe('combobox');
  });
});
