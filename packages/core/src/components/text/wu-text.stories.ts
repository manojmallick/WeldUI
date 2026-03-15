import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Typography & Content/Text',
  component: 'wu-text',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'secondary', 'muted', 'danger', 'success', 'warning', 'primary'] },
    size: { control: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl'] },
    weight: { control: 'select', options: ['normal', 'medium', 'semibold', 'bold'] },
    italic: { control: 'boolean' },
    mono: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { variant: 'default', size: 'base' },
  render: (args) => html`
    <wu-text variant=${args.variant} size=${args.size}>${args.variant} text</wu-text>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-text variant="default">Default text</wu-text>
      <wu-text variant="secondary">Secondary text</wu-text>
      <wu-text variant="muted">Muted text</wu-text>
      <wu-text variant="primary">Primary text</wu-text>
      <wu-text variant="success">Success text</wu-text>
      <wu-text variant="warning">Warning text</wu-text>
      <wu-text variant="danger">Danger text</wu-text>
    </div>
  `,
};

export const Weights: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-text weight="normal">Normal weight</wu-text>
      <wu-text weight="medium">Medium weight</wu-text>
      <wu-text weight="semibold">Semibold weight</wu-text>
      <wu-text weight="bold">Bold weight</wu-text>
      <wu-text mono>Monospace text</wu-text>
    </div>
  `,
};
