import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-ai-suggestion.js';

describe('wu-ai-suggestion', () => {
  it('renders suggestion text', async () => {
    const el: any = await fixture(html`<wu-ai-suggestion .suggestion=${'hello world'}></wu-ai-suggestion>`);
    expect(el.suggestion).toBe('hello world');
    expect(el.shadowRoot!.querySelector('.suggestion')).toBeTruthy();
  });

  it('emits wu-accept when clicked', async () => {
    const el: any = await fixture(html`<wu-ai-suggestion .suggestion=${'hello'}></wu-ai-suggestion>`);
    const handler = vi.fn();
    el.addEventListener('wu-accept', handler);
    el.shadowRoot!.querySelector('.suggestion')!.click();
    expect(handler).toHaveBeenCalled();
  });

  it('shows accept hint by default', async () => {
    const el: any = await fixture(html`<wu-ai-suggestion .suggestion=${'test'}></wu-ai-suggestion>`);
    expect(el.showHint).toBe(true);
    expect(el.shadowRoot!.querySelector('.suggestion')).toBeTruthy();
  });

  it('hides when suggestion is empty', async () => {
    const el: any = await fixture(html`<wu-ai-suggestion></wu-ai-suggestion>`);
    expect(el.shadowRoot!.querySelector('.suggestion')).toBeFalsy();
  });
});
