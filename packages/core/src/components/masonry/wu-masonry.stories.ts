import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const item = (h: number, label: string) => html`
  <div
    style="height:${h}px;padding:var(--wu-space-3);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);box-sizing:border-box;font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);"
  >
    ${label}
  </div>
`;

const meta: Meta = {
  title: 'V3/Layout & Structure/Masonry',
  component: 'wu-masonry',
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'number' },
    gap: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { columns: 3, gap: 'md' },
  render: (args) => html`
    <wu-masonry .columns=${args.columns} gap=${args.gap}>
      ${item(80, 'Short')} ${item(140, 'Medium')} ${item(100, 'Short-ish')}
      ${item(200, 'Tall')} ${item(60, 'Tiny')} ${item(160, 'Medium tall')}
      ${item(120, 'Normal')} ${item(90, 'Short')} ${item(180, 'Tall-ish')}
    </wu-masonry>
  `,
};

export const TwoColumns: Story = {
  render: () => html`
    <wu-masonry columns="2" gap="lg">
      ${item(100, 'One')} ${item(200, 'Two')} ${item(150, 'Three')} ${item(80, 'Four')}
    </wu-masonry>
  `,
};

export const FourColumns: Story = {
  render: () => html`
    <wu-masonry columns="4" gap="sm">
      ${item(90, 'A')} ${item(130, 'B')} ${item(70, 'C')} ${item(160, 'D')}
      ${item(110, 'E')} ${item(85, 'F')} ${item(140, 'G')} ${item(95, 'H')}
    </wu-masonry>
  `,
};
