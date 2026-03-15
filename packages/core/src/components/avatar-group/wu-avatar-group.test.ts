import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-avatar-group.js';
import type { WuAvatarGroup } from './wu-avatar-group.js';

describe('wu-avatar-group', () => {
  it('renders group container', async () => {
    const el = await fixture<WuAvatarGroup>(html`<wu-avatar-group></wu-avatar-group>`);
    expect(el.shadowRoot!.querySelector('.group')).toBeTruthy();
  });
  it('shows overflow badge when total > max', async () => {
    const el = await fixture<WuAvatarGroup>(html`<wu-avatar-group max="3" total="10"></wu-avatar-group>`);
    const overflow = el.shadowRoot!.querySelector('.overflow');
    expect(overflow?.textContent?.trim()).toBe('+7');
  });
  it('does not show overflow when total <= max', async () => {
    const el = await fixture<WuAvatarGroup>(html`<wu-avatar-group max="5" total="3"></wu-avatar-group>`);
    expect(el.shadowRoot!.querySelector('.overflow')).toBeFalsy();
  });
  it('has accessible label', async () => {
    const el = await fixture<WuAvatarGroup>(html`<wu-avatar-group></wu-avatar-group>`);
    expect(el.shadowRoot!.querySelector('[aria-label]')).toBeTruthy();
  });
});
