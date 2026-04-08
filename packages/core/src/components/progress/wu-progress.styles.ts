import { css } from 'lit';

export const styles = css`
  :host {
    display: block;

    --wu-progress-height:     8px;
    --wu-progress-radius:     var(--wu-radius-full);
    --wu-progress-track:      var(--wu-color-border);
    --wu-progress-fill:       var(--wu-color-primary);
    --wu-progress-transition: width var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([size="sm"]) { --wu-progress-height: 4px; }
  :host([size="lg"]) { --wu-progress-height: 12px; }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
    font-family: var(--wu-font-sans);
  }

  .labels {
    display: flex;
    justify-content: space-between;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .track {
    width: 100%;
    height: var(--wu-progress-height);
    background: var(--wu-progress-track);
    border-radius: var(--wu-progress-radius);
    overflow: hidden;
  }

  .fill {
    height: 100%;
    background: var(--wu-progress-fill);
    border-radius: var(--wu-progress-radius);
    transition: var(--wu-progress-transition);
    transform-origin: left;
  }

  /* Indeterminate */
  :host([indeterminate]) .fill {
    width: 40% !important;
    animation: indeterminate 1.4s ease-in-out infinite;
  }

  @keyframes indeterminate {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(300%); }
  }

  @media (prefers-reduced-motion: reduce) {
    :host([indeterminate]) .fill {
      animation: none;
      transform: none;
      width: 100% !important;
      opacity: 0.4;
    }
  }
`;
