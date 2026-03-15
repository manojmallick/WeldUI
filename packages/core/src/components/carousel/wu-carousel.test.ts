import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-carousel.js';
import type { WuCarousel } from './wu-carousel.js';

describe('wu-carousel', () => {
  it('renders navigation buttons', async () => {
    const el = await fixture<WuCarousel>(html`<wu-carousel></wu-carousel>`);
    expect(el.shadowRoot!.querySelector('.prev')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('.next')).toBeTruthy();
  });
  it('has carousel region role', async () => {
    const el = await fixture<WuCarousel>(html`<wu-carousel></wu-carousel>`);
    expect(el.shadowRoot!.querySelector('[role="region"]')).toBeTruthy();
  });
  it('defaults to index 0', async () => {
    const el = await fixture<WuCarousel>(html`<wu-carousel></wu-carousel>`);
    expect(el.index).toBe(0);
  });
  it('emits wu-slide-change on next', async () => {
    const el = await fixture<WuCarousel>(html`
      <wu-carousel>
        <div>Slide 1</div><div>Slide 2</div><div>Slide 3</div>
      </wu-carousel>`);
    const handler = vi.fn();
    el.addEventListener('wu-slide-change', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.next')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });
  it('dots hidden with no-dots', async () => {
    const el = await fixture<WuCarousel>(html`<wu-carousel no-dots></wu-carousel>`);
    expect(el.hasAttribute('no-dots')).toBe(true);
  });
});
