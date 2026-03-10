import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Components/Input',
  component: 'wu-input',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'search'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] }
  }
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { label: 'Email', placeholder: 'you@example.com', type: 'email' },
  render: (args) => html`<wu-input label=${args.label} placeholder=${args.placeholder} type=${args.type} style="max-width:320px"></wu-input>`
};

export const WithError: Story = {
  render: () => html`<wu-input label="Username" value="ab" error="Must be at least 3 characters" style="max-width:320px"></wu-input>`
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:320px">
      <wu-input size="sm" placeholder="Small"></wu-input>
      <wu-input size="md" placeholder="Medium"></wu-input>
      <wu-input size="lg" placeholder="Large"></wu-input>
    </div>
  `
};
