import { css } from 'lit';

export const stepperStyles = css`
  :host {
    display: block;
    --wu-stepper-connector-color: var(--wu-color-border);
    --wu-stepper-connector-active: var(--wu-color-primary);
    --wu-stepper-indicator-size: 32px;
  }

  .stepper {
    display: flex;
    align-items: flex-start;
    gap: 0;
  }

  :host([vertical]) .stepper {
    flex-direction: column;
  }
`;

export const stepStyles = css`
  :host {
    display: flex;
    align-items: flex-start;
    flex: 1;
    min-width: 0;
  }

  :host(:last-child) .connector {
    display: none;
  }

  .step-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 0;
  }

  .top-row {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .indicator {
    flex-shrink: 0;
    width: var(--wu-stepper-indicator-size);
    height: var(--wu-stepper-indicator-size);
    border-radius: var(--wu-radius-full);
    border: 2px solid var(--wu-color-border);
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    transition: all var(--wu-duration-normal);
    position: relative;
    z-index: 1;
  }

  :host([status='active']) .indicator {
    border-color: var(--wu-color-primary);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
  }

  :host([status='complete']) .indicator {
    border-color: var(--wu-color-success);
    background: var(--wu-color-success);
    color: white;
  }

  :host([status='error']) .indicator {
    border-color: var(--wu-color-danger);
    background: var(--wu-color-danger);
    color: white;
  }

  .connector {
    flex: 1;
    height: 2px;
    background: var(--wu-stepper-connector-color);
    margin-top: calc(var(--wu-stepper-indicator-size) / 2);
    transition: background var(--wu-duration-normal);
  }

  :host([status='complete']) + wu-step .connector,
  :host([status='complete']) .connector {
    background: var(--wu-stepper-connector-active);
  }

  .content {
    padding: var(--wu-space-2) 0 0 0;
    text-align: center;
    font-family: var(--wu-font-sans);
    min-width: 0;
    padding-bottom: var(--wu-space-2);
  }

  .label {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host([status='active']) .label {
    color: var(--wu-color-text);
    font-weight: var(--wu-font-semibold);
  }

  .description {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-disabled);
    margin-top: 2px;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  .check-icon, .error-icon {
    display: block;
  }
`;
