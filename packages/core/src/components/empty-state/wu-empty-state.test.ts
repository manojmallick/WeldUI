import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-empty-state.js';

describe('wu-empty-state', () => {
  it('renders with default props', async () => {
    const el = await fixture<any>(html`<wu-empty-state></wu-empty-state>`);
    expect(el.title).toBe('');
    expect(el.description).toBe('');
  });

  it('displays title when provided', async () => {
    const el = await fixture<any>(html`<wu-empty-state title="No data"></wu-empty-state>`);
    const title = el.shadowRoot!.querySelector('.title');
    expect(title).toBeTruthy();
    expect(title!.textContent!.trim()).toBe('No data');
  });

  it('displays description when provided', async () => {
    const el = await fixture<any>(html`<wu-empty-state description="Nothing to show here."></wu-empty-state>`);
    await el.updateComplete;
    expect(el.description).toBe('Nothing to show here.');
    const desc = el.shadowRoot!.querySelector('[part="description"]');
    expect(desc).toBeTruthy();
  });

  it('renders default icon slot', async () => {
    const el = await fixture<any>(html`<wu-empty-state></wu-empty-state>`);
    const icon = el.shadowRoot!.querySelector('.icon');
    expect(icon).toBeTruthy();
  });

  it('renders actions slot', async () => {
    const el = await fixture<any>(html`
      <wu-empty-state>
        <button slot="actions">Click me</button>
      </wu-empty-state>
    `);
    const actions = el.shadowRoot!.querySelector('.actions');
    expect(actions).toBeTruthy();
  });

  it('uses part attributes for styling', async () => {
    const el = await fixture<any>(html`<wu-empty-state title="Test" description="Desc"></wu-empty-state>`);
    expect(el.shadowRoot!.querySelector('[part="title"]')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('[part="description"]')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('[part="actions"]')).toBeTruthy();
  });
});
