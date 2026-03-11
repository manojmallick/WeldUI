import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-accordion.js';
import type { WuAccordionItem } from './wu-accordion.js';

describe('wu-accordion-item', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuAccordionItem>(html`
      <wu-accordion-item>
        <span slot="summary">Q: What is WeldUI?</span>
        A: A component library.
      </wu-accordion-item>
    `);
    expect(el.open).toBe(false);
    expect(el.disabled).toBe(false);
  });

  it('header exists with aria-expanded=false', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item><span slot="summary">Q</span>A</wu-accordion-item>`);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('aria-expanded')).toBe('false');
  });

  it('toggles open on click', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item><span slot="summary">Q</span>A</wu-accordion-item>`);
    el.shadowRoot!.querySelector<HTMLButtonElement>('button')!.click();
    await elementUpdated(el);
    expect(el.open).toBe(true);
  });

  it('emits wu-toggle on click', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item><span slot="summary">Q</span>A</wu-accordion-item>`);
    const handler = vi.fn();
    el.addEventListener('wu-toggle', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('button')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('does not toggle when disabled', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item disabled><span slot="summary">Q</span>A</wu-accordion-item>`);
    el.shadowRoot!.querySelector<HTMLButtonElement>('button')!.click();
    await elementUpdated(el);
    expect(el.open).toBe(false);
  });

  it('reflects open attribute', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item open><span slot="summary">Q</span>A</wu-accordion-item>`);
    expect(el.hasAttribute('open')).toBe(true);
  });
});
