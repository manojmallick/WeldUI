import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Spinner',
  component: 'wu-spinner',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { size: 'md', label: 'Loading…' },
  render: (args) => html`<wu-spinner size=${args.size} label=${args.label}></wu-spinner>`,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex;align-items:center;gap:24px">
      <wu-spinner size="sm"></wu-spinner>
      <wu-spinner size="md"></wu-spinner>
      <wu-spinner size="lg"></wu-spinner>
    </div>
  `,
};
