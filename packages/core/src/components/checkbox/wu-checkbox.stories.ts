import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'wu-checkbox',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { label: 'Accept terms', checked: false },
  render: (args) => html`<wu-checkbox label=${args.label} ?checked=${args.checked}></wu-checkbox>`
};

export const AllStates: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px">
      <wu-checkbox label="Unchecked"></wu-checkbox>
      <wu-checkbox label="Checked" checked></wu-checkbox>
      <wu-checkbox label="Indeterminate" indeterminate></wu-checkbox>
      <wu-checkbox label="Disabled" disabled></wu-checkbox>
    </div>
  `
};
