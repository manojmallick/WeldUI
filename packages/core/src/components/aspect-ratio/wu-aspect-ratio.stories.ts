import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Layout & Structure/Aspect Ratio',
  component: 'wu-aspect-ratio',
  tags: ['autodocs'],
  argTypes: {
    ratio: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { ratio: '16/9' },
  render: (args) => html`
    <wu-aspect-ratio ratio=${args.ratio} style="max-width:480px">
      <div
        style="width:100%;height:100%;background:var(--wu-color-surface);border:1px solid var(--wu-color-border);display:flex;align-items:center;justify-content:center;color:var(--wu-color-text-secondary);font-size:var(--wu-text-sm);"
      >
        16 / 9
      </div>
    </wu-aspect-ratio>
  `,
};

export const Square: Story = {
  render: () => html`
    <wu-aspect-ratio ratio="1" style="max-width:200px">
      <div
        style="width:100%;height:100%;background:var(--wu-color-primary-subtle);border-radius:var(--wu-radius-md);display:flex;align-items:center;justify-content:center;"
      >
        1 / 1
      </div>
    </wu-aspect-ratio>
  `,
};

export const Portrait: Story = {
  render: () => html`
    <wu-aspect-ratio ratio="9/16" style="max-width:160px">
      <div
        style="width:100%;height:100%;background:var(--wu-color-surface);border:1px dashed var(--wu-color-border-strong);display:flex;align-items:center;justify-content:center;color:var(--wu-color-text-secondary);font-size:var(--wu-text-xs);"
      >
        9 / 16
      </div>
    </wu-aspect-ratio>
  `,
};
