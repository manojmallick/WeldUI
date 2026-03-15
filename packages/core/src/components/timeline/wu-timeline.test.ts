import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-timeline.js';
import type { WuTimeline, WuTimelineItem } from './wu-timeline.js';

describe('wu-timeline', () => {
  it('renders slot', async () => {
    const el = await fixture<WuTimeline>(html`<wu-timeline><wu-timeline-item title="Step 1"></wu-timeline-item></wu-timeline>`);
    expect(el.shadowRoot!.querySelector('.timeline')).toBeTruthy();
  });
  it('timeline-item renders title', async () => {
    const el = await fixture<WuTimelineItem>(html`<wu-timeline-item title="Deployed"></wu-timeline-item>`);
    expect(el.shadowRoot!.querySelector('.title')?.textContent?.trim()).toBe('Deployed');
  });
  it('timeline-item renders meta', async () => {
    const el = await fixture<WuTimelineItem>(html`<wu-timeline-item title="A" meta="2 hours ago"></wu-timeline-item>`);
    expect(el.shadowRoot!.querySelector('.meta')?.textContent?.trim()).toBe('2 hours ago');
  });
  it('timeline-item reflects status attribute', async () => {
    const el = await fixture<WuTimelineItem>(html`<wu-timeline-item status="success"></wu-timeline-item>`);
    expect(el.getAttribute('status')).toBe('success');
  });
  it('timeline-item default status is default', async () => {
    const el = await fixture<WuTimelineItem>(html`<wu-timeline-item></wu-timeline-item>`);
    expect(el.status).toBe('default');
  });
});
