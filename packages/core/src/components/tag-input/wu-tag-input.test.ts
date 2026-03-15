import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-tag-input.js';
import type { WuTagInput } from './wu-tag-input.js';

describe('wu-tag-input', () => {
  it('renders empty by default', async () => {
    const el = await fixture<WuTagInput>(html`<wu-tag-input></wu-tag-input>`);
    expect(el.values).toEqual([]);
  });

  it('renders label', async () => {
    const el = await fixture<WuTagInput>(html`<wu-tag-input label="Tags"></wu-tag-input>`);
    const label = el.shadowRoot!.querySelector('label');
    expect(label?.textContent?.trim()).toBe('Tags');
  });

  it('renders pre-populated values as tags', async () => {
    const el = await fixture<WuTagInput>(html`<wu-tag-input .values=${['apple', 'banana']}></wu-tag-input>`);
    const tags = el.shadowRoot!.querySelectorAll('.tag');
    expect(tags.length).toBe(2);
  });

  it('emits wu-add and wu-change when Enter pressed', async () => {
    const el = await fixture<WuTagInput>(html`<wu-tag-input></wu-tag-input>`);
    const addHandler = vi.fn();
    const changeHandler = vi.fn();
    el.addEventListener('wu-add', addHandler);
    el.addEventListener('wu-change', changeHandler);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.tag-input')!;
    input.value = 'react';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await elementUpdated(el);
    expect(addHandler).toHaveBeenCalledOnce();
    expect((addHandler.mock.calls[0][0] as CustomEvent).detail.value).toBe('react');
    expect(changeHandler).toHaveBeenCalledOnce();
  });

  it('prevents duplicate tags', async () => {
    const el = await fixture<WuTagInput>(html`<wu-tag-input .values=${['react']}></wu-tag-input>`);
    const changeHandler = vi.fn();
    el.addEventListener('wu-change', changeHandler);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.tag-input')!;
    input.value = 'react';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await elementUpdated(el);
    expect(changeHandler).not.toHaveBeenCalled();
  });

  it('removes tag on button click and emits wu-remove', async () => {
    const el = await fixture<WuTagInput>(html`<wu-tag-input .values=${['one', 'two']}></wu-tag-input>`);
    const removeHandler = vi.fn();
    el.addEventListener('wu-remove', removeHandler);
    const btn = el.shadowRoot!.querySelector<HTMLButtonElement>('.tag-remove')!;
    btn.click();
    await elementUpdated(el);
    expect(removeHandler).toHaveBeenCalledOnce();
    expect(el.values).toEqual(['two']);
  });

  it('shows error message', async () => {
    const el = await fixture<WuTagInput>(html`<wu-tag-input error="Too many tags"></wu-tag-input>`);
    const errEl = el.shadowRoot!.querySelector('.error-msg');
    expect(errEl?.textContent?.trim()).toBe('Too many tags');
  });

  it('respects max limit', async () => {
    const el = await fixture<WuTagInput>(html`<wu-tag-input max="2" .values=${['a', 'b']}></wu-tag-input>`);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.tag-input')!;
    input.value = 'c';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await elementUpdated(el);
    expect(el.values.length).toBe(2);
  });
});
