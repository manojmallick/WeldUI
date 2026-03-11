import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-tabs.js';
import type { WuTabs, WuTab } from './wu-tabs.js';

describe('wu-tabs', () => {
  const tabFixture = () => fixture<WuTabs>(html`
    <wu-tabs>
      <wu-tab slot="tabs" panel="a">Tab A</wu-tab>
      <wu-tab slot="tabs" panel="b">Tab B</wu-tab>
      <wu-tab slot="tabs" panel="c" disabled>Tab C</wu-tab>
      <wu-tab-panel name="a">Panel A</wu-tab-panel>
      <wu-tab-panel name="b">Panel B</wu-tab-panel>
      <wu-tab-panel name="c">Panel C</wu-tab-panel>
    </wu-tabs>
  `);

  it('renders tab list and panels', async () => {
    const el = await tabFixture();
    expect(el.querySelectorAll('wu-tab').length).toBe(3);
    expect(el.querySelectorAll('wu-tab-panel').length).toBe(3);
  });

  it('activates first non-disabled tab by default', async () => {
    const el = await tabFixture();
    await elementUpdated(el);
    const tabs = Array.from(el.querySelectorAll<WuTab>('wu-tab'));
    expect(tabs[0].active).toBe(true);
    expect(tabs[1].active).toBe(false);
  });

  it('reflects orientation attribute', async () => {
    const el = await fixture<WuTabs>(html`
      <wu-tabs orientation="vertical">
        <wu-tab slot="tabs" panel="a">A</wu-tab>
        <wu-tab-panel name="a">content</wu-tab-panel>
      </wu-tabs>
    `);
    expect(el.getAttribute('orientation')).toBe('vertical');
  });

  it('emits wu-tab-change when a tab is clicked', async () => {
    const el = await tabFixture();
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-tab-change', handler);
    const tabB = el.querySelectorAll<WuTab>('wu-tab')[1];
    tabB.shadowRoot!.querySelector<HTMLButtonElement>('button')!.click();
    await elementUpdated(el);
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.panel).toBe('b');
  });

  it('does not emit wu-tab-change for disabled tab', async () => {
    const el = await tabFixture();
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-tab-change', handler);
    const tabC = el.querySelectorAll<WuTab>('wu-tab')[2]; // disabled
    tabC.shadowRoot?.querySelector<HTMLButtonElement>('button')?.click();
    await elementUpdated(el);
    expect(handler).not.toHaveBeenCalled();
  });
});
