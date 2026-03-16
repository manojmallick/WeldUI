import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-geofence.js';

describe('wu-geofence', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-geofence></wu-geofence>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-geofence></wu-geofence>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-geofence></wu-geofence>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-geofence label="Test"></wu-geofence>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-geofence value="Hello"></wu-geofence>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
