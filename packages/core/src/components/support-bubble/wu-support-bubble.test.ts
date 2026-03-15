import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuSupportBubble } from './wu-support-bubble.js';
import './wu-support-bubble.js';

describe('wu-support-bubble', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuSupportBubble>(html`<wu-support-bubble></wu-support-bubble>`);
    expect(el.position).toBe('bottom-right');
    expect(el.label).toBe('Help');
  });

  it('renders a button with aria-label', async () => {
    const el = await fixture<WuSupportBubble>(html`<wu-support-bubble label="Chat"></wu-support-bubble>`);
    const btn = el.shadowRoot!.querySelector('button') as HTMLButtonElement;
    expect(btn.getAttribute('aria-label')).toBe('Chat');
  });

  it('emits wu-open when clicked', async () => {
    const el = await fixture<WuSupportBubble>(html`<wu-support-bubble></wu-support-bubble>`);
    const handler = vi.fn();
    el.addEventListener('wu-open', handler);
    el.shadowRoot!.querySelector('button')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('reflects position attribute', async () => {
    const el = await fixture<WuSupportBubble>(html`<wu-support-bubble position="bottom-left"></wu-support-bubble>`);
    expect(el.getAttribute('position')).toBe('bottom-left');
  });

  it('shows label text in button', async () => {
    const el = await fixture<WuSupportBubble>(html`<wu-support-bubble label="Contact Us"></wu-support-bubble>`);
    const label = el.shadowRoot!.querySelector('.label');
    expect(label?.textContent?.trim()).toBe('Contact Us');
  });
});
