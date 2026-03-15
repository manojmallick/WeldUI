import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuProductGallery } from './wu-product-gallery.js';
import './wu-product-gallery.js';

describe('wu-product-gallery', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuProductGallery>(html`<wu-product-gallery></wu-product-gallery>`);
    expect(el.images).toEqual([]);
  });

  it('renders main image placeholder when no images', async () => {
    const el = await fixture<WuProductGallery>(html`<wu-product-gallery></wu-product-gallery>`);
    expect(el.shadowRoot!.querySelector('.placeholder')).toBeTruthy();
  });

  it('renders thumbnails for multiple images', async () => {
    const images = ['a.jpg', 'b.jpg', 'c.jpg'];
    const el = await fixture<WuProductGallery>(html`<wu-product-gallery .images=${images}></wu-product-gallery>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelectorAll('.thumb').length).toBe(3);
  });

  it('no thumbnails for single image', async () => {
    const el = await fixture<WuProductGallery>(html`<wu-product-gallery .images=${['a.jpg']}></wu-product-gallery>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.thumbnails')).toBeNull();
  });

  it('first thumbnail has active class by default', async () => {
    const images = ['a.jpg', 'b.jpg'];
    const el = await fixture<WuProductGallery>(html`<wu-product-gallery .images=${images}></wu-product-gallery>`);
    await el.updateComplete;
    const thumbs = el.shadowRoot!.querySelectorAll('.thumb');
    expect(thumbs[0].classList.contains('active')).toBe(true);
  });
});
