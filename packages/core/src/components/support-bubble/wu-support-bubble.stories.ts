import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Feedback & Validation/Support Bubble',
  component: 'wu-support-bubble',
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'radio', options: ['bottom-right', 'bottom-left'] },
    label: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { position: 'bottom-right', label: 'Help' },
  render: (args) => html`
    <div style="position:relative;height:120px">
      <wu-support-bubble style="position:absolute" position=${args.position} label=${args.label}></wu-support-bubble>
    </div>
  `,
};

export const BottomLeft: Story = {
  render: () => html`
    <div style="position:relative;height:120px">
      <wu-support-bubble style="position:absolute;left:24px;right:auto;bottom:24px" label="Support"></wu-support-bubble>
    </div>
  `,
};
