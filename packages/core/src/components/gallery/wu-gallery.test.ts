import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-gallery.js';

const imgs = [
  { src: 'a.jpg', alt: 'A' },
  { src: 'b.jpg', alt: 'B' },
  { src: 'c.jpg', alt: 'C' },
];

describe('wu-gallery', () => {
  it('renders thumbnails', async () => {
    const el: any = await fixture(html`<wu-gallery .images=${imgs}></wu-gallery>`);
    expect(el.shadowRoot!.querySelectorAll('.thumb').length).toBe(3);
  });

  it('emits wu-image-click on thumb click', async () => {
    const el: any = await fixture(html`<wu-gallery .images=${imgs}></wu-gallery>`);
    const handler = vi.fn();
    el.addEventListener('wu-image-click', handler);
    el.shadowRoot!.querySelector('.thumb')!.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.index).toBe(0);
  });

  it('shows images with alt text', async () => {
    const el: any = await fixture(html`<wu-gallery .images=${imgs}></wu-gallery>`);
    const img = el.shadowRoot!.querySelector('img') as HTMLImageElement;
    expect(img.alt).toBe('A');
  });

  it('accepts cols prop', async () => {
    const el: any = await fixture(html`<wu-gallery .images=${imgs} .cols=${4}></wu-gallery>`);
    expect(el.cols).toBe(4);
  });

  it('renders empty grid with no images', async () => {
    const el: any = await fixture(html`<wu-gallery></wu-gallery>`);
    expect(el.shadowRoot!.querySelectorAll('.thumb').length).toBe(0);
  });
});
