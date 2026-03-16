import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-user-cursor.js';

describe('wu-user-cursor', () => {
  it('renders cursor with name label', async () => {
    const el: any = await fixture(html`<wu-user-cursor .name=${'Alice'} .color=${'#3b82f6'} .x=${50} .y=${50}></wu-user-cursor>`);
    expect(el.name).toBe('Alice');
    expect(el.shadowRoot!.querySelector('.cursor')).toBeTruthy();
  });

  it('positions cursor at x/y', async () => {
    const el: any = await fixture(html`<wu-user-cursor name="Bob" x="100" y="200"></wu-user-cursor>`);
    const cursor = el.shadowRoot!.querySelector('.cursor') as HTMLElement;
    expect(cursor!.style.left).toBe('100px');
    expect(cursor!.style.top).toBe('200px');
  });

  it('renders SVG pointer', async () => {
    const el: any = await fixture(html`<wu-user-cursor></wu-user-cursor>`);
    expect(el.shadowRoot!.querySelector('svg')).toBeTruthy();
  });
});
