import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-json-viewer.js';
import type { WuJsonViewer } from './wu-json-viewer.js';

describe('wu-json-viewer', () => {
  it('renders viewer container', async () => {
    const el = await fixture<WuJsonViewer>(html`<wu-json-viewer .data=${null}></wu-json-viewer>`);
    expect(el.shadowRoot!.querySelector('.viewer')).toBeTruthy();
  });

  it('renders null correctly', async () => {
    const el = await fixture<WuJsonViewer>(html`<wu-json-viewer .data=${null}></wu-json-viewer>`);
    expect(el.shadowRoot!.querySelector('.null')?.textContent).toBe('null');
  });

  it('renders string value', async () => {
    const el = await fixture<WuJsonViewer>(html`<wu-json-viewer .data=${'hello'}></wu-json-viewer>`);
    expect(el.shadowRoot!.querySelector('.str')?.textContent).toBe('"hello"');
  });

  it('renders number value', async () => {
    const el = await fixture<WuJsonViewer>(html`<wu-json-viewer .data=${42}></wu-json-viewer>`);
    expect(el.shadowRoot!.querySelector('.num')?.textContent).toBe('42');
  });

  it('renders boolean value', async () => {
    const el = await fixture<WuJsonViewer>(html`<wu-json-viewer .data=${true}></wu-json-viewer>`);
    expect(el.shadowRoot!.querySelector('.bool')?.textContent).toBe('true');
  });
});
