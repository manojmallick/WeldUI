import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-cluster.js';
import type { WuCluster } from './wu-cluster.js';

describe('wu-cluster', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuCluster>(html`<wu-cluster></wu-cluster>`);
    expect(el.gap).toBe('sm');
    expect(el.align).toBe('center');
    expect(el.justify).toBe('start');
  });

  it('reflects gap as an attribute', async () => {
    const el = await fixture<WuCluster>(html`<wu-cluster gap="lg"></wu-cluster>`);
    expect(el.getAttribute('gap')).toBe('lg');
  });

  it('applies align and justify styles', async () => {
    const el = await fixture<WuCluster>(html`<wu-cluster align="end" justify="around"></wu-cluster>`);
    const base = el.shadowRoot?.querySelector('.cluster') as HTMLDivElement;
    expect(base.style.getPropertyValue('--wu-cluster-align').trim()).toBe('flex-end');
    expect(base.style.getPropertyValue('--wu-cluster-justify').trim()).toBe('space-around');
  });

  it('renders the base part wrapper', async () => {
    const el = await fixture<WuCluster>(html`<wu-cluster></wu-cluster>`);
    expect(el.shadowRoot?.querySelector('[part="base"]')).toBeTruthy();
  });

  it('renders slotted content', async () => {
    const el = await fixture<WuCluster>(html`<wu-cluster><span>Tag</span></wu-cluster>`);
    expect(el.textContent).toContain('Tag');
  });
});