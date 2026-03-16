import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-collaborative-form.js';

describe('wu-collaborative-form', () => {
  it('renders default fields', async () => {
    const el: any = await fixture(html`<wu-collaborative-form></wu-collaborative-form>`);
    const fields = el.shadowRoot!.querySelectorAll('.field');
    expect(fields.length).toBeGreaterThan(0);
  });

  it('shows lock badge on locked field', async () => {
    const el: any = await fixture(html`
      <wu-collaborative-form .fields=${[
        { name: 'title', label: 'Title', type: 'text', lockedBy: 'Alice' }
      ]}></wu-collaborative-form>
    `);
    const badge = el.shadowRoot!.querySelector('.lock-badge');
    expect(badge).toBeTruthy();
    expect(badge!.textContent).toContain('Alice');
  });

  it('sets readonly on locked input', async () => {
    const el: any = await fixture(html`
      <wu-collaborative-form .fields=${[
        { name: 'title', label: 'Title', type: 'text', lockedBy: 'Bob' }
      ]}></wu-collaborative-form>
    `);
    const input = el.shadowRoot!.querySelector('input');
    expect(input!.readOnly).toBe(true);
  });
});
