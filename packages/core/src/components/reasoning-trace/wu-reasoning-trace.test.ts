import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-reasoning-trace.js';

describe('wu-reasoning-trace', () => {
  it('renders collapsed by default', async () => {
    const el: any = await fixture(html`<wu-reasoning-trace .steps=${['Step 1']}></wu-reasoning-trace>`);
    expect(el.open).toBe(false);
  });

  it('toggles open on header click', async () => {
    const el: any = await fixture(html`<wu-reasoning-trace .steps=${['Step 1', 'Step 2']}></wu-reasoning-trace>`);
    el.shadowRoot!.querySelector('.header')!.click();
    await el.updateComplete;
    expect(el.open).toBe(true);
  });

  it('shows step count in header', async () => {
    const el: any = await fixture(html`<wu-reasoning-trace .steps=${['A', 'B', 'C']}></wu-reasoning-trace>`);
    const title = el.shadowRoot!.querySelector('.title');
    expect(title!.textContent).toContain('3');
  });

  it('shows steps when open', async () => {
    const el: any = await fixture(html`<wu-reasoning-trace .steps=${['Step 1', 'Step 2']} open></wu-reasoning-trace>`);
    const items = el.shadowRoot!.querySelectorAll('.step');
    expect(items.length).toBe(2);
  });
});
