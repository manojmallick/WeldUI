import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-error-trace.js';

describe('wu-error-trace', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-error-trace></wu-error-trace>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-error-trace></wu-error-trace>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-error-trace></wu-error-trace>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-error-trace label="Test"></wu-error-trace>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-error-trace value="Hello"></wu-error-trace>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
