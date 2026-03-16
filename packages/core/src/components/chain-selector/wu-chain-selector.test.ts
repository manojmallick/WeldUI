import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-chain-selector.js';

describe('wu-chain-selector', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-chain-selector></wu-chain-selector>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-chain-selector></wu-chain-selector>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-chain-selector></wu-chain-selector>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-chain-selector label="Test"></wu-chain-selector>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-chain-selector value="Hello"></wu-chain-selector>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
