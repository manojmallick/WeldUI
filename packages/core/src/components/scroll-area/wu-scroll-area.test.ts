import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-scroll-area.js';

describe('wu-scroll-area', () => {
  it('renders a slot', async () => {
    const el = await fixture(html`<wu-scroll-area><p>Content</p></wu-scroll-area>`);
    expect(el.shadowRoot!.querySelector('slot')).toBeTruthy();
  });

  it('defaults orientation to both', async () => {
    const el: any = await fixture(html`<wu-scroll-area></wu-scroll-area>`);
    expect(el.orientation).toBe('both');
  });

  it('reflects orientation attribute', async () => {
    const el = await fixture(html`<wu-scroll-area orientation="vertical"></wu-scroll-area>`);
    expect(el.getAttribute('orientation')).toBe('vertical');
  });

  it('accepts max-height prop', async () => {
    const el: any = await fixture(html`<wu-scroll-area max-height="200px"></wu-scroll-area>`);
    expect(el.maxHeight).toBe('200px');
  });

  it('accepts max-width prop', async () => {
    const el: any = await fixture(html`<wu-scroll-area max-width="400px"></wu-scroll-area>`);
    expect(el.maxWidth).toBe('400px');
  });
});
