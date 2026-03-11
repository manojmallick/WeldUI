import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    --wu-spinner-size:   24px;
    --wu-spinner-color:  var(--wu-color-primary);
    --wu-spinner-track:  var(--wu-color-border);
    --wu-spinner-thickness: 2px;
    --wu-spinner-speed:  0.7s;
  }

  :host([size="sm"]) { --wu-spinner-size: 16px; }
  :host([size="md"]) { --wu-spinner-size: 24px; }
  :host([size="lg"]) { --wu-spinner-size: 40px; }

  .spinner {
    width: var(--wu-spinner-size);
    height: var(--wu-spinner-size);
    border: var(--wu-spinner-thickness) solid var(--wu-spinner-track);
    border-top-color: var(--wu-spinner-color);
    border-radius: 50%;
    animation: spin var(--wu-spinner-speed) linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
`;
