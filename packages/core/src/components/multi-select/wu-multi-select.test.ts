import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-multi-select.js';
import type { WuMultiSelect } from './wu-multi-select.js';

const OPTIONS = [
  { value: 'a', label: 'Apple' },
  { value: 'b', label: 'Banana' },
  { value: 'c', label: 'Cherry' },
];

describe('wu-multi-select', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuMultiSelect>(html`<wu-multi-select .options=${OPTIONS}></wu-multi-select>`);
    expect(el.values).toEqual([]);
    expect(el.disabled).toBe(false);
  });

  it('renders chips for pre-selected values', async () => {
    const el = await fixture<WuMultiSelect>(
      html`<wu-multi-select .options=${OPTIONS} .values=${['a', 'b']}></wu-multi-select>`
    );
    const chips = el.shadowRoot!.querySelectorAll('.chip');
    expect(chips.length).toBe(2);
  });

  it('emits wu-change with all selected values', async () => {
    const el = await fixture<WuMultiSelect>(html`<wu-multi-select .options=${OPTIONS}></wu-multi-select>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    // Open, then click first option
    el.shadowRoot!.querySelector('.chips-input')!.dispatchEvent(new MouseEvent('click'));
    await elementUpdated(el);
    const opts = el.shadowRoot!.querySelectorAll('.option');
    (opts[0] as HTMLElement).click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.values).toContain('a');
  });

  it('removes chip when close button is clicked', async () => {
    const el = await fixture<WuMultiSelect>(
      html`<wu-multi-select .options=${OPTIONS} .values=${['a']}></wu-multi-select>`
    );
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const removeBtn = el.shadowRoot!.querySelector('.chip-remove') as HTMLElement;
    removeBtn.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(el.values).not.toContain('a');
  });

  it('renders label', async () => {
    const el = await fixture<WuMultiSelect>(
      html`<wu-multi-select label="Fruits" .options=${OPTIONS}></wu-multi-select>`
    );
    const label = el.shadowRoot!.querySelector('label');
    expect(label!.textContent).toBe('Fruits');
  });

  it('renders error message', async () => {
    const el = await fixture<WuMultiSelect>(
      html`<wu-multi-select error="Select at least one" .options=${OPTIONS}></wu-multi-select>`
    );
    const err = el.shadowRoot!.querySelector('.error-msg');
    expect(err!.textContent).toBe('Select at least one');
  });

  it('disables when disabled attribute set', async () => {
    const el = await fixture<WuMultiSelect>(
      html`<wu-multi-select disabled .options=${OPTIONS}></wu-multi-select>`
    );
    expect(el.disabled).toBe(true);
  });
});
