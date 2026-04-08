import { css } from 'lit';

export const styles = css`
  :host {
    display: block;

    --wu-skeleton-color:    var(--wu-color-surface);
    --wu-skeleton-shimmer:  var(--wu-color-border);
    --wu-skeleton-radius:   var(--wu-radius-md);
    --wu-skeleton-speed:    1.5s;
  }

  .skeleton {
    background: linear-gradient(
      90deg,
      var(--wu-skeleton-color) 25%,
      var(--wu-skeleton-shimmer) 50%,
      var(--wu-skeleton-color) 75%
    );
    background-size: 200% 100%;
    animation: shimmer var(--wu-skeleton-speed) ease-in-out infinite;
    border-radius: var(--wu-skeleton-radius);
  }

  :host([variant="text"]) .skeleton {
    height: 1em;
    border-radius: var(--wu-radius-sm);
  }

  :host([variant="circle"]) .skeleton {
    border-radius: 50%;
    aspect-ratio: 1;
  }

  :host([variant="rect"]) .skeleton {
    border-radius: var(--wu-skeleton-radius);
  }

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .skeleton {
      animation: none;
      background: var(--wu-skeleton-color);
    }
  }
`;
