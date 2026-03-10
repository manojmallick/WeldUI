import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Components/Button',
  component: 'wu-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'success'],
      description: 'Visual style variant',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    disabled: { control: 'boolean', description: 'Disables the button' },
    loading: { control: 'boolean', description: 'Shows loading spinner' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Native button type',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile button component supporting multiple variants, sizes, and states.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { variant: 'primary', size: 'md', disabled: false, loading: false },
  render: (args) => html`
    <wu-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
    >
      Button Label
    </wu-button>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
      <wu-button variant="primary">Primary</wu-button>
      <wu-button variant="secondary">Secondary</wu-button>
      <wu-button variant="ghost">Ghost</wu-button>
      <wu-button variant="danger">Danger</wu-button>
      <wu-button variant="success">Success</wu-button>
      <wu-button disabled>Disabled</wu-button>
      <wu-button loading>Loading</wu-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex;gap:12px;align-items:center">
      <wu-button size="sm">Small</wu-button>
      <wu-button size="md">Medium</wu-button>
      <wu-button size="lg">Large</wu-button>
    </div>
  `,
};

export const WithSlots: Story = {
  render: () => html`
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
      <wu-button>
        <span slot="prefix">⬅</span>
        Back
      </wu-button>
      <wu-button>
        Next
        <span slot="suffix">➡</span>
      </wu-button>
    </div>
  `,
};
