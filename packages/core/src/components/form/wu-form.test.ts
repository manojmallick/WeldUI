import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-form.js';
import type { WuForm } from './wu-form.js';

describe('wu-form', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuForm>(html`<wu-form></wu-form>`);
    expect(el.loading).toBe(false);
    expect(el.novalidate).toBe(false);
  });

  it('renders a native <form> in shadow DOM', async () => {
    const el = await fixture<WuForm>(html`<wu-form></wu-form>`);
    expect(el.shadowRoot!.querySelector('form')).toBeTruthy();
  });

  it('does not show error summary by default', async () => {
    const el = await fixture<WuForm>(html`<wu-form></wu-form>`);
    expect(el.shadowRoot!.querySelector('.error-summary')).toBeNull();
  });

  it('shows loading state via attribute', async () => {
    const el = await fixture<WuForm>(html`<wu-form loading></wu-form>`);
    expect(el.loading).toBe(true);
    expect(el.hasAttribute('loading')).toBe(true);
  });

  it('emits wu-submit on valid form submission', async () => {
    const el = await fixture<WuForm>(html`
      <wu-form novalidate>
        <input name="email" value="test@example.com">
        <button slot="actions" type="submit">Submit</button>
      </wu-form>
    `);
    const handler = vi.fn();
    el.addEventListener('wu-submit', handler);
    el.shadowRoot!.querySelector('form')!.dispatchEvent(new SubmitEvent('submit', { bubbles: true }));
    await elementUpdated(el);
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.values).toBeDefined();
  });

  it('includes field values in wu-submit detail', async () => {
    const el = await fixture<WuForm>(html`
      <wu-form novalidate>
        <input name="username" value="manoj">
        <button slot="actions" type="submit">Go</button>
      </wu-form>
    `);
    const handler = vi.fn();
    el.addEventListener('wu-submit', handler);
    el.shadowRoot!.querySelector('form')!.dispatchEvent(new SubmitEvent('submit', { bubbles: true }));
    await elementUpdated(el);
    expect(handler.mock.calls[0][0].detail.values.username).toBe('manoj');
  });

  it('renders actions slot', async () => {
    const el = await fixture<WuForm>(html`
      <wu-form>
        <button slot="actions" type="submit">Submit</button>
      </wu-form>
    `);
    expect(el.querySelector('[slot="actions"]')).toBeTruthy();
  });
});
