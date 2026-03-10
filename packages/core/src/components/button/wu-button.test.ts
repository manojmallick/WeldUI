import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-button.js';
import type { WuButton } from './wu-button.js';

describe('wu-button', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuButton>(html`<wu-button>Click me</wu-button>`);
    expect(el.variant).toBe('primary');
    expect(el.size).toBe('md');
    expect(el.disabled).toBe(false);
    expect(el.loading).toBe(false);
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<WuButton>(html`<wu-button variant="danger">Click me</wu-button>`);
    expect(el.getAttribute('variant')).toBe('danger');
  });

  it('emits wu-click event when clicked', async () => {
    const el = await fixture<WuButton>(html`<wu-button>Click me</wu-button>`);
    const handler = vi.fn();
    el.addEventListener('wu-click', handler);
    el.shadowRoot!.querySelector('button')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('does not emit wu-click when disabled', async () => {
    const el = await fixture<WuButton>(html`<wu-button disabled>Click me</wu-button>`);
    const handler = vi.fn();
    el.addEventListener('wu-click', handler);
    el.shadowRoot!.querySelector('button')!.click();
    expect(handler).not.toHaveBeenCalled();
  });

  it('does not emit wu-click when loading', async () => {
    const el = await fixture<WuButton>(html`<wu-button loading>Click me</wu-button>`);
    const handler = vi.fn();
    el.addEventListener('wu-click', handler);
    el.shadowRoot!.querySelector('button')!.click();
    expect(handler).not.toHaveBeenCalled();
  });

  it('shows spinner when loading', async () => {
    const el = await fixture<WuButton>(html`<wu-button loading>Click me</wu-button>`);
    const spinner = el.shadowRoot!.querySelector('.spinner');
    expect(spinner).toBeTruthy();
  });

  it('hides spinner when not loading', async () => {
    const el = await fixture<WuButton>(html`<wu-button>Click me</wu-button>`);
    const spinner = el.shadowRoot!.querySelector('.spinner');
    expect(spinner).toBeNull();
  });

  it('sets aria-disabled when disabled', async () => {
    const el = await fixture<WuButton>(html`<wu-button disabled>Click me</wu-button>`);
    const button = el.shadowRoot!.querySelector('button')!;
    expect(button.getAttribute('aria-disabled')).toBe('true');
  });

  it('sets aria-busy when loading', async () => {
    const el = await fixture<WuButton>(html`<wu-button loading>Click me</wu-button>`);
    const button = el.shadowRoot!.querySelector('button')!;
    expect(button.getAttribute('aria-busy')).toBe('true');
  });

  it('applies aria-label when provided', async () => {
    const el = await fixture<WuButton>(
      html`<wu-button aria-label="Close dialog">✕</wu-button>`
    );
    const button = el.shadowRoot!.querySelector('button')!;
    expect(button.getAttribute('aria-label')).toBe('Close dialog');
  });

  it('renders prefix and suffix slots', async () => {
    const el = await fixture<WuButton>(html`
      <wu-button>
        <span slot="prefix" id="pre">⬅</span>
        Label
        <span slot="suffix" id="suf">➡</span>
      </wu-button>
    `);
    expect(el.querySelector('#pre')).toBeTruthy();
    expect(el.querySelector('#suf')).toBeTruthy();
  });

  it('updates loading state reactively', async () => {
    const el = await fixture<WuButton>(html`<wu-button>Click me</wu-button>`);
    expect(el.shadowRoot!.querySelector('.spinner')).toBeNull();
    el.loading = true;
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.spinner')).toBeTruthy();
  });
});
