import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  /* print-only: invisible on screen, visible when printing */
  :host([print-only]) {
    display: none;
  }

  @media print {
    :host([print-only]) {
      display: block !important;
    }

    :host([no-print]) {
      display: none !important;
    }
  }
`;
