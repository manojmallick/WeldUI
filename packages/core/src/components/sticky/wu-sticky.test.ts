import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-sticky.js';
import type { WuSticky } from './wu-sticky.js';

describe('wu-sticky', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuSticky>(html`<wu-sticky></wu-sticky>`);
    expect(el.top).toBe('0');
    expect(el.zIndex).toBe(10);
  });

  it('reflects top attribute', async () => {
    const el = await fixture<WuSticky>(html`<wu-sticky top="64px"></wu-sticky>`);
    expect(el.getAttribute('top')).toBe('64px');
    expect(el.top).toBe('64px');
  });

  it('reflects z-index attribute', async () => {
    const el = await fixture<WuSticky>(html`<wu-sticky z-index="50"></wu-sticky>`);
    expect(el.zIndex).toBe(50);
  });

  it('passes top to inline style', async () => {
    const el = await fixture<WuSticky>(html`<wu-sticky top="48px"></wu-sticky>`);
    const base = el.shadowRoot?.querySelector('.sticky') as HTMLElement;
    expect(base.style.getPropertyValue('--wu-sticky-top')).toBe('48px');
  });

  it('renders slotted content', async () => {
    const el = await fixture<WuSticky>(html`<wu-sticky><span>Sticky</span></wu-sticky>`);
    expect(el.textContent).toContain('Sticky');
  });
});
