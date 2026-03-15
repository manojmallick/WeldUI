import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-report-builder.js';

const cols = [
  { id: 'name', label: 'Name', selected: true },
  { id: 'email', label: 'Email', selected: false },
];

describe('wu-report-builder', () => {
  it('renders column list', async () => {
    const el: any = await fixture(html`<wu-report-builder .columns=${cols}></wu-report-builder>`);
    await elementUpdated(el);
    const items = el.shadowRoot!.querySelectorAll('.column-item');
    expect(items.length).toBe(2);
  });

  it('shows selected count', async () => {
    const el: any = await fixture(html`<wu-report-builder .columns=${cols}></wu-report-builder>`);
    await elementUpdated(el);
    const count = el.shadowRoot!.querySelector('.count');
    expect(count?.textContent?.trim()).toBe('1 / 2 selected');
  });

  it('emits wu-change on toggle', async () => {
    const el: any = await fixture(html`<wu-report-builder .columns=${cols}></wu-report-builder>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const checkbox = el.shadowRoot!.querySelector('input[type="checkbox"]') as HTMLInputElement;
    checkbox.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('select all updates all items', async () => {
    const el: any = await fixture(html`<wu-report-builder .columns=${cols}></wu-report-builder>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const btn = el.shadowRoot!.querySelector('.select-all-btn') as HTMLButtonElement;
    btn.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.selected.length).toBe(2);
  });

  it('renders reorder buttons', async () => {
    const el: any = await fixture(html`<wu-report-builder .columns=${cols}></wu-report-builder>`);
    await elementUpdated(el);
    const btns = el.shadowRoot!.querySelectorAll('.reorder-btn');
    expect(btns.length).toBeGreaterThan(0);
  });
});
