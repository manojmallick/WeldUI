import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuApiKeyDisplay } from './wu-api-key-display.js';
import './wu-api-key-display.js';

describe('wu-api-key-display', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuApiKeyDisplay>(html`<wu-api-key-display></wu-api-key-display>`);
    expect(el.label).toBe('API Key');
  });

  it('masks the key by default', async () => {
    const el = await fixture<WuApiKeyDisplay>(html`<wu-api-key-display value="abc123xyz"></wu-api-key-display>`);
    const code = el.shadowRoot!.querySelector('.key-value')!.textContent!;
    expect(code).toContain('•');
    expect(code).toContain('xyz');
  });

  it('reveals key when reveal button is clicked', async () => {
    const el = await fixture<WuApiKeyDisplay>(html`<wu-api-key-display value="abc123xyz"></wu-api-key-display>`);
    (el.shadowRoot!.querySelectorAll('.icon-btn')[0] as HTMLButtonElement).click();
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.key-value')!.textContent).toBe('abc123xyz');
  });

  it('shows label', async () => {
    const el = await fixture<WuApiKeyDisplay>(html`<wu-api-key-display label="Secret Key"></wu-api-key-display>`);
    expect(el.shadowRoot!.querySelector('.label')?.textContent?.trim()).toBe('Secret Key');
  });

  it('renders two action buttons', async () => {
    const el = await fixture<WuApiKeyDisplay>(html`<wu-api-key-display value="test"></wu-api-key-display>`);
    expect(el.shadowRoot!.querySelectorAll('.icon-btn').length).toBe(2);
  });
});
