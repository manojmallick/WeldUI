import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-typing-users.js';

describe('wu-typing-users', () => {
  it('shows nothing with empty users', async () => {
    const el: any = await fixture(html`<wu-typing-users .users=${[]}></wu-typing-users>`);
    expect(el.shadowRoot!.querySelector('[role="status"]')!.textContent).toBe('');
  });

  it('shows single user typing', async () => {
    const el: any = await fixture(html`<wu-typing-users .users=${['Alice']}></wu-typing-users>`);
    expect(el.shadowRoot!.querySelector('[role="status"]')!.textContent).toContain('Alice is typing');
  });

  it('shows two users typing', async () => {
    const el: any = await fixture(html`<wu-typing-users .users=${['Alice','Bob']}></wu-typing-users>`);
    const text = el.shadowRoot!.querySelector('[role="status"]')!.textContent;
    expect(text).toContain('Alice');
    expect(text).toContain('Bob');
  });

  it('shows overflow count for many users', async () => {
    const el: any = await fixture(html`<wu-typing-users .users=${['Alice','Bob','Carol','Dave']}></wu-typing-users>`);
    const text = el.shadowRoot!.querySelector('[role="status"]')!.textContent;
    expect(text).toContain('2 others');
  });
});
