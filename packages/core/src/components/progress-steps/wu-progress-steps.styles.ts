import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-start;
    gap: 0;
  }

  .orientation-vertical ol {
    flex-direction: column;
  }

  .step {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    position: relative;
    flex: 1;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-disabled);
  }

  .step:last-child { flex: none; }

  .indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid var(--wu-color-border-strong);
    background: var(--wu-color-background);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    flex-shrink: 0;
    transition: all var(--wu-duration-normal) var(--wu-ease-default);
  }

  .label {
    white-space: nowrap;
  }

  .connector {
    flex: 1;
    height: 2px;
    background: var(--wu-color-border);
    margin: 0 var(--wu-space-2);
    align-self: center;
    display: block;
  }

  .orientation-vertical .connector {
    width: 2px;
    height: var(--wu-space-6);
    flex: none;
    margin: var(--wu-space-1) 0 var(--wu-space-1) 13px;
  }

  /* Completed step */
  .step.completed { color: var(--wu-color-success); }
  .step.completed .indicator {
    background: var(--wu-color-success);
    border-color: var(--wu-color-success);
    color: white;
  }
  .step.completed .connector { background: var(--wu-color-success); }

  /* Current step */
  .step.current { color: var(--wu-color-text); }
  .step.current .indicator {
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary);
    font-weight: var(--wu-font-bold);
  }
  .step.current .label { font-weight: var(--wu-font-semibold); }
`;
