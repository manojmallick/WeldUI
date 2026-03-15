import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-radio.js';
import type { WuRadio, WuRadioGroup } from './wu-radio.js';

describe('wu-radio', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuRadio>(html`<wu-radio value="a">Option A</wu-radio>`);
    expect(el.value).toBe('a');
    expect(el.checked).toBe(false);
    expect(el.disabled).toBe(false);
  });

  it('reflects checked attribute', async () => {
    const el = await fixture<WuRadio>(html`<wu-radio value="a" checked>A</wu-radio>`);
    expect(el.checked).toBe(true);
    expect(el.getAttribute('checked')).toBe('');
  });

  it('reflects disabled attribute', async () => {
    const el = await fixture<WuRadio>(html`<wu-radio value="a" disabled>A</wu-radio>`);
    expect(el.disabled).toBe(true);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.disabled).toBe(true);
  });

  it('emits wu-change when clicked', async () => {
    const el = await fixture<WuRadio>(html`<wu-radio value="b">B</wu-radio>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    el.shadowRoot!.querySelector('input')!.dispatchEvent(new Event('change'));
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toBe('b');
  });

  it('does not emit wu-change when disabled', async () => {
    const el = await fixture<WuRadio>(html`<wu-radio value="b" disabled>B</wu-radio>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    el.shadowRoot!.querySelector('input')!.dispatchEvent(new Event('change'));
    expect(handler).not.toHaveBeenCalled();
  });

  it('renders label text', async () => {
    const el = await fixture<WuRadio>(html`<wu-radio value="a">My Label</wu-radio>`);
    const label = el.shadowRoot!.querySelector('label');
    expect(label).toBeTruthy();
  });
});

describe('wu-radio-group', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuRadioGroup>(html`
      <wu-radio-group name="test">
        <wu-radio value="a">A</wu-radio>
        <wu-radio value="b">B</wu-radio>
      </wu-radio-group>
    `);
    expect(el.name).toBe('test');
    expect(el.value).toBe('');
  });

  it('sets checked=true on the radio matching value', async () => {
    const el = await fixture<WuRadioGroup>(html`
      <wu-radio-group name="test" value="b">
        <wu-radio value="a">A</wu-radio>
        <wu-radio value="b">B</wu-radio>
      </wu-radio-group>
    `);
    await elementUpdated(el);
    const radios = el.querySelectorAll<WuRadio>('wu-radio');
    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(true);
  });

  it('emits wu-change with new value when child radio changes', async () => {
    const el = await fixture<WuRadioGroup>(html`
      <wu-radio-group name="test" value="a">
        <wu-radio value="a">A</wu-radio>
        <wu-radio value="b">B</wu-radio>
      </wu-radio-group>
    `);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const radioB = el.querySelectorAll<WuRadio>('wu-radio')[1];
    radioB.dispatchEvent(
      new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: 'b' } })
    );
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toBe('b');
    expect(el.value).toBe('b');
  });

  it('renders a legend when label is set', async () => {
    const el = await fixture<WuRadioGroup>(html`
      <wu-radio-group name="test" label="Choose size">
        <wu-radio value="sm">SM</wu-radio>
      </wu-radio-group>
    `);
    const legend = el.shadowRoot!.querySelector('.legend');
    expect(legend!.textContent).toBe('Choose size');
  });

  it('renders error message when error is set', async () => {
    const el = await fixture<WuRadioGroup>(html`
      <wu-radio-group name="test" error="Required">
        <wu-radio value="a">A</wu-radio>
      </wu-radio-group>
    `);
    const err = el.shadowRoot!.querySelector('.error');
    expect(err!.textContent).toBe('Required');
  });

  it('renders horizontal layout', async () => {
    const el = await fixture<WuRadioGroup>(html`
      <wu-radio-group name="test" orientation="horizontal">
        <wu-radio value="a">A</wu-radio>
      </wu-radio-group>
    `);
    expect(el.getAttribute('orientation')).toBe('horizontal');
  });
});
