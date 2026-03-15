import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-rich-text-viewer.js';
import type { WuRichTextViewer } from './wu-rich-text-viewer.js';

describe('wu-rich-text-viewer', () => {
  it('renders prose container', async () => {
    const el = await fixture<WuRichTextViewer>(html`<wu-rich-text-viewer></wu-rich-text-viewer>`);
    expect(el.shadowRoot!.querySelector('.prose')).toBeTruthy();
  });

  it('renders HTML content when content is set', async () => {
    const el = await fixture<WuRichTextViewer>(
      html`<wu-rich-text-viewer content="<p>Hello <strong>world</strong></p>"></wu-rich-text-viewer>`,
    );
    const p = el.shadowRoot!.querySelector('p');
    expect(p).toBeTruthy();
    expect(p?.querySelector('strong')?.textContent).toBe('world');
  });

  it('renders slot when content is empty', async () => {
    const el = await fixture<WuRichTextViewer>(html`<wu-rich-text-viewer></wu-rich-text-viewer>`);
    const slot = el.shadowRoot!.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  it('reflects compact attribute', async () => {
    const el = await fixture<WuRichTextViewer>(html`<wu-rich-text-viewer compact></wu-rich-text-viewer>`);
    expect(el.hasAttribute('compact')).toBe(true);
  });

  it('has aria-live on prose container', async () => {
    const el = await fixture<WuRichTextViewer>(html`<wu-rich-text-viewer></wu-rich-text-viewer>`);
    const prose = el.shadowRoot!.querySelector('.prose');
    expect(prose?.getAttribute('aria-live')).toBe('polite');
  });
});
