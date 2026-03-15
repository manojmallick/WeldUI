import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-split-pane.js';

describe('wu-split-pane', () => {
  it('renders primary and secondary slots', async () => {
    const el = await fixture(html`
      <wu-split-pane>
        <div slot="primary">Left</div>
        <div slot="secondary">Right</div>
      </wu-split-pane>`);
    expect(el.shadowRoot!.querySelector('[name="primary"]')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('[name="secondary"]')).toBeTruthy();
  });

  it('defaults to horizontal orientation', async () => {
    const el: any = await fixture(html`<wu-split-pane></wu-split-pane>`);
    expect(el.orientation).toBe('horizontal');
  });

  it('renders divider element', async () => {
    const el = await fixture(html`<wu-split-pane></wu-split-pane>`);
    expect(el.shadowRoot!.querySelector('.divider')).toBeTruthy();
  });

  it('applies initial size to primary pane', async () => {
    const el: any = await fixture(html`<wu-split-pane initial-size="300"></wu-split-pane>`);
    await elementUpdated(el);
    expect(el._size).toBe(300);
  });

  it('emits wu-resize during drag', async () => {
    const el: any = await fixture(html`<wu-split-pane></wu-split-pane>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-resize', handler);
    const divider = el.shadowRoot!.querySelector('.divider') as HTMLElement;
    divider.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 1, clientX: 250, bubbles: true }));
    divider.dispatchEvent(new PointerEvent('pointermove', { pointerId: 1, clientX: 350, bubbles: true }));
    divider.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1, bubbles: true }));
    expect(handler).toHaveBeenCalled();
  });
});
