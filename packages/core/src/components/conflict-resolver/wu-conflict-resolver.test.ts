import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-conflict-resolver.js';

describe('wu-conflict-resolver', () => {
  it('renders mine and theirs panes', async () => {
    const el: any = await fixture(html`<wu-conflict-resolver mine-content="A" theirs-content="B"></wu-conflict-resolver>`);
    const panes = el.shadowRoot!.querySelectorAll('.pane');
    expect(panes.length).toBe(2);
  });

  it('emits wu-resolve with winner=mine when keep-mine clicked', async () => {
    const el: any = await fixture(html`<wu-conflict-resolver mine-content="A" theirs-content="B"></wu-conflict-resolver>`);
    const handler = vi.fn();
    el.addEventListener('wu-resolve', handler);
    const buttons = el.shadowRoot!.querySelectorAll('button');
    const keepMine = buttons[buttons.length - 1];
    keepMine.click();
    expect(handler.mock.calls[0][0].detail.winner).toBe('mine');
  });

  it('emits wu-resolve with winner=theirs', async () => {
    const el: any = await fixture(html`<wu-conflict-resolver mine-content="A" theirs-content="B"></wu-conflict-resolver>`);
    const handler = vi.fn();
    el.addEventListener('wu-resolve', handler);
    el.shadowRoot!.querySelectorAll('button')[0].click();
    expect(handler.mock.calls[0][0].detail.winner).toBe('theirs');
  });
});
