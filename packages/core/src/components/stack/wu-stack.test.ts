import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-stack.js';
import type { WuStack } from './wu-stack.js';

describe('wu-stack', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuStack>(html`<wu-stack></wu-stack>`);
    expect(el.direction).toBe('vertical');
    expect(el.gap).toBe('md');
    expect(el.align).toBe('stretch');
    expect(el.justify).toBe('start');
  });

  it('reflects direction as an attribute', async () => {
    const el = await fixture<WuStack>(html`<wu-stack direction="horizontal"></wu-stack>`);
    expect(el.getAttribute('direction')).toBe('horizontal');
  });

  it('reflects gap as an attribute', async () => {
    const el = await fixture<WuStack>(html`<wu-stack gap="lg"></wu-stack>`);
    expect(el.getAttribute('gap')).toBe('lg');
  });

  it('applies align and justify styles', async () => {
    const el = await fixture<WuStack>(html`<wu-stack align="center" justify="between"></wu-stack>`);
    const base = el.shadowRoot?.querySelector('.stack') as HTMLDivElement;
    expect(base.style.getPropertyValue('--wu-stack-align').trim()).toBe('center');
    expect(base.style.getPropertyValue('--wu-stack-justify').trim()).toBe('space-between');
  });

  it('renders slotted children', async () => {
    const el = await fixture<WuStack>(html`<wu-stack><div>One</div><div>Two</div></wu-stack>`);
    expect(el.textContent).toContain('One');
    expect(el.textContent).toContain('Two');
  });
});