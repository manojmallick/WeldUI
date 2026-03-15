import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-kanban.js';

describe('wu-kanban', () => {
  it('renders board region', async () => {
    const el = await fixture(html`<wu-kanban></wu-kanban>`);
    expect(el.shadowRoot!.querySelector('[role="region"]')).toBeTruthy();
  });
});

describe('wu-kanban-column', () => {
  const cards = [{ id: '1', title: 'Fix bug' }, { id: '2', title: 'Write tests' }];

  it('renders column label', async () => {
    const el: any = await fixture(html`<wu-kanban-column label="In Progress" .cards=${cards}></wu-kanban-column>`);
    expect(el.shadowRoot!.querySelector('.header')!.textContent).toContain('In Progress');
  });

  it('renders card count', async () => {
    const el: any = await fixture(html`<wu-kanban-column .cards=${cards}></wu-kanban-column>`);
    expect(el.shadowRoot!.querySelector('.count')!.textContent!.trim()).toBe('2');
  });

  it('renders cards', async () => {
    const el: any = await fixture(html`<wu-kanban-column .cards=${cards}></wu-kanban-column>`);
    expect(el.shadowRoot!.querySelectorAll('.card').length).toBe(2);
  });

  it('cards are draggable', async () => {
    const el: any = await fixture(html`<wu-kanban-column .cards=${cards}></wu-kanban-column>`);
    const card = el.shadowRoot!.querySelector('.card') as HTMLElement;
    expect(card.getAttribute('draggable')).toBe('true');
  });
});
