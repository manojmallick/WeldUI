import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Components/Toggle',
  component: 'wu-toggle',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] }
  }
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { label: 'Enable notifications', checked: false },
  render: (args) => html`<wu-toggle label=${args.label} ?checked=${args.checked}></wu-toggle>`
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px">
      <wu-toggle size="sm" label="Small" checked></wu-toggle>
      <wu-toggle size="md" label="Medium" checked></wu-toggle>
      <wu-toggle size="lg" label="Large" checked></wu-toggle>
    </div>
  `
};

export const LabelStart: Story = {
  render: () => html`<wu-toggle label="Dark mode" label-position="start" checked></wu-toggle>`
};
