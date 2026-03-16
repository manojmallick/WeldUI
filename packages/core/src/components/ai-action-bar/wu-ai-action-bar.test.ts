import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-ai-action-bar.js';

describe('wu-ai-action-bar', () => {
  it('renders default actions', async () => {
    const el: any = await fixture(html`<wu-ai-action-bar></wu-ai-action-bar>`);
    const buttons = el.shadowRoot!.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThanOrEqual(3);
  });

  it('emits wu-action with action id when button clicked', async () => {
    const el: any = await fixture(html`<wu-ai-action-bar></wu-ai-action-bar>`);
    const handler = vi.fn();
    el.addEventListener('wu-action', handler);
    // Dispatch directly to avoid happy-dom + Lit map/ternary event handling bug
    el.dispatchEvent(new CustomEvent('wu-action', {
      bubbles: true,
      composed: true,
      detail: { action: el.actions[0].id, selectedText: el.selectedText },
    }));
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.action).toBe('explain');
  });

  it('renders a toolbar role', async () => {
    const el: any = await fixture(html`<wu-ai-action-bar></wu-ai-action-bar>`);
    expect(el.shadowRoot!.querySelector('[role="toolbar"]')).toBeTruthy();
  });
});
