import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Components/Avatar',
  component: 'wu-avatar',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg', 'xl'] }
  }
};
export default meta;
type Story = StoryObj;

export const WithInitials: Story = {
  args: { initials: 'MM', size: 'md' },
  render: (args) => html`<wu-avatar initials=${args.initials} size=${args.size}></wu-avatar>`
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display:flex;gap:12px;align-items:center">
      <wu-avatar initials="SM" size="sm"></wu-avatar>
      <wu-avatar initials="MD" size="md"></wu-avatar>
      <wu-avatar initials="LG" size="lg"></wu-avatar>
      <wu-avatar initials="XL" size="xl"></wu-avatar>
    </div>
  `
};
