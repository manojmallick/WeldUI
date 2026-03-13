import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-accordion.js';
import type { WuAccordionItem } from './wu-accordion.js';
import type { WuAccordion } from './wu-accordion.js';

// ── wu-accordion-item ──────────────────────────────────────────────────────

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

  it('header has aria-expanded="false" when closed', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item><span slot="summary">Q</span>A</wu-accordion-item>`);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('aria-expanded')).toBe('false');
  });

  it('header has aria-expanded="true" when open', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item open><span slot="summary">Q</span>A</wu-accordion-item>`);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('aria-expanded')).toBe('true');
  });

  it('button aria-controls matches panel id', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item><span slot="summary">Q</span>A</wu-accordion-item>`);
    const btn   = el.shadowRoot!.querySelector('button')!;
    const panel = el.shadowRoot!.querySelector('.body')!;
    expect(btn.getAttribute('aria-controls')).toBe(panel.id);
  });

  it('panel has role="region" and aria-labelledby pointing to its button', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item><span slot="summary">Q</span>A</wu-accordion-item>`);
    const btn   = el.shadowRoot!.querySelector('button')!;
    const panel = el.shadowRoot!.querySelector('.body')!;
    expect(panel.getAttribute('role')).toBe('region');
    expect(panel.getAttribute('aria-labelledby')).toBe(btn.id);
  });

  it('panel is hidden from AT when closed (aria-hidden="true")', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item><span slot="summary">Q</span>A</wu-accordion-item>`);
    const panel = el.shadowRoot!.querySelector('.body')!;
    expect(panel.getAttribute('aria-hidden')).toBe('true');
  });

  it('panel removes aria-hidden when open', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item open><span slot="summary">Q</span>A</wu-accordion-item>`);
    const panel = el.shadowRoot!.querySelector('.body')!;
    expect(panel.getAttribute('aria-hidden')).toBeNull();
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
    expect((handler.mock.calls[0][0] as CustomEvent).detail.open).toBe(true);
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

  it('chevron uses SVG (not Unicode character)', async () => {
    const el = await fixture<WuAccordionItem>(html`<wu-accordion-item><span slot="summary">Q</span>A</wu-accordion-item>`);
    const svg = el.shadowRoot!.querySelector('svg.chevron');
    expect(svg).toBeTruthy();
  });
});

// ── wu-accordion (container) ───────────────────────────────────────────────

describe('wu-accordion', () => {
  it('renders slotted items', async () => {
    const el = await fixture<WuAccordion>(html`
      <wu-accordion>
        <wu-accordion-item><span slot="summary">Q1</span>A1</wu-accordion-item>
        <wu-accordion-item><span slot="summary">Q2</span>A2</wu-accordion-item>
      </wu-accordion>
    `);
    expect(el.querySelectorAll('wu-accordion-item').length).toBe(2);
  });

  it('defaults to single=false (multiple items can be open)', async () => {
    const el = await fixture<WuAccordion>(html`<wu-accordion></wu-accordion>`);
    expect(el.single).toBe(false);
  });

  it('allows multiple items open simultaneously by default', async () => {
    const el = await fixture<WuAccordion>(html`
      <wu-accordion>
        <wu-accordion-item open><span slot="summary">Q1</span>A1</wu-accordion-item>
        <wu-accordion-item open><span slot="summary">Q2</span>A2</wu-accordion-item>
      </wu-accordion>
    `);
    const items = el.querySelectorAll<WuAccordionItem>('wu-accordion-item');
    expect(items[0].open).toBe(true);
    expect(items[1].open).toBe(true);
  });

  it('enforces single-open mode: opening one closes others', async () => {
    const el = await fixture<WuAccordion>(html`
      <wu-accordion single>
        <wu-accordion-item open><span slot="summary">Q1</span>A1</wu-accordion-item>
        <wu-accordion-item><span slot="summary">Q2</span>A2</wu-accordion-item>
        <wu-accordion-item><span slot="summary">Q3</span>A3</wu-accordion-item>
      </wu-accordion>
    `);
    const items = el.querySelectorAll<WuAccordionItem>('wu-accordion-item');

    // Open the second item
    items[1].shadowRoot!.querySelector<HTMLButtonElement>('button')!.click();
    await elementUpdated(items[1]);
    await elementUpdated(items[0]);

    expect(items[1].open).toBe(true);
    expect(items[0].open).toBe(false);
    expect(items[2].open).toBe(false);
  });

  it('does not collapse others when single is false', async () => {
    const el = await fixture<WuAccordion>(html`
      <wu-accordion>
        <wu-accordion-item open><span slot="summary">Q1</span>A1</wu-accordion-item>
        <wu-accordion-item><span slot="summary">Q2</span>A2</wu-accordion-item>
      </wu-accordion>
    `);
    const items = el.querySelectorAll<WuAccordionItem>('wu-accordion-item');

    items[1].shadowRoot!.querySelector<HTMLButtonElement>('button')!.click();
    await elementUpdated(items[1]);

    // Both should now be open
    expect(items[0].open).toBe(true);
    expect(items[1].open).toBe(true);
  });

  it('attaches single-mode listener reactively when single is set dynamically', async () => {
    const el = await fixture<WuAccordion>(html`
      <wu-accordion>
        <wu-accordion-item open><span slot="summary">Q1</span>A1</wu-accordion-item>
        <wu-accordion-item><span slot="summary">Q2</span>A2</wu-accordion-item>
      </wu-accordion>
    `);
    const items = el.querySelectorAll<WuAccordionItem>('wu-accordion-item');

    // Enable single mode after creation
    el.single = true;
    await elementUpdated(el);

    items[1].shadowRoot!.querySelector<HTMLButtonElement>('button')!.click();
    await elementUpdated(items[1]);
    await elementUpdated(items[0]);

    expect(items[1].open).toBe(true);
    expect(items[0].open).toBe(false);
  });
});

