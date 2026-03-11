import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-popover.js';
import type { WuPopover } from './wu-popover.js';

describe('wu-popover', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuPopover>(html`
      <wu-popover>
        <wu-button slot="trigger">Open</wu-button>
        <p>Content</p>
      </wu-popover>
    `);
    expect(el.open).toBe(false);
    expect(el.placement).toBe('bottom');
  });

  it('popover is closed by default', async () => {
    const el = await fixture<WuPopover>(html`<wu-popover><wu-button slot="trigger">T</wu-button>Content</wu-popover>`);
    const pop = el.shadowRoot!.querySelector('.popover')!;
    expect(pop.classList.contains('open')).toBe(false);
  });

  it('opens when trigger is clicked', async () => {
    const el = await fixture<WuPopover>(html`<wu-popover><wu-button slot="trigger">T</wu-button>Content</wu-popover>`);
    el.shadowRoot!.querySelector<HTMLElement>('.trigger')!.click();
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.popover')!.classList.contains('open')).toBe(true);
  });

  it('emits wu-open on open', async () => {
    const el = await fixture<WuPopover>(html`<wu-popover><wu-button slot="trigger">T</wu-button>Content</wu-popover>`);
    const handler = vi.fn();
    el.addEventListener('wu-open', handler);
    el.shadowRoot!.querySelector<HTMLElement>('.trigger')!.click();
    await elementUpdated(el);
    expect(handler).toHaveBeenCalledOnce();
  });

  it('reflects placement attribute', async () => {
    const el = await fixture<WuPopover>(html`<wu-popover placement="top"><span slot="trigger">T</span>Content</wu-popover>`);
    expect(el.getAttribute('placement')).toBe('top');
  });
});
