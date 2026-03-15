import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-audio.js';

describe('wu-audio', () => {
  it('renders player region', async () => {
    const el = await fixture(html`<wu-audio></wu-audio>`);
    const region = el.shadowRoot!.querySelector('[role="region"]');
    expect(region).toBeTruthy();
  });

  it('renders play button', async () => {
    const el = await fixture(html`<wu-audio></wu-audio>`);
    const btn = el.shadowRoot!.querySelector('.ctrl-btn');
    expect(btn).toBeTruthy();
    expect((btn as HTMLElement).getAttribute('aria-label')).toBe('Play');
  });

  it('renders mute button', async () => {
    const el = await fixture(html`<wu-audio></wu-audio>`);
    const btn = el.shadowRoot!.querySelector('.mute-btn');
    expect(btn).toBeTruthy();
  });

  it('renders progress element', async () => {
    const el = await fixture(html`<wu-audio></wu-audio>`);
    const prog = el.shadowRoot!.querySelector('progress');
    expect(prog).toBeTruthy();
  });

  it('reflects src attribute', async () => {
    const el: any = await fixture(html`<wu-audio src="test.mp3"></wu-audio>`);
    expect(el.src).toBe('test.mp3');
  });
});
