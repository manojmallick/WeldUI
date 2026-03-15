import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-text.js';
import type { WuText } from './wu-text.js';

describe('wu-text', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuText>(html`<wu-text>Hello</wu-text>`);
    expect(el.variant).toBe('default');
    expect(el.size).toBe('base');
    expect(el.weight).toBe('normal');
    expect(el.italic).toBe(false);
    expect(el.mono).toBe(false);
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<WuText>(html`<wu-text variant="danger">Error</wu-text>`);
    expect(el.getAttribute('variant')).toBe('danger');
  });

  it('reflects size attribute', async () => {
    const el = await fixture<WuText>(html`<wu-text size="lg">Large</wu-text>`);
    expect(el.getAttribute('size')).toBe('lg');
  });

  it('applies italic attribute', async () => {
    const el = await fixture<WuText>(html`<wu-text italic>Slanted</wu-text>`);
    expect(el.italic).toBe(true);
  });

  it('renders slotted text content', async () => {
    const el = await fixture<WuText>(html`<wu-text>Content</wu-text>`);
    expect(el.textContent?.trim()).toBe('Content');
  });
});
