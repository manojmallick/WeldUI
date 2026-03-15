import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-tag.js';
import type { WuTag } from './wu-tag.js';

describe('wu-tag', () => {
  it('renders slot content', async () => {
    const el = await fixture<WuTag>(html`<wu-tag>React</wu-tag>`);
    expect(el.textContent?.trim()).toBe('React');
  });
  it('shows dismiss button when dismissible', async () => {
    const el = await fixture<WuTag>(html`<wu-tag dismissible>Tag</wu-tag>`);
    expect(el.shadowRoot!.querySelector('.dismiss')).toBeTruthy();
  });
  it('hides dismiss button by default', async () => {
    const el = await fixture<WuTag>(html`<wu-tag>Tag</wu-tag>`);
    expect(el.shadowRoot!.querySelector('.dismiss')).toBeFalsy();
  });
  it('emits wu-dismiss on dismiss click', async () => {
    const el = await fixture<WuTag>(html`<wu-tag dismissible>Tag</wu-tag>`);
    const handler = vi.fn();
    el.addEventListener('wu-dismiss', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.dismiss')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });
  it('reflects variant attribute', async () => {
    const el = await fixture<WuTag>(html`<wu-tag variant="success">OK</wu-tag>`);
    expect(el.getAttribute('variant')).toBe('success');
  });
});
