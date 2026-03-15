import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .steps {
    display: flex;
    align-items: center;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--wu-space-1);
    min-width: 60px;
  }

  .step-num {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-bold);
    background: var(--wu-color-border);
    color: var(--wu-color-text-secondary);
    border: 2px solid transparent;
    transition: all var(--wu-duration-normal);
  }

  .step.done .step-num {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
  }

  .step.current .step-num {
    background: var(--wu-color-background);
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary);
  }

  .step-label {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
  }

  .step.current .step-label {
    color: var(--wu-color-text);
    font-weight: var(--wu-font-medium);
  }

  .step.done .step-label { color: var(--wu-color-text-secondary); }

  .connector {
    flex: 1;
    height: 2px;
    background: var(--wu-color-border);
    margin-bottom: 16px;
    transition: background var(--wu-duration-normal);
  }

  .connector.filled { background: var(--wu-color-primary); }
`;
