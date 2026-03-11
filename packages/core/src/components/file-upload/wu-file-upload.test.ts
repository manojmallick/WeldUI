import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-file-upload.js';
import type { WuFileUpload } from './wu-file-upload.js';

describe('wu-file-upload', () => {
  it('renders a drop zone', async () => {
    const el = await fixture<WuFileUpload>(html`<wu-file-upload></wu-file-upload>`);
    expect(el.shadowRoot!.querySelector('.drop-zone')).toBeTruthy();
  });

  it('renders hint text when provided', async () => {
    const el = await fixture<WuFileUpload>(html`<wu-file-upload hint="Only PDF files"></wu-file-upload>`);
    expect(el.shadowRoot!.querySelector('.hint')!.textContent!.trim()).toBe('Only PDF files');
  });

  it('shows no file list initially', async () => {
    const el = await fixture<WuFileUpload>(html`<wu-file-upload></wu-file-upload>`);
    const fileList = el.shadowRoot!.querySelector<HTMLElement>('.file-list');
    expect(!fileList || fileList.hidden).toBeTruthy();
  });

  it('adds a file and renders it in the list', async () => {
    const el = await fixture<WuFileUpload>(html`<wu-file-upload></wu-file-upload>`);
    const file = new File(['content'], 'test.txt', { type: 'text/plain' });
    // Directly invoke internal method
    (el as any)._addFiles([file]);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.file-item')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('.file-name')!.textContent!.trim()).toBe('test.txt');
  });

  it('emits wu-file-select when files are added', async () => {
    const el = await fixture<WuFileUpload>(html`<wu-file-upload></wu-file-upload>`);
    const handler = vi.fn();
    el.addEventListener('wu-file-select', handler);
    const file = new File(['data'], 'doc.pdf', { type: 'application/pdf' });
    (el as any)._addFiles([file]);
    await el.updateComplete;
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.files[0].name).toBe('doc.pdf');
  });

  it('removes a file and emits wu-file-remove', async () => {
    const el = await fixture<WuFileUpload>(html`<wu-file-upload></wu-file-upload>`);
    const file = new File(['x'], 'remove-me.txt');
    (el as any)._addFiles([file]);
    await el.updateComplete;
    const handler = vi.fn();
    el.addEventListener('wu-file-remove', handler);
    const removeBtn = el.shadowRoot!.querySelector<HTMLButtonElement>('.remove-btn')!;
    removeBtn.click();
    await el.updateComplete;
    expect(handler).toHaveBeenCalledOnce();
    const fileList = el.shadowRoot!.querySelector<HTMLElement>('.file-list');
    expect(!fileList || fileList.hidden).toBeTruthy();
  });
});
