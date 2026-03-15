import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuSurvey } from './wu-survey.js';
import './wu-survey.js';

describe('wu-survey', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuSurvey>(html`<wu-survey></wu-survey>`);
    expect(el.question).toContain('recommend');
    expect(el.withComment).toBe(false);
  });

  it('renders 11 score buttons (0–10)', async () => {
    const el = await fixture<WuSurvey>(html`<wu-survey></wu-survey>`);
    const buttons = el.shadowRoot!.querySelectorAll('.score-btn');
    expect(buttons.length).toBe(11);
  });

  it('renders comment textarea when with-comment is set', async () => {
    const el = await fixture<WuSurvey>(html`<wu-survey with-comment></wu-survey>`);
    const textarea = el.shadowRoot!.querySelector('textarea');
    expect(textarea).toBeTruthy();
  });

  it('submit button is disabled until a score is selected', async () => {
    const el = await fixture<WuSurvey>(html`<wu-survey></wu-survey>`);
    const submitBtn = el.shadowRoot!.querySelector('.submit-btn') as HTMLButtonElement;
    expect(submitBtn.disabled).toBe(true);
    (el.shadowRoot!.querySelectorAll('.score-btn')[5] as HTMLButtonElement).click();
    await el.updateComplete;
    expect(submitBtn.disabled).toBe(false);
  });

  it('emits wu-submit with score and comment on submit', async () => {
    const el = await fixture<WuSurvey>(html`<wu-survey></wu-survey>`);
    const handler = vi.fn();
    el.addEventListener('wu-submit', handler);
    (el.shadowRoot!.querySelectorAll('.score-btn')[8] as HTMLButtonElement).click();
    await el.updateComplete;
    (el.shadowRoot!.querySelector('.submit-btn') as HTMLButtonElement).click();
    await el.updateComplete;
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.score).toBe(8);
  });
});
