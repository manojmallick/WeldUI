import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const pill = (label: string) => html`
  <span
    style="display:inline-flex;align-items:center;padding:6px 12px;border-radius:var(--wu-radius-full);background:var(--wu-color-primary-subtle);color:var(--wu-color-text);border:1px solid var(--wu-color-border);"
  >
    ${label}
  </span>
`;

const meta: Meta = {
  title: 'V3/Layout & Structure/Cluster',
  component: 'wu-cluster',
  tags: ['autodocs'],
  argTypes: {
    gap: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch'] },
    justify: { control: 'select', options: ['start', 'center', 'end', 'between', 'around'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { gap: 'sm', align: 'center', justify: 'start' },
  render: (args) => html`
    <wu-cluster gap=${args.gap} align=${args.align} justify=${args.justify}>
      ${pill('Accessibility')}
      ${pill('Design Tokens')}
      ${pill('Web Components')}
      ${pill('Lit')}
      ${pill('TypeScript')}
    </wu-cluster>
  `,
};

export const Justified: Story = {
  render: () => html`
    <wu-cluster gap="md" justify="between">
      ${pill('Filters')}
      ${pill('Sort')}
      ${pill('Export')}
    </wu-cluster>
  `,
};

export const Dense: Story = {
  render: () => html`
    <wu-cluster gap="xs">
      ${pill('One')}
      ${pill('Two')}
      ${pill('Three')}
      ${pill('Four')}
      ${pill('Five')}
      ${pill('Six')}
    </wu-cluster>
  `,
};