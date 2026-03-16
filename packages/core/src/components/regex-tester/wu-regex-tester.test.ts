import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-regex-tester.js';

describe('wu-regex-tester', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-regex-tester></wu-regex-tester>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-regex-tester></wu-regex-tester>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-regex-tester></wu-regex-tester>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-regex-tester label="Test"></wu-regex-tester>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-regex-tester value="Hello"></wu-regex-tester>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
