import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-image.js';
import type { WuImage } from './wu-image.js';

describe('wu-image', () => {
  it('renders img element with src', async () => {
    const el = await fixture<WuImage>(html`<wu-image src="https://example.com/img.jpg" alt="Test"></wu-image>`);
    const img = el.shadowRoot!.querySelector('img');
    expect(img?.src).toContain('example.com');
  });
  it('renders placeholder when no src', async () => {
    const el = await fixture<WuImage>(html`<wu-image alt="Missing"></wu-image>`);
    expect(el.shadowRoot!.querySelector('.placeholder')).toBeTruthy();
  });
  it('applies rounded attribute', async () => {
    const el = await fixture<WuImage>(html`<wu-image rounded></wu-image>`);
    expect(el.hasAttribute('rounded')).toBe(true);
  });
  it('uses lazy loading by default', async () => {
    const el = await fixture<WuImage>(html`<wu-image src="x.jpg" alt="x"></wu-image>`);
    expect(el.shadowRoot!.querySelector('img')?.loading).toBe('lazy');
  });
  it('alt fallback in placeholder', async () => {
    const el = await fixture<WuImage>(html`<wu-image alt="Portrait photo"></wu-image>`);
    expect(el.shadowRoot!.querySelector('.placeholder')?.textContent).toContain('Portrait photo');
  });
});
