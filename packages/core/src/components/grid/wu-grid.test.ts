import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-grid.js';
import type { WuGrid } from './wu-grid.js';

describe('wu-grid', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuGrid>(html`<wu-grid></wu-grid>`);
    expect(el.columns).toBe(3);
    expect(el.gap).toBe('md');
    expect(el.minItemWidth).toBe('16rem');
    expect(el.autoFit).toBe(false);
  });

  it('reflects numeric columns as an attribute', async () => {
    const el = await fixture<WuGrid>(html`<wu-grid columns="4"></wu-grid>`);
    expect(el.getAttribute('columns')).toBe('4');
  });

  it('reflects auto-fit as an attribute', async () => {
    const el = await fixture<WuGrid>(html`<wu-grid auto-fit></wu-grid>`);
    expect(el.hasAttribute('auto-fit')).toBe(true);
  });

  it('applies grid variables to the base wrapper', async () => {
    const el = await fixture<WuGrid>(html`<wu-grid columns="5" min-item-width="12rem"></wu-grid>`);
    const base = el.shadowRoot?.querySelector('.grid') as HTMLDivElement;
    expect(base.style.getPropertyValue('--wu-grid-columns').trim()).toBe('5');
    expect(base.style.getPropertyValue('--wu-grid-min-item-width').trim()).toBe('12rem');
  });

  it('renders slotted content', async () => {
    const el = await fixture<WuGrid>(html`<wu-grid><div>Cell</div></wu-grid>`);
    expect(el.textContent).toContain('Cell');
  });
});