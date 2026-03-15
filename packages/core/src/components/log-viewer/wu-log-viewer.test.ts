import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-log-viewer.js';
import type { WuLogViewer } from './wu-log-viewer.js';

describe('wu-log-viewer', () => {
  const logs = [
    { level: 'info' as const, message: 'Started', timestamp: '10:00' },
    { level: 'error' as const, message: 'Crash', timestamp: '10:01' },
  ];

  it('renders empty state', async () => {
    const el = await fixture<WuLogViewer>(html`<wu-log-viewer .logs=${[]}></wu-log-viewer>`);
    expect(el.shadowRoot!.querySelector('.empty')).toBeTruthy();
  });

  it('renders correct number of lines', async () => {
    const el = await fixture<WuLogViewer>(html`<wu-log-viewer .logs=${logs}></wu-log-viewer>`);
    expect(el.shadowRoot!.querySelectorAll('.line').length).toBe(2);
  });

  it('applies level class to each line', async () => {
    const el = await fixture<WuLogViewer>(html`<wu-log-viewer .logs=${logs}></wu-log-viewer>`);
    const lines = el.shadowRoot!.querySelectorAll('.line');
    expect(lines[0].classList.contains('level-info')).toBe(true);
    expect(lines[1].classList.contains('level-error')).toBe(true);
  });

  it('renders timestamp when provided', async () => {
    const el = await fixture<WuLogViewer>(html`<wu-log-viewer .logs=${logs}></wu-log-viewer>`);
    const ts = el.shadowRoot!.querySelector('.ts');
    expect(ts?.textContent?.trim()).toBe('10:00');
  });

  it('has role log on container', async () => {
    const el = await fixture<WuLogViewer>(html`<wu-log-viewer .logs=${[]}></wu-log-viewer>`);
    expect(el.shadowRoot!.querySelector('.container')?.getAttribute('role')).toBe('log');
  });
});
