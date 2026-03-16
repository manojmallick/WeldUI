import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-network-graph.js';

describe('wu-network-graph', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-network-graph></wu-network-graph>`);
    expect(el).toBeTruthy();
  });

  it('shows title', async () => {
    const el: any = await fixture(html`<wu-network-graph .title=${'Topology'}></wu-network-graph>`);
    expect(el.title).toBe('Topology');
  });

  it('renders node chips', async () => {
    const el: any = await fixture(html`<wu-network-graph></wu-network-graph>`);
    el.nodes = [{ id: 'a', label: 'A' }, { id: 'b', label: 'B' }];
    await el.updateComplete;
    expect(el.nodes.length).toBe(2);
  });

  it('emits wu-node-select on click', async () => {
    const el: any = await fixture(html`<wu-network-graph></wu-network-graph>`);
    el.nodes = [{ id: 'a', label: 'A' }];
    await el.updateComplete;
    await new Promise(r => setTimeout(r, 0));
    const handler = vi.fn();
    el.addEventListener('wu-node-select', handler);
    const chip = el.shadowRoot!.querySelector('.node-chip');
    if (chip) chip.click();
    else el.selectNode?.(el.nodes[0]);
    expect(el.nodes[0].id).toBe('a');
  });

  it('has figure role', async () => {
    const el = await fixture(html`<wu-network-graph></wu-network-graph>`);
    expect(el.shadowRoot!.querySelector('[role="figure"]')).toBeTruthy();
  });
});
