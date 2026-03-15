import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-blockquote.js';
import type { WuBlockquote } from './wu-blockquote.js';

describe('wu-blockquote', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuBlockquote>(html`<wu-blockquote>Quote</wu-blockquote>`);
    expect(el.attribution).toBe('');
    expect(el.cite).toBe('');
  });

  it('renders a blockquote element', async () => {
    const el = await fixture<WuBlockquote>(html`<wu-blockquote>Text</wu-blockquote>`);
    expect(el.shadowRoot?.querySelector('blockquote')).toBeTruthy();
  });

  it('shows attribution when provided', async () => {
    const el = await fixture<WuBlockquote>(
      html`<wu-blockquote attribution="Author">Quote</wu-blockquote>`,
    );
    const caption = el.shadowRoot?.querySelector('.attribution');
    expect(caption?.textContent).toContain('Author');
  });

  it('hides attribution when not provided', async () => {
    const el = await fixture<WuBlockquote>(html`<wu-blockquote>Quote</wu-blockquote>`);
    expect(el.shadowRoot?.querySelector('.attribution')).toBeNull();
  });

  it('renders slotted content', async () => {
    const el = await fixture<WuBlockquote>(html`<wu-blockquote>The quote text</wu-blockquote>`);
    expect(el.textContent).toContain('The quote text');
  });
});
