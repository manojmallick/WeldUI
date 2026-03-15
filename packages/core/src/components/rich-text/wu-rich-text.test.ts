import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-rich-text.js';
import type { WuRichText } from './wu-rich-text.js';

describe('wu-rich-text', () => {
  it('renders content area', async () => {
    const el = await fixture<WuRichText>(html`<wu-rich-text></wu-rich-text>`);
    const content = el.shadowRoot!.querySelector('.content');
    expect(content).toBeTruthy();
  });

  it('renders label', async () => {
    const el = await fixture<WuRichText>(html`<wu-rich-text label="Notes"></wu-rich-text>`);
    const label = el.shadowRoot!.querySelector('label');
    expect(label?.textContent?.trim()).toBe('Notes');
  });

  it('renders toolbar buttons', async () => {
    const el = await fixture<WuRichText>(html`<wu-rich-text></wu-rich-text>`);
    const btns = el.shadowRoot!.querySelectorAll('.tb-btn');
    expect(btns.length).toBeGreaterThan(0);
  });

  it('hides toolbar in readonly mode', async () => {
    const el = await fixture<WuRichText>(html`<wu-rich-text readonly></wu-rich-text>`);
    const toolbar = el.shadowRoot!.querySelector('.toolbar');
    expect(toolbar).toBeFalsy();
  });

  it('emits wu-change on input', async () => {
    const el = await fixture<WuRichText>(html`<wu-rich-text></wu-rich-text>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const content = el.shadowRoot!.querySelector<HTMLDivElement>('.content')!;
    content.textContent = 'Hello world';
    content.dispatchEvent(new Event('input', { bubbles: true }));
    expect(handler).toHaveBeenCalledOnce();
    const detail = (handler.mock.calls[0][0] as CustomEvent).detail;
    expect(detail.text).toBeTruthy();
    expect(detail.value).toBeTruthy();
  });

  it('emits wu-focus on focus', async () => {
    const el = await fixture<WuRichText>(html`<wu-rich-text></wu-rich-text>`);
    const handler = vi.fn();
    el.addEventListener('wu-focus', handler);
    const content = el.shadowRoot!.querySelector<HTMLDivElement>('.content')!;
    content.dispatchEvent(new FocusEvent('focus', { bubbles: true }));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('shows error message', async () => {
    const el = await fixture<WuRichText>(html`<wu-rich-text error="Content required"></wu-rich-text>`);
    const err = el.shadowRoot!.querySelector('.error-msg');
    expect(err?.textContent?.trim()).toBe('Content required');
  });

  it('content is not editable when disabled', async () => {
    const el = await fixture<WuRichText>(html`<wu-rich-text disabled></wu-rich-text>`);
    const content = el.shadowRoot!.querySelector<HTMLDivElement>('.content')!;
    expect(content.getAttribute('contenteditable')).toBe('false');
  });
});
