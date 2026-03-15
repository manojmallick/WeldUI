import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Layout & Structure/Print Area',
  component: 'wu-print-area',
  tags: ['autodocs'],
  argTypes: {
    printOnly: { control: 'boolean', name: 'print-only' },
    noPrint: { control: 'boolean', name: 'no-print' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-4);">
      <wu-print-area>
        <div style="padding:var(--wu-space-4);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
          <strong>Always visible</strong> — shown on screen and when printing.
        </div>
      </wu-print-area>

      <wu-print-area no-print>
        <div style="padding:var(--wu-space-4);background:var(--wu-color-warning-subtle);border:1px solid var(--wu-color-warning);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);">
          <strong>Screen only</strong> — hidden when printing (no-print).
        </div>
      </wu-print-area>

      <wu-print-area print-only>
        <div style="padding:var(--wu-space-4);background:var(--wu-color-success-subtle);border:1px solid var(--wu-color-success);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);">
          <strong>Print only</strong> — this content is hidden on screen but appears when printing.
        </div>
      </wu-print-area>
    </div>
  `,
};
