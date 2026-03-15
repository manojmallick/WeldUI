import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const steps = ['Account', 'Profile', 'Review', 'Complete'];

const meta: Meta = {
  title: 'V3/Feedback & Validation/Progress Steps',
  component: 'wu-progress-steps',
  tags: ['autodocs'],
  argTypes: {
    current: { control: 'number' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { current: 1 },
  render: (args) => html`
    <wu-progress-steps .steps=${steps} .current=${args.current}></wu-progress-steps>
  `,
};

export const Completed: Story = {
  render: () => html`
    <wu-progress-steps .steps=${steps} current="3"></wu-progress-steps>
  `,
};

export const Vertical: Story = {
  render: () => html`
    <wu-progress-steps .steps=${steps} current="2" orientation="vertical" style="max-width:200px;"></wu-progress-steps>
  `,
};
