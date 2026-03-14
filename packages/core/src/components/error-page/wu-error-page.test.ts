import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-error-page.js';

describe('wu-error-page', () => {
  it('renders with default 404 code', async () => {
    const el = await fixture<any>(html`<wu-error-page></wu-error-page>`);
    expect(el.code).toBe('404');
  });

  it('reflects code attribute', async () => {
    const el = await fixture<any>(html`<wu-error-page code="500"></wu-error-page>`);
    expect(el.code).toBe('500');
    expect(el.getAttribute('code')).toBe('500');
  });

  it('shows default title for known code', async () => {
    const el = await fixture<any>(html`<wu-error-page code="404"></wu-error-page>`);
    const title = el.shadowRoot!.querySelector('[part="title"]');
    expect(title!.textContent!.trim()).toBe('Page Not Found');
  });

  it('shows default title for 500', async () => {
    const el = await fixture<any>(html`<wu-error-page code="500"></wu-error-page>`);
    const title = el.shadowRoot!.querySelector('[part="title"]');
    expect(title!.textContent!.trim()).toBe('Internal Server Error');
  });

  it('uses custom title when provided', async () => {
    const el = await fixture<any>(html`<wu-error-page code="404" title="Oops!"></wu-error-page>`);
    const title = el.shadowRoot!.querySelector('[part="title"]');
    expect(title!.textContent!.trim()).toBe('Oops!');
  });

  it('uses custom description when provided', async () => {
    const el = await fixture<any>(html`
      <wu-error-page description="Custom description text."></wu-error-page>
    `);
    const desc = el.shadowRoot!.querySelector('[part="description"]');
    expect(desc!.textContent!.trim()).toBe('Custom description text.');
  });

  it('renders actions slot', async () => {
    const el = await fixture<any>(html`
      <wu-error-page>
        <button slot="actions">Go home</button>
      </wu-error-page>
    `);
    const actions = el.shadowRoot!.querySelector('[part="actions"]');
    expect(actions).toBeTruthy();
  });

  it('falls back gracefully for unknown codes', async () => {
    const el = await fixture<any>(html`<wu-error-page code="999"></wu-error-page>`);
    const title = el.shadowRoot!.querySelector('[part="title"]');
    expect(title!.textContent!.trim()).toBe('An error occurred');
  });
});
