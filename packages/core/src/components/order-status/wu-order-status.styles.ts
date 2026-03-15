import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-4);
    padding: var(--wu-space-5);
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    max-width: 360px;
    font-family: var(--wu-font-sans);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--wu-space-2);
  }

  .order-id {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    padding: var(--wu-space-1) var(--wu-space-2);
    border-radius: var(--wu-radius-full);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
  }

  .status-pending    { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }
  .status-processing { background: var(--wu-color-info-subtle);    color: var(--wu-color-info); }
  .status-shipped    { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); }
  .status-delivered  { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  .status-cancelled  { background: var(--wu-color-danger-subtle);  color: var(--wu-color-danger); }

  .timeline {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
  }

  .step {
    display: flex;
    align-items: flex-start;
    gap: var(--wu-space-3);
    position: relative;
    padding-bottom: var(--wu-space-4);
  }

  .step:last-child { padding-bottom: 0; }

  .step::after {
    content: '';
    position: absolute;
    left: 11px;
    top: 24px;
    bottom: 0;
    width: 2px;
    background: var(--wu-color-border);
  }

  .step:last-child::after { display: none; }

  .step.done::after { background: var(--wu-color-success); }

  .circle {
    flex-shrink: 0;
    width: 24px; height: 24px;
    border-radius: 50%;
    border: 2px solid var(--wu-color-border);
    background: var(--wu-color-background);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wu-color-text-disabled);
    position: relative;
    z-index: 1;
  }

  .step.done .circle {
    background: var(--wu-color-success);
    border-color: var(--wu-color-success);
    color: white;
  }

  .step-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-top: 2px;
  }

  .step-label {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .step.done .step-label { color: var(--wu-color-text); }

  .step-date {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }
`;
