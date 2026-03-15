import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-changelog.js';
import type { WuChangelog } from './wu-changelog.js';

describe('wu-changelog', () => {
  const entries = [
    { version: 'v2.0', date: 'Jan 1', changes: [{ type: 'added' as const, text: 'New feature' }] },
    { version: 'v1.0', date: 'Dec 1', changes: [{ type: 'fixed' as const, text: 'Bug fix' }] },
  ];

  it('renders empty state when no entries', async () => {
    const el = await fixture<WuChangelog>(html`<wu-changelog .entries=${[]}></wu-changelog>`);
    expect(el.shadowRoot!.querySelector('.empty')).toBeTruthy();
  });

  it('renders correct number of sections', async () => {
    const el = await fixture<WuChangelog>(html`<wu-changelog .entries=${entries}></wu-changelog>`);
    const sections = el.shadowRoot!.querySelectorAll('section.entry');
    expect(sections.length).toBe(2);
  });

  it('renders version string', async () => {
    const el = await fixture<WuChangelog>(html`<wu-changelog .entries=${entries}></wu-changelog>`);
    const version = el.shadowRoot!.querySelector('.version');
    expect(version?.textContent?.trim()).toBe('v2.0');
  });

  it('renders badge with correct type class', async () => {
    const el = await fixture<WuChangelog>(html`<wu-changelog .entries=${entries}></wu-changelog>`);
    const badge = el.shadowRoot!.querySelector('.badge');
    expect(badge?.classList.contains('type-added')).toBe(true);
  });

  it('renders change text', async () => {
    const el = await fixture<WuChangelog>(html`<wu-changelog .entries=${entries}></wu-changelog>`);
    const text = el.shadowRoot!.querySelector('.change-text');
    expect(text?.textContent?.trim()).toBe('New feature');
  });
});
