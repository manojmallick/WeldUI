import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-pin-input.js';
import type { WuPinInput } from './wu-pin-input.js';

describe('wu-pin-input', () => {
  it('renders with default length 6', async () => {
    const el = await fixture<WuPinInput>(html`<wu-pin-input></wu-pin-input>`);
    await elementUpdated(el);
    const inputs = el.shadowRoot!.querySelectorAll('input');
    expect(inputs.length).toBe(6);
  });

  it('renders correct number of inputs for length prop', async () => {
    const el = await fixture<WuPinInput>(html`<wu-pin-input length="4"></wu-pin-input>`);
    await elementUpdated(el);
    const inputs = el.shadowRoot!.querySelectorAll('input');
    expect(inputs.length).toBe(4);
  });

  it('renders label', async () => {
    const el = await fixture<WuPinInput>(html`<wu-pin-input label="Enter code"></wu-pin-input>`);
    const label = el.shadowRoot!.querySelector('label');
    expect(label!.textContent).toBe('Enter code');
  });

  it('prefills digits from value prop', async () => {
    const el = await fixture<WuPinInput>(
      html`<wu-pin-input length="4" value="1234"></wu-pin-input>`
    );
    await elementUpdated(el);
    const inputs = el.shadowRoot!.querySelectorAll<HTMLInputElement>('input');
    expect(inputs[0].value).toBe('1');
    expect(inputs[3].value).toBe('4');
  });

  it('emits wu-change on digit input', async () => {
    const el = await fixture<WuPinInput>(html`<wu-pin-input length="4"></wu-pin-input>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const input = el.shadowRoot!.querySelectorAll<HTMLInputElement>('input')[0];
    input.value = '5';
    input.dispatchEvent(new InputEvent('input'));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('emits wu-complete when all digits filled', async () => {
    const el = await fixture<WuPinInput>(html`<wu-pin-input length="4"></wu-pin-input>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-complete', handler);
    const inputs = el.shadowRoot!.querySelectorAll<HTMLInputElement>('input');
    ['1','2','3','4'].forEach((v, i) => {
      inputs[i].value = v;
      inputs[i].dispatchEvent(new InputEvent('input'));
    });
    expect(handler).toHaveBeenCalledOnce();
  });

  it('disables all inputs when disabled', async () => {
    const el = await fixture<WuPinInput>(html`<wu-pin-input length="4" disabled></wu-pin-input>`);
    await elementUpdated(el);
    const inputs = el.shadowRoot!.querySelectorAll<HTMLInputElement>('input');
    inputs.forEach((inp) => expect(inp.disabled).toBe(true));
  });

  it('uses password type when mask is set', async () => {
    const el = await fixture<WuPinInput>(html`<wu-pin-input length="4" mask></wu-pin-input>`);
    await elementUpdated(el);
    const inputs = el.shadowRoot!.querySelectorAll<HTMLInputElement>('input');
    inputs.forEach((inp) => expect(inp.type).toBe('password'));
  });

  it('renders error message', async () => {
    const el = await fixture<WuPinInput>(
      html`<wu-pin-input error="Invalid code"></wu-pin-input>`
    );
    const err = el.shadowRoot!.querySelector('.error-msg');
    expect(err!.textContent).toBe('Invalid code');
  });
});
