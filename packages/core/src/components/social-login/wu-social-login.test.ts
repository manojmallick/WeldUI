import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuSocialLogin } from './wu-social-login.js';
import './wu-social-login.js';

describe('wu-social-login', () => {
  it('renders default 3 providers', async () => {
    const el = await fixture<WuSocialLogin>(html`<wu-social-login></wu-social-login>`);
    expect(el.shadowRoot!.querySelectorAll('.provider-btn').length).toBe(3);
  });

  it('renders custom providers', async () => {
    const providers = [{ id: 'google', label: 'Google' }];
    const el = await fixture<WuSocialLogin>(html`<wu-social-login .providers=${providers}></wu-social-login>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelectorAll('.provider-btn').length).toBe(1);
  });

  it('emits wu-provider-click with provider id', async () => {
    const el = await fixture<WuSocialLogin>(html`<wu-social-login></wu-social-login>`);
    const handler = vi.fn();
    el.addEventListener('wu-provider-click', handler);
    (el.shadowRoot!.querySelectorAll('.provider-btn')[0] as HTMLButtonElement).click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.provider).toBe('google');
  });

  it('shows provider label text', async () => {
    const providers = [{ id: 'x', label: 'Continue with X' }];
    const el = await fixture<WuSocialLogin>(html`<wu-social-login .providers=${providers}></wu-social-login>`);
    await el.updateComplete;
    const btn = el.shadowRoot!.querySelector('.provider-btn');
    expect(btn?.textContent).toContain('Continue with X');
  });

  it('renders with no providers gracefully', async () => {
    const el = await fixture<WuSocialLogin>(html`<wu-social-login .providers=${[]}></wu-social-login>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelectorAll('.provider-btn').length).toBe(0);
  });
});
