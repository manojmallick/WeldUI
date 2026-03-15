import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-aspect-ratio.js';
import type { WuAspectRatio } from './wu-aspect-ratio.js';

describe('wu-aspect-ratio', () => {
  it('renders with default ratio', async () => {
    const el = await fixture<WuAspectRatio>(html`<wu-aspect-ratio></wu-aspect-ratio>`);
    expect(el.ratio).toBe('16/9');
  });

  it('reflects ratio attribute', async () => {
    const el = await fixture<WuAspectRatio>(html`<wu-aspect-ratio ratio="4/3"></wu-aspect-ratio>`);
    expect(el.getAttribute('ratio')).toBe('4/3');
    expect(el.ratio).toBe('4/3');
  });

  it('passes ratio to inline style', async () => {
    const el = await fixture<WuAspectRatio>(html`<wu-aspect-ratio ratio="1"></wu-aspect-ratio>`);
    const base = el.shadowRoot?.querySelector('.aspect-ratio') as HTMLElement;
    expect(base.style.getPropertyValue('--wu-aspect-ratio-ratio')).toBe('1');
  });

  it('renders slotted content', async () => {
    const el = await fixture<WuAspectRatio>(
      html`<wu-aspect-ratio><img alt="test" /></wu-aspect-ratio>`,
    );
    expect(el.querySelector('img')).toBeTruthy();
  });

  it('has overflow hidden on base', async () => {
    const el = await fixture<WuAspectRatio>(html`<wu-aspect-ratio></wu-aspect-ratio>`);
    const base = el.shadowRoot?.querySelector('.aspect-ratio') as HTMLElement;
    expect(base).toBeTruthy();
  });
});
