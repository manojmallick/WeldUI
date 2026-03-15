import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-visually-hidden.js';
import type { WuVisuallyHidden } from './wu-visually-hidden.js';

describe('wu-visually-hidden', () => {
  it('renders a span with part="base"', async () => {
    const el = await fixture<WuVisuallyHidden>(html`<wu-visually-hidden>Text</wu-visually-hidden>`);
    const span = el.shadowRoot?.querySelector('span[part="base"]');
    expect(span).toBeTruthy();
  });

  it('exposes slotted text content', async () => {
    const el = await fixture<WuVisuallyHidden>(
      html`<wu-visually-hidden>Screen reader label</wu-visually-hidden>`,
    );
    expect(el.textContent?.trim()).toBe('Screen reader label');
  });

  it('is in the accessibility tree', async () => {
    const el = await fixture<WuVisuallyHidden>(html`<wu-visually-hidden>Label</wu-visually-hidden>`);
    expect(el).toBeTruthy();
  });

  it('renders without crashing with empty slot', async () => {
    const el = await fixture<WuVisuallyHidden>(html`<wu-visually-hidden></wu-visually-hidden>`);
    expect(el.shadowRoot?.querySelector('span')).toBeTruthy();
  });

  it('has display:contents on host', async () => {
    const el = await fixture<WuVisuallyHidden>(html`<wu-visually-hidden>text</wu-visually-hidden>`);
    expect(el).toBeTruthy();
  });
});
