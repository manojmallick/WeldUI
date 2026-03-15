import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-tree.js';

describe('wu-tree', () => {
  it('renders tree role', async () => {
    const el = await fixture(html`<wu-tree></wu-tree>`);
    expect(el.shadowRoot!.querySelector('[role="tree"]')).toBeTruthy();
  });

  it('renders tree-item label', async () => {
    const el = await fixture(html`<wu-tree-item label="Documents"></wu-tree-item>`);
    expect(el.shadowRoot!.querySelector('.label')!.textContent).toBe('Documents');
  });

  it('expands on toggle click', async () => {
    const item: any = await fixture(html`
      <wu-tree-item label="Folder">
        <wu-tree-item label="File"></wu-tree-item>
      </wu-tree-item>`);
    await elementUpdated(item);
    const toggle = item.shadowRoot!.querySelector('.toggle') as HTMLElement;
    toggle?.click();
    await elementUpdated(item);
    expect(item.expanded).toBe(true);
  });

  it('emits wu-select when row clicked', async () => {
    const el: any = await fixture(html`<wu-tree-item label="Doc"></wu-tree-item>`);
    const handler = vi.fn();
    el.addEventListener('wu-select', handler);
    el.shadowRoot!.querySelector('.row')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('reflects selected attribute', async () => {
    const el: any = await fixture(html`<wu-tree-item label="Node"></wu-tree-item>`);
    el.selected = true;
    await elementUpdated(el);
    expect(el.hasAttribute('selected')).toBe(true);
  });
});
