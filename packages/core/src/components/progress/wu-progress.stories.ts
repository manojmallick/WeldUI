import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Progress',
  component: 'wu-progress',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    indeterminate: { control: 'boolean' },
    showLabel: { control: 'boolean' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'Tracks completion of a task as a horizontal bar. Set `value` and `max` for determinate mode, or add `indeterminate` for an animated shimmer. Uses `aria-valuenow` / `aria-valuemin` / `aria-valuemax`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { value: 60, size: 'md' },
  render: (args) => html`
    <wu-progress value=${args.value} size=${args.size}></wu-progress>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <wu-progress value="72" label="Upload progress" show-label style="max-width:480px"></wu-progress>
  `,
};

export const Indeterminate: Story = {
  render: () => html`
    <wu-progress indeterminate label="Loading…" style="max-width:480px"></wu-progress>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:480px">
      <wu-progress size="sm" value="40"></wu-progress>
      <wu-progress size="md" value="60"></wu-progress>
      <wu-progress size="lg" value="80"></wu-progress>
    </div>
  `,
};
