import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-diff-viewer.js';
import type { WuDiffViewer } from './wu-diff-viewer.js';

describe('wu-diff-viewer', () => {
  const lines = [
    { type: 'unchanged' as const, content: 'const x = 1;', lineOld: 1, lineNew: 1 },
    { type: 'removed'   as const, content: 'const y = 2;', lineOld: 2 },
    { type: 'added'     as const, content: 'const y = 3;', lineNew: 2 },
  ];

  it('renders correct number of rows', async () => {
    const el = await fixture<WuDiffViewer>(html`<wu-diff-viewer .lines=${lines}></wu-diff-viewer>`);
    expect(el.shadowRoot!.querySelectorAll('.row').length).toBe(3);
  });

  it('applies type classes', async () => {
    const el = await fixture<WuDiffViewer>(html`<wu-diff-viewer .lines=${lines}></wu-diff-viewer>`);
    const rows = el.shadowRoot!.querySelectorAll('.row');
    expect(rows[0].classList.contains('type-unchanged')).toBe(true);
    expect(rows[1].classList.contains('type-removed')).toBe(true);
    expect(rows[2].classList.contains('type-added')).toBe(true);
  });

  it('shows filename when provided', async () => {
    const el = await fixture<WuDiffViewer>(html`<wu-diff-viewer .lines=${lines} filename="file.ts"></wu-diff-viewer>`);
    expect(el.shadowRoot!.querySelector('.filename')?.textContent?.trim()).toBe('file.ts');
  });

  it('hides filename when not provided', async () => {
    const el = await fixture<WuDiffViewer>(html`<wu-diff-viewer .lines=${lines}></wu-diff-viewer>`);
    expect(el.shadowRoot!.querySelector('.filename')).toBeNull();
  });

  it('renders sign + for added lines', async () => {
    const el = await fixture<WuDiffViewer>(html`<wu-diff-viewer .lines=${lines}></wu-diff-viewer>`);
    const signs = el.shadowRoot!.querySelectorAll('.sign');
    expect(signs[2].textContent?.trim()).toBe('+');
  });
});
