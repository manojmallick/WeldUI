import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-mention-input.js';
import type { WuMentionInput } from './wu-mention-input.js';

describe('wu-mention-input', () => {
  it('renders textarea', async () => {
    const el = await fixture<WuMentionInput>(html`<wu-mention-input></wu-mention-input>`);
    expect(el.shadowRoot!.querySelector('textarea')).toBeTruthy();
  });

  it('emits wu-input on typing', async () => {
    const el = await fixture<WuMentionInput>(html`<wu-mention-input></wu-mention-input>`);
    const handler = vi.fn();
    el.addEventListener('wu-input', handler);
    const ta = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
    ta.value = 'hello';
    ta.dispatchEvent(new Event('input'));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('emits wu-mention when @ is typed', async () => {
    const el = await fixture<WuMentionInput>(html`<wu-mention-input></wu-mention-input>`);
    const handler = vi.fn();
    el.addEventListener('wu-mention', handler);
    const ta = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
    ta.value = '@ali';
    Object.defineProperty(ta, 'selectionStart', { value: 4 });
    ta.dispatchEvent(new Event('input'));
    expect(handler).toHaveBeenCalledOnce();
    expect((handler.mock.calls[0][0] as CustomEvent).detail).toEqual({ query: 'ali' });
  });

  it('uses rows attribute', async () => {
    const el = await fixture<WuMentionInput>(html`<wu-mention-input rows="5"></wu-mention-input>`);
    const ta = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
    expect(ta.rows).toBe(5);
  });

  it('shows placeholder text', async () => {
    const el = await fixture<WuMentionInput>(
      html`<wu-mention-input placeholder="Write something"></wu-mention-input>`,
    );
    const ta = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
    expect(ta.placeholder).toBe('Write something');
  });
});
