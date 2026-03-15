import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-keyboard-shortcuts.js';
import type { WuKeyboardShortcuts } from './wu-keyboard-shortcuts.js';

describe('wu-keyboard-shortcuts', () => {
  const shortcuts = [
    { keys: ['⌘', 'K'], description: 'Command palette', group: 'Navigation' },
    { keys: ['Esc'], description: 'Close', group: 'Navigation' },
  ];

  it('renders heading', async () => {
    const el = await fixture<WuKeyboardShortcuts>(html`<wu-keyboard-shortcuts .shortcuts=${shortcuts}></wu-keyboard-shortcuts>`);
    expect(el.shadowRoot!.querySelector('.heading')?.textContent?.trim()).toBe('Keyboard shortcuts');
  });

  it('renders group heading', async () => {
    const el = await fixture<WuKeyboardShortcuts>(html`<wu-keyboard-shortcuts .shortcuts=${shortcuts}></wu-keyboard-shortcuts>`);
    expect(el.shadowRoot!.querySelector('.group-heading')?.textContent?.trim()).toBe('Navigation');
  });

  it('renders correct number of rows', async () => {
    const el = await fixture<WuKeyboardShortcuts>(html`<wu-keyboard-shortcuts .shortcuts=${shortcuts}></wu-keyboard-shortcuts>`);
    const rows = el.shadowRoot!.querySelectorAll('.row');
    expect(rows.length).toBe(2);
  });

  it('renders kbd elements for each key', async () => {
    const el = await fixture<WuKeyboardShortcuts>(html`<wu-keyboard-shortcuts .shortcuts=${shortcuts}></wu-keyboard-shortcuts>`);
    const kbds = el.shadowRoot!.querySelector('.row')!.querySelectorAll('kbd');
    expect(kbds.length).toBe(2); // ⌘ and K
  });

  it('renders description text', async () => {
    const el = await fixture<WuKeyboardShortcuts>(html`<wu-keyboard-shortcuts .shortcuts=${shortcuts}></wu-keyboard-shortcuts>`);
    const desc = el.shadowRoot!.querySelector('.desc');
    expect(desc?.textContent?.trim()).toBe('Command palette');
  });
});
