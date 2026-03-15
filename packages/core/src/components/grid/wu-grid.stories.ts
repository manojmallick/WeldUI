import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const card = (label: string) => html`
  <div
    style="min-height:96px;padding:16px;border-radius:var(--wu-radius-lg);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);display:flex;align-items:end;"
  >
    ${label}
  </div>
`;

const meta: Meta = {
  title: 'V3/Layout & Structure/Grid',
  component: 'wu-grid',
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'number' },
    gap: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    minItemWidth: { control: 'text', name: 'min-item-width' },
    autoFit: { control: 'boolean', name: 'auto-fit' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { columns: 3, gap: 'md', minItemWidth: '16rem', autoFit: false },
  render: (args) => html`
    <wu-grid
      .columns=${args.columns}
      gap=${args.gap}
      min-item-width=${args.minItemWidth}
      ?auto-fit=${args.autoFit}
    >
      ${card('One')}
      ${card('Two')}
      ${card('Three')}
      ${card('Four')}
      ${card('Five')}
      ${card('Six')}
    </wu-grid>
  `,
};

export const AutoFit: Story = {
  render: () => html`
    <wu-grid auto-fit min-item-width="12rem" gap="lg">
      ${card('Product')}
      ${card('Analytics')}
      ${card('Operations')}
      ${card('Support')}
      ${card('Security')}
    </wu-grid>
  `,
};

export const TwoColumns: Story = {
  render: () => html`
    <wu-grid .columns=${2} gap="lg">
      ${card('Left Column')}
      ${card('Right Column')}
      ${card('Row Two Left')}
      ${card('Row Two Right')}
    </wu-grid>
  `,
};