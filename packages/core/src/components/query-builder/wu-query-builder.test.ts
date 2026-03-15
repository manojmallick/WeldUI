import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-query-builder.js';
import type { WuQueryBuilder } from './wu-query-builder.js';

describe('wu-query-builder', () => {
  const fields = [
    { id: 'name', label: 'Name', type: 'string' as const },
    { id: 'age', label: 'Age', type: 'number' as const },
  ];

  it('renders empty message when no rules', async () => {
    const el = await fixture<WuQueryBuilder>(html`<wu-query-builder .fields=${fields}></wu-query-builder>`);
    expect(el.shadowRoot!.querySelector('.empty')).toBeTruthy();
  });

  it('renders initial rules', async () => {
    const rules = [{ id: '1', field: 'name', operator: 'equals', value: 'Alice' }];
    const el = await fixture<WuQueryBuilder>(html`<wu-query-builder .fields=${fields} .rules=${rules}></wu-query-builder>`);
    expect(el.shadowRoot!.querySelectorAll('.rule').length).toBe(1);
  });

  it('adds a rule on add button click', async () => {
    const el = await fixture<WuQueryBuilder>(html`<wu-query-builder .fields=${fields}></wu-query-builder>`);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.add-btn')!.click();
    await el.updateComplete;
    expect(el.shadowRoot!.querySelectorAll('.rule').length).toBe(1);
  });

  it('emits wu-change when adding a rule', async () => {
    const el = await fixture<WuQueryBuilder>(html`<wu-query-builder .fields=${fields}></wu-query-builder>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.add-btn')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('removes rule on remove button click', async () => {
    const rules = [{ id: '1', field: 'name', operator: 'equals', value: '' }];
    const el = await fixture<WuQueryBuilder>(html`<wu-query-builder .fields=${fields} .rules=${rules}></wu-query-builder>`);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.remove-btn')!.click();
    await el.updateComplete;
    expect(el.shadowRoot!.querySelectorAll('.rule').length).toBe(0);
  });
});
