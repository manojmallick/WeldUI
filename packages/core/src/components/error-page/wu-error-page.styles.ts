import { css } from 'lit';

export const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--wu-space-16) var(--wu-space-6);
    min-height: 400px;

    --wu-error-code-color: var(--wu-color-text-disabled);
    --wu-error-title-color: var(--wu-color-text);
    --wu-error-desc-color: var(--wu-color-text-secondary);
  }

  .icon {
    margin-bottom: var(--wu-space-6);
    color: var(--wu-color-text-disabled);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .code {
    font-family: var(--wu-font-mono);
    font-size: 5rem;
    font-weight: var(--wu-font-bold);
    line-height: 1;
    color: var(--wu-error-code-color);
    margin: 0 0 var(--wu-space-4);
    letter-spacing: -0.02em;
  }

  .title {
    margin: 0 0 var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-2xl);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-error-title-color);
    line-height: var(--wu-leading-tight);
  }

  .description {
    margin: 0 0 var(--wu-space-8);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    color: var(--wu-error-desc-color);
    line-height: var(--wu-leading-normal);
    max-width: 480px;
  }

  .actions {
    display: flex;
    gap: var(--wu-space-3);
    flex-wrap: wrap;
    justify-content: center;
  }

  .actions:empty { display: none; }
`;
