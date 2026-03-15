import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-code-block.js';
import type { WuCodeBlock } from './wu-code-block.js';

describe('wu-code-block', () => {
  it('renders code content', async () => {
    const el = await fixture<WuCodeBlock>(html`<wu-code-block code="const x = 1;" language="typescript"></wu-code-block>`);
    expect(el.shadowRoot!.querySelector('code')?.textContent).toBe('const x = 1;');
  });
  it('renders language label', async () => {
    const el = await fixture<WuCodeBlock>(html`<wu-code-block language="javascript" code=""></wu-code-block>`);
    expect(el.shadowRoot!.querySelector('.lang')?.textContent?.trim()).toBe('javascript');
  });
  it('shows copy button by default', async () => {
    const el = await fixture<WuCodeBlock>(html`<wu-code-block code="foo"></wu-code-block>`);
    expect(el.shadowRoot!.querySelector('.copy-btn')).toBeTruthy();
  });
  it('hides copy button when hideCopy is set', async () => {
    const el = await fixture<WuCodeBlock>(html`<wu-code-block hide-copy code="foo"></wu-code-block>`);
    expect(el.shadowRoot!.querySelector('.copy-btn')).toBeFalsy();
  });
  it('has region role for accessibility', async () => {
    const el = await fixture<WuCodeBlock>(html`<wu-code-block code=""></wu-code-block>`);
    expect(el.shadowRoot!.querySelector('[role="region"]')).toBeTruthy();
  });
});
