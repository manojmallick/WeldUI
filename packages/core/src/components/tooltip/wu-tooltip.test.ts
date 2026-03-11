import { describe, it, expect } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-tooltip.js';
import type { WuTooltip } from './wu-tooltip.js';

describe('wu-tooltip', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuTooltip>(html`<wu-tooltip content="Hello"><button>Hover</button></wu-tooltip>`);
    expect(el.content).toBe('Hello');
    expect(el.placement).toBe('top');
  });

  it('tooltip is not visible by default', async () => {
    const el = await fixture<WuTooltip>(html`<wu-tooltip content="Hello"><button>Hover</button></wu-tooltip>`);
    const tip = el.shadowRoot!.querySelector('.tooltip')!;
    expect(tip.classList.contains('visible')).toBe(false);
  });

  it('has role="tooltip" on tooltip element', async () => {
    const el = await fixture<WuTooltip>(html`<wu-tooltip content="Hi"><span>x</span></wu-tooltip>`);
    expect(el.shadowRoot!.querySelector('[role="tooltip"]')).toBeTruthy();
  });

  it('shows tooltip on mouseenter', async () => {
    const el = await fixture<WuTooltip>(html`<wu-tooltip content="Hello" delay="0"><button>Hover</button></wu-tooltip>`);
    el.shadowRoot!.querySelector('.trigger')!.dispatchEvent(new MouseEvent('mouseenter'));
    await new Promise(r => setTimeout(r, 10));
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.tooltip')!.classList.contains('visible')).toBe(true);
  });

  it('hides tooltip on mouseleave', async () => {
    const el = await fixture<WuTooltip>(html`<wu-tooltip content="Hello" delay="0"><button>Hover</button></wu-tooltip>`);
    const trigger = el.shadowRoot!.querySelector('.trigger')!;
    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    await new Promise(r => setTimeout(r, 10));
    await elementUpdated(el);
    trigger.dispatchEvent(new MouseEvent('mouseleave'));
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.tooltip')!.classList.contains('visible')).toBe(false);
  });

  it('reflects placement attribute', async () => {
    const el = await fixture<WuTooltip>(html`<wu-tooltip content="x" placement="right"><span>x</span></wu-tooltip>`);
    expect(el.getAttribute('placement')).toBe('right');
  });
});
