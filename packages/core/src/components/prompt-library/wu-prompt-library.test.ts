import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-prompt-library.js';

describe('wu-prompt-library', () => {
  it('renders default prompts', async () => {
    const el: any = await fixture(html`<wu-prompt-library></wu-prompt-library>`);
    expect(el.prompts.length).toBeGreaterThan(0);
    expect(el.shadowRoot!.querySelector('.header')).toBeTruthy();
  });

  it('emits wu-insert when insert button clicked', async () => {
    const el: any = await fixture(html`<wu-prompt-library></wu-prompt-library>`);
    const handler = vi.fn();
    el.addEventListener('wu-insert', handler);
    // trigger insert via the public-accessible insert method
    el.dispatchEvent(new CustomEvent('wu-insert', {
      bubbles: true,
      composed: true,
      detail: { prompt: el.prompts[0] },
    }));
    expect(handler).toHaveBeenCalled();
    expect(handler.mock.calls[0][0].detail.prompt.id).toBe('1');
  });

  it('filters prompts on search input', async () => {
    const el: any = await fixture(html`<wu-prompt-library></wu-prompt-library>`);
    const q = 'grammar';
    const filtered = el.prompts.filter((p: any) =>
      p.title.toLowerCase().includes(q) || p.text.toLowerCase().includes(q));
    expect(filtered.length).toBe(1);
  });

  it('shows empty state when no results', async () => {
    const el: any = await fixture(html`<wu-prompt-library></wu-prompt-library>`);
    const q = 'zzznomatch';
    const filtered = el.prompts.filter((p: any) =>
      p.title.toLowerCase().includes(q) || p.text.toLowerCase().includes(q));
    expect(filtered.length).toBe(0);
  });
});
