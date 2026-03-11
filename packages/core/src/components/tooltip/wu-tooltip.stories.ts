import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Tooltip',
  component: 'wu-tooltip',
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    delay: { control: 'number' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A lightweight hint that appears on hover or focus. Wraps any trigger element in the default slot. Supports `top`, `bottom`, `left` and `right` placements with a configurable show delay.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { content: 'This is a tooltip', placement: 'top' },
  render: (args) => html`
    <div style="padding:60px;display:flex;justify-content:center">
      <wu-tooltip content=${args.content} placement=${args.placement}>
        <wu-button>Hover me</wu-button>
      </wu-tooltip>
    </div>
  `,
};

export const Placements: Story = {
  render: () => html`
    <div style="display:flex;gap:24px;padding:80px;justify-content:center;flex-wrap:wrap">
      <wu-tooltip content="Top tooltip" placement="top">
        <wu-button variant="secondary" size="sm">Top</wu-button>
      </wu-tooltip>
      <wu-tooltip content="Bottom tooltip" placement="bottom">
        <wu-button variant="secondary" size="sm">Bottom</wu-button>
      </wu-tooltip>
      <wu-tooltip content="Left tooltip" placement="left">
        <wu-button variant="secondary" size="sm">Left</wu-button>
      </wu-tooltip>
      <wu-tooltip content="Right tooltip" placement="right">
        <wu-button variant="secondary" size="sm">Right</wu-button>
      </wu-tooltip>
    </div>
  `,
};
