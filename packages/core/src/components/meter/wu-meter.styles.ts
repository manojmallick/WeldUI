import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-meter-track-bg:  var(--wu-color-border);
    --wu-meter-fill-bg:   var(--wu-color-primary);
    --wu-meter-height:    8px;
    --wu-meter-radius:    var(--wu-radius-full);
  }

  :host([variant='success']) { --wu-meter-fill-bg: var(--wu-color-success); }
  :host([variant='warning']) { --wu-meter-fill-bg: var(--wu-color-warning); }
  :host([variant='danger'])  { --wu-meter-fill-bg: var(--wu-color-danger); }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  .labels {
    display: flex;
    justify-content: space-between;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .track {
    height: var(--wu-meter-height);
    background: var(--wu-meter-track-bg);
    border-radius: var(--wu-meter-radius);
    overflow: hidden;
  }

  .fill {
    height: 100%;
    background: var(--wu-meter-fill-bg);
    border-radius: var(--wu-meter-radius);
    transition: width var(--wu-duration-normal) var(--wu-ease-default);
  }
`;
