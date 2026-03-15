import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-sortable.js';

const items = [
  { id: '1', label: 'Apple' },
  { id: '2', label: 'Banana' },
  { id: '3', label: 'Cherry' },
];

describe('wu-sortable', () => {
  it('renders items', async () => {
    const el: any = await fixture(html`<wu-sortable .items=${[...items]}></wu-sortable>`);
    expect(el.shadowRoot!.querySelectorAll('.item').length).toBe(3);
  });

  it('renders item labels', async () => {
    const el: any = await fixture(html`<wu-sortable .items=${[...items]}></wu-sortable>`);
    expect(el.shadowRoot!.querySelector('.content')!.textContent).toBe('Apple');
  });

  it('items are draggable', async () => {
    const el: any = await fixture(html`<wu-sortable .items=${[...items]}></wu-sortable>`);
    const li = el.shadowRoot!.querySelector('.item') as HTMLElement;
    expect(li.getAttribute('draggable')).toBe('true');
  });

  it('shows handle icon', async () => {
    const el: any = await fixture(html`<wu-sortable .items=${[...items]}></wu-sortable>`);
    expect(el.shadowRoot!.querySelector('.handle')).toBeTruthy();
  });

  it('emits wu-sort on drop', async () => {
    const el: any = await fixture(html`<wu-sortable .items=${[...items]}></wu-sortable>`);
    const handler = vi.fn();
    el.addEventListener('wu-sort', handler);
    el._draggingId = '1';
    el._drop(1);
    expect(handler).toHaveBeenCalledOnce();
  });
});
