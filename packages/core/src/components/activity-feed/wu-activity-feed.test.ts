import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-activity-feed.js';
import type { WuActivityFeed } from './wu-activity-feed.js';

describe('wu-activity-feed', () => {
  const items = [
    { id: '1', actor: 'Alice', action: 'pushed', time: '2m ago' },
    { id: '2', actor: 'Bob', action: 'merged', time: '5m ago' },
  ];

  it('renders empty state when no items', async () => {
    const el = await fixture<WuActivityFeed>(html`<wu-activity-feed .items=${[]}></wu-activity-feed>`);
    expect(el.shadowRoot!.querySelector('.empty')).toBeTruthy();
  });

  it('renders correct number of items', async () => {
    const el = await fixture<WuActivityFeed>(html`<wu-activity-feed .items=${items}></wu-activity-feed>`);
    const lis = el.shadowRoot!.querySelectorAll('li.item');
    expect(lis.length).toBe(2);
  });

  it('shows heading when show-heading is set', async () => {
    const el = await fixture<WuActivityFeed>(
      html`<wu-activity-feed .items=${[]} show-heading heading="Changelog"></wu-activity-feed>`,
    );
    expect(el.shadowRoot!.querySelector('.heading')?.textContent?.trim()).toBe('Changelog');
  });

  it('renders initials when no avatarUrl', async () => {
    const el = await fixture<WuActivityFeed>(html`<wu-activity-feed .items=${items}></wu-activity-feed>`);
    const initials = el.shadowRoot!.querySelector('.initials');
    expect(initials?.textContent?.trim()).toBe('A');
  });

  it('hides heading when show-heading is false', async () => {
    const el = await fixture<WuActivityFeed>(html`<wu-activity-feed .items=${[]}></wu-activity-feed>`);
    expect(el.shadowRoot!.querySelector('.heading')).toBeNull();
  });
});
