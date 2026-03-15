import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-order-status.js';
import type { WuOrderStatus } from './wu-order-status.js';

describe('wu-order-status', () => {
  it('renders order id when provided', async () => {
    const el = await fixture<WuOrderStatus>(
      html`<wu-order-status order-id="12345"></wu-order-status>`,
    );
    const id = el.shadowRoot!.querySelector('.order-id');
    expect(id?.textContent).toContain('12345');
  });

  it('renders correct number of steps', async () => {
    const steps = [
      { label: 'A', date: '', done: true },
      { label: 'B', date: '', done: false },
    ];
    const el = await fixture<WuOrderStatus>(
      html`<wu-order-status .steps=${steps}></wu-order-status>`,
    );
    const items = el.shadowRoot!.querySelectorAll('li.step');
    expect(items.length).toBe(2);
  });

  it('applies done class to completed steps', async () => {
    const steps = [
      { label: 'A', date: '', done: true },
      { label: 'B', date: '', done: false },
    ];
    const el = await fixture<WuOrderStatus>(
      html`<wu-order-status .steps=${steps}></wu-order-status>`,
    );
    const items = el.shadowRoot!.querySelectorAll('li.step');
    expect(items[0].classList.contains('done')).toBe(true);
    expect(items[1].classList.contains('done')).toBe(false);
  });

  it('renders status badge with correct class', async () => {
    const el = await fixture<WuOrderStatus>(
      html`<wu-order-status status="shipped"></wu-order-status>`,
    );
    const badge = el.shadowRoot!.querySelector('.status-badge');
    expect(badge?.classList.contains('status-shipped')).toBe(true);
  });

  it('defaults to 4 steps', async () => {
    const el = await fixture<WuOrderStatus>(html`<wu-order-status></wu-order-status>`);
    const items = el.shadowRoot!.querySelectorAll('li.step');
    expect(items.length).toBe(4);
  });
});
