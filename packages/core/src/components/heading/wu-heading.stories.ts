import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Typography & Content/Heading',
  component: 'wu-heading',
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'auto'] },
    truncate: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { level: 2, size: 'auto', truncate: false },
  render: (args) => html`
    <wu-heading .level=${args.level} size=${args.size} ?truncate=${args.truncate}>
      Section Heading
    </wu-heading>
  `,
};

export const AllLevels: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-3);">
      <wu-heading level="1">Heading Level 1</wu-heading>
      <wu-heading level="2">Heading Level 2</wu-heading>
      <wu-heading level="3">Heading Level 3</wu-heading>
      <wu-heading level="4">Heading Level 4</wu-heading>
      <wu-heading level="5">Heading Level 5</wu-heading>
      <wu-heading level="6">Heading Level 6</wu-heading>
    </div>
  `,
};

export const ExplicitSizes: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-3);">
      <wu-heading level="3" size="2xl">h3 displayed as 2xl</wu-heading>
      <wu-heading level="2" size="sm">h2 displayed as sm</wu-heading>
    </div>
  `,
};

export const Truncated: Story = {
  render: () => html`
    <div style="max-width:240px;">
      <wu-heading level="2" truncate>This is a very long heading that will be truncated</wu-heading>
    </div>
  `,
};
