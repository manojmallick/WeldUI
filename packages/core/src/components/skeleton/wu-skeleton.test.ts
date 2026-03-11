import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-skeleton.js';
import type { WuSkeleton } from './wu-skeleton.js';

describe('wu-skeleton', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuSkeleton>(html`<wu-skeleton></wu-skeleton>`);
    expect(el.variant).toBe('text');
    expect(el.width).toBe('100%');
  });

  it('renders skeleton div', async () => {
    const el = await fixture<WuSkeleton>(html`<wu-skeleton></wu-skeleton>`);
    expect(el.shadowRoot!.querySelector('.skeleton')).toBeTruthy();
  });

  it('has role="status" for screen readers', async () => {
    const el = await fixture<WuSkeleton>(html`<wu-skeleton></wu-skeleton>`);
    expect(el.shadowRoot!.querySelector('[role="status"]')).toBeTruthy();
  });

  it('applies width style', async () => {
    const el = await fixture<WuSkeleton>(html`<wu-skeleton width="200px"></wu-skeleton>`);
    const div = el.shadowRoot!.querySelector<HTMLElement>('.skeleton')!;
    expect(div.style.width).toBe('200px');
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<WuSkeleton>(html`<wu-skeleton variant="circle"></wu-skeleton>`);
    expect(el.getAttribute('variant')).toBe('circle');
  });

  it('applies height style when provided', async () => {
    const el = await fixture<WuSkeleton>(html`<wu-skeleton variant="rect" height="120px"></wu-skeleton>`);
    const div = el.shadowRoot!.querySelector<HTMLElement>('.skeleton')!;
    expect(div.style.height).toBe('120px');
  });
});
