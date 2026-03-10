import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Components/Badge',
  component: 'wu-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'primary', 'success', 'warning', 'danger', 'outline'] }
  }
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { variant: 'default' },
  render: (args) => html`<wu-badge variant=${args.variant}>Badge</wu-badge>`
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <wu-badge variant="default">Default</wu-badge>
      <wu-badge variant="primary">Primary</wu-badge>
      <wu-badge variant="success">Success</wu-badge>
      <wu-badge variant="warning">Warning</wu-badge>
      <wu-badge variant="danger">Danger</wu-badge>
      <wu-badge variant="outline">Outline</wu-badge>
    </div>
  `
};
