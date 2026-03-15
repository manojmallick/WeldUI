import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-qr-code.js';

describe('wu-qr-code', () => {
  it('renders an SVG', async () => {
    const el: any = await fixture(html`<wu-qr-code value="https://weldui.dev"></wu-qr-code>`);
    expect(el.shadowRoot!.querySelector('svg')).toBeTruthy();
  });

  it('renders rect modules', async () => {
    const el: any = await fixture(html`<wu-qr-code value="Hello"></wu-qr-code>`);
    expect(el.shadowRoot!.querySelectorAll('rect').length).toBeGreaterThan(1);
  });

  it('renders empty svg with no value', async () => {
    const el = await fixture(html`<wu-qr-code></wu-qr-code>`);
    const svg = el.shadowRoot!.querySelector('svg')!;
    expect(svg).toBeTruthy();
  });

  it('respects size prop', async () => {
    const el: any = await fixture(html`<wu-qr-code value="test" size="200"></wu-qr-code>`);
    expect(el.shadowRoot!.querySelector('svg')!.getAttribute('width')).toBe('200');
  });

  it('has accessible aria-label', async () => {
    const el: any = await fixture(html`<wu-qr-code value="https://weldui.dev"></wu-qr-code>`);
    const svg = el.shadowRoot!.querySelector('svg')!;
    expect(svg.getAttribute('aria-label')).toContain('weldui.dev');
  });
});
