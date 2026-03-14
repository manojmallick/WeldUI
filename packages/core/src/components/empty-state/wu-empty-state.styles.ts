import { css } from 'lit';

export const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--wu-space-12) var(--wu-space-6);

    --wu-empty-icon-color: var(--wu-color-text-disabled);
    --wu-empty-title-color: var(--wu-color-text);
    --wu-empty-desc-color: var(--wu-color-text-secondary);
  }

  .icon {
    margin-bottom: var(--wu-space-4);
    color: var(--wu-empty-icon-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    margin: 0 0 var(--wu-space-2);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-empty-title-color);
    line-height: var(--wu-leading-tight);
  }

  .description {
    margin: 0 0 var(--wu-space-6);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-empty-desc-color);
    line-height: var(--wu-leading-normal);
    max-width: 360px;
  }

  .description:empty { display: none; }

  .actions {
    display: flex;
    gap: var(--wu-space-3);
    flex-wrap: wrap;
    justify-content: center;
  }

  .actions:empty { display: none; }
`;
