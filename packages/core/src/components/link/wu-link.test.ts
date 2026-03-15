import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-link.js';
import type { WuLink } from './wu-link.js';

describe('wu-link', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuLink>(html`<wu-link href="#">Link</wu-link>`);
    expect(el.variant).toBe('default');
    expect(el.external).toBe(false);
    expect(el.underline).toBe('hover');
  });

  it('renders an anchor element', async () => {
    const el = await fixture<WuLink>(html`<wu-link href="/about">About</wu-link>`);
    const a = el.shadowRoot?.querySelector('a[part="base"]') as HTMLAnchorElement;
    expect(a).toBeTruthy();
    expect(a.href).toContain('/about');
  });

  it('adds target="_blank" and rel for external links', async () => {
    const el = await fixture<WuLink>(html`<wu-link href="https://example.com" external>External</wu-link>`);
    const a = el.shadowRoot?.querySelector('a') as HTMLAnchorElement;
    expect(a.target).toBe('_blank');
    expect(a.rel).toContain('noopener');
  });

  it('shows external icon for external links', async () => {
    const el = await fixture<WuLink>(html`<wu-link href="https://x.com" external>X</wu-link>`);
    expect(el.shadowRoot?.querySelector('.external-icon')).toBeTruthy();
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<WuLink>(html`<wu-link href="#" variant="danger">Delete</wu-link>`);
    expect(el.getAttribute('variant')).toBe('danger');
  });
});
