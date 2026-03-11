import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-command.js';
import type { WuCommand, WuCommandItem } from './wu-command.js';

const items: WuCommandItem[] = [
  { id: '1', label: 'New File', group: 'File', shortcut: '⌘N' },
  { id: '2', label: 'Open File', group: 'File', shortcut: '⌘O' },
  { id: '3', label: 'Save', group: 'File', shortcut: '⌘S' },
  { id: '4', label: 'Preferences', group: 'Settings' },
  { id: '5', label: 'About', keywords: ['info', 'version'] },
];

describe('wu-command', () => {
  it('is hidden when not open', async () => {
    const el = await fixture<WuCommand>(html`<wu-command></wu-command>`);
    el.items = items;
    await elementUpdated(el);
    const backdrop = el.shadowRoot!.querySelector<HTMLElement>('.backdrop')!;
    expect(getComputedStyle(backdrop).display).not.toBe('flex');
  });

  it('renders items when open', async () => {
    const el = await fixture<WuCommand>(html`<wu-command open></wu-command>`);
    el.items = items;
    await el.updateComplete;
    const itemEls = el.shadowRoot!.querySelectorAll('.item');
    expect(itemEls.length).toBe(items.length);
  });

  it('filters items based on query', async () => {
    const el = await fixture<WuCommand>(html`<wu-command open></wu-command>`);
    el.items = items;
    el['_query'] = 'file';
    await el.updateComplete;
    const itemEls = el.shadowRoot!.querySelectorAll('.item');
    expect(itemEls.length).toBe(3); // New File, Open File, Open File (fuzzy includes "file")
  });

  it('shows empty state when no results', async () => {
    const el = await fixture<WuCommand>(html`<wu-command open empty-message="Nada"></wu-command>`);
    el.items = items;
    el['_query'] = 'xxxxxnonexistent';
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.empty')!.textContent!.trim()).toBe('Nada');
  });

  it('emits wu-select when item is clicked', async () => {
    const el = await fixture<WuCommand>(html`<wu-command open></wu-command>`);
    el.items = items;
    await el.updateComplete;
    const handler = vi.fn();
    el.addEventListener('wu-select', handler);
    const firstItem = el.shadowRoot!.querySelector<HTMLElement>('.item')!;
    firstItem.click();
    await el.updateComplete;
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.item.id).toBe('1');
  });

  it('closes on Escape key', async () => {
    const el = await fixture<WuCommand>(html`<wu-command open></wu-command>`);
    el.items = items;
    await elementUpdated(el);
    const backdrop = el.shadowRoot!.querySelector<HTMLElement>('.backdrop')!;
    backdrop.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await elementUpdated(el);
    expect(el.open).toBe(false);
  });
});
