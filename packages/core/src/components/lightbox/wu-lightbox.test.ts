import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-lightbox.js';

const images = [
  { src: 'https://picsum.photos/800/600?1', alt: 'Image 1', caption: 'First photo' },
  { src: 'https://picsum.photos/800/600?2', alt: 'Image 2' },
];

describe('wu-lightbox', () => {
  it('is hidden by default', async () => {
    const el = await fixture(html`<wu-lightbox></wu-lightbox>`);
    expect(el.shadowRoot!.querySelector('.backdrop')!.hasAttribute('hidden')).toBe(true);
  });

  it('shows backdrop when open', async () => {
    const el: any = await fixture(html`<wu-lightbox .images=${images} .open=${true}></wu-lightbox>`);
    expect(el.shadowRoot!.querySelector('.backdrop')!.hasAttribute('hidden')).toBe(false);
  });

  it('renders image', async () => {
    const el: any = await fixture(html`<wu-lightbox .images=${images} .open=${true}></wu-lightbox>`);
    expect(el.shadowRoot!.querySelector('img')!.src).toContain('picsum');
  });

  it('advances to next image', async () => {
    const el: any = await fixture(html`<wu-lightbox .images=${images} .open=${true} .index=${0}></wu-lightbox>`);
    el._next();
    expect(el.index).toBe(1);
  });

  it('emits wu-close on close', async () => {
    const el: any = await fixture(html`<wu-lightbox .images=${images} .open=${true}></wu-lightbox>`);
    const handler = vi.fn();
    el.addEventListener('wu-close', handler);
    el.close();
    expect(handler).toHaveBeenCalledOnce();
  });
});
