import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Divider',
  component: 'wu-divider',
  tags: ['autodocs'],
  argTypes: {
    vertical: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A thin separator between sections. Supports horizontal (default) and vertical orientation. Accepts an optional label via the default slot.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <p style="margin:0;color:var(--wu-color-text-secondary)">Above content</p>
    <wu-divider></wu-divider>
    <p style="margin:0;color:var(--wu-color-text-secondary)">Below content</p>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <wu-divider>OR</wu-divider>
  `,
};

export const Vertical: Story = {
  render: () => html`
    <div style="display:flex;align-items:center;height:40px;gap:0">
      <wu-button variant="ghost" size="sm">Edit</wu-button>
      <wu-divider vertical></wu-divider>
      <wu-button variant="ghost" size="sm">Delete</wu-button>
    </div>
  `,
};
