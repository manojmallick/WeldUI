import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-avatar.js';

describe('wu-avatar', () => {
  it('renders initials', async () => {
    const el = await fixture(html`<wu-avatar initials="AB"></wu-avatar>`);
    expect(el.shadowRoot?.querySelector('.avatar')?.textContent?.trim()).toBe('AB');
  });

  it('reflects size attribute', async () => {
    const el = await fixture(html`<wu-avatar size="lg" initials="LG"></wu-avatar>`);
    expect(el.getAttribute('size')).toBe('lg');
  });

  it('renders img when src is provided', async () => {
    const el = await fixture(html`<wu-avatar src="https://example.com/a.jpg" alt="Test"></wu-avatar>`);
    expect(el.shadowRoot?.querySelector('img')).toBeTruthy();
  });
});
