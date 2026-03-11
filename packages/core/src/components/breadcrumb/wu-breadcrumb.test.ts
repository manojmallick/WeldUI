import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-breadcrumb.js';
import type { WuBreadcrumb } from './wu-breadcrumb.js';

describe('wu-breadcrumb', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuBreadcrumb>(html`<wu-breadcrumb><a href="/">Home</a></wu-breadcrumb>`);
    expect(el.separator).toBe('/');
    expect(el.label).toBe('Breadcrumb');
  });

  it('renders a nav element', async () => {
    const el = await fixture<WuBreadcrumb>(html`<wu-breadcrumb><a href="/">Home</a></wu-breadcrumb>`);
    expect(el.shadowRoot!.querySelector('nav')).toBeTruthy();
  });

  it('has aria-label on nav', async () => {
    const el = await fixture<WuBreadcrumb>(html`<wu-breadcrumb label="Page path"><a href="/">Home</a></wu-breadcrumb>`);
    const nav = el.shadowRoot!.querySelector('nav')!;
    expect(nav.getAttribute('aria-label')).toBe('Page path');
  });

  it('renders an ordered list', async () => {
    const el = await fixture<WuBreadcrumb>(html`<wu-breadcrumb><a href="/">Home</a></wu-breadcrumb>`);
    expect(el.shadowRoot!.querySelector('ol')).toBeTruthy();
  });

  it('accepts custom separator', async () => {
    const el = await fixture<WuBreadcrumb>(html`<wu-breadcrumb separator=">"><a href="/">Home</a></wu-breadcrumb>`);
    expect(el.separator).toBe('>');
  });
});
