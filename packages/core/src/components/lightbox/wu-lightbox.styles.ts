import { css } from 'lit';

export const styles = css`
  :host { display: contents; }
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .backdrop[hidden] { display: none; }
  .box {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: var(--wu-radius-lg);
  }
  .close {
    position: absolute;
    top: -48px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: var(--wu-space-2);
    border-radius: var(--wu-radius-full);
  }
  .close:hover { background: rgba(255,255,255,0.15); }
  .nav {
    display: flex;
    align-items: center;
    gap: var(--wu-space-4);
    margin-top: var(--wu-space-4);
  }
  .nav-btn {
    background: rgba(255,255,255,0.15);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-btn:hover { background: rgba(255,255,255,0.25); }
  .nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }
  .caption { color: rgba(255,255,255,0.7); font-family: var(--wu-font-sans, system-ui); font-size: var(--wu-text-sm); margin-top: var(--wu-space-2); }
  .counter { color: rgba(255,255,255,0.5); font-family: var(--wu-font-sans, system-ui); font-size: var(--wu-text-xs); }
`;
