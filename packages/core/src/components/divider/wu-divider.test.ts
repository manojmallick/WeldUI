import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-divider.js';
import type { WuDivider } from './wu-divider.js';

describe('wu-divider', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuDivider>(html`<wu-divider></wu-divider>`);
    expect(el.vertical).toBe(false);
  });

  it('renders a separator line', async () => {
    const el = await fixture<WuDivider>(html`<wu-divider></wu-divider>`);
    expect(el.shadowRoot!.querySelector('.line')).toBeTruthy();
  });

  it('has role="separator"', async () => {
    const el = await fixture<WuDivider>(html`<wu-divider></wu-divider>`);
    const line = el.shadowRoot!.querySelector('[role="separator"]')!;
    expect(line).toBeTruthy();
  });

  it('has aria-orientation="horizontal" by default', async () => {
    const el = await fixture<WuDivider>(html`<wu-divider></wu-divider>`);
    const line = el.shadowRoot!.querySelector('[role="separator"]')!;
    expect(line.getAttribute('aria-orientation')).toBe('horizontal');
  });

  it('has aria-orientation="vertical" when vertical', async () => {
    const el = await fixture<WuDivider>(html`<wu-divider vertical></wu-divider>`);
    const line = el.shadowRoot!.querySelector('[role="separator"]')!;
    expect(line.getAttribute('aria-orientation')).toBe('vertical');
  });
});
