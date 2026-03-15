import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const tile = (label: string) => html`
  <div
    style="padding:16px;border-radius:var(--wu-radius-md);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);min-width:96px;text-align:center;"
  >
    ${label}
  </div>
`;

const meta: Meta = {
  title: 'V3/Layout & Structure/Stack',
  component: 'wu-stack',
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'radio', options: ['vertical', 'horizontal'] },
    gap: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch'] },
    justify: { control: 'select', options: ['start', 'center', 'end', 'between', 'around'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { direction: 'vertical', gap: 'md', align: 'stretch', justify: 'start' },
  render: (args) => html`
    <wu-stack
      direction=${args.direction}
      gap=${args.gap}
      align=${args.align}
      justify=${args.justify}
    >
      ${tile('Alpha')}
      ${tile('Beta')}
      ${tile('Gamma')}
    </wu-stack>
  `,
};

export const Horizontal: Story = {
  render: () => html`
    <wu-stack direction="horizontal" gap="lg" align="center">
      ${tile('Nav')}
      ${tile('Search')}
      ${tile('Actions')}
    </wu-stack>
  `,
};

export const Distributed: Story = {
  render: () => html`
    <wu-stack direction="horizontal" justify="between" align="center">
      ${tile('Left')}
      ${tile('Center')}
      ${tile('Right')}
    </wu-stack>
  `,
};