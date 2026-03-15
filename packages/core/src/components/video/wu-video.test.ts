import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-video.js';

describe('wu-video', () => {
  it('renders video element', async () => {
    const el = await fixture(html`<wu-video src="/test.mp4"></wu-video>`);
    expect(el.shadowRoot!.querySelector('video')).toBeTruthy();
  });

  it('sets src on video element', async () => {
    const el = await fixture(html`<wu-video src="/my-video.mp4"></wu-video>`);
    const video = el.shadowRoot!.querySelector('video')!;
    expect(video.src).toContain('my-video.mp4');
  });

  it('renders play button', async () => {
    const el = await fixture(html`<wu-video></wu-video>`);
    expect(el.shadowRoot!.querySelector('.play-btn')).toBeTruthy();
  });

  it('renders progress bar', async () => {
    const el = await fixture(html`<wu-video></wu-video>`);
    expect(el.shadowRoot!.querySelector('.progress')).toBeTruthy();
  });

  it('defaults to paused state', async () => {
    const el = await fixture<any>(html`<wu-video></wu-video>`);
    expect(el.paused).toBe(true);
  });
});
