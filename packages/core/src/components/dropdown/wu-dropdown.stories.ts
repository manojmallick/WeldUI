import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './wu-dropdown.js';

const meta: Meta = { title: 'Navigation/Dropdown', component: 'wu-dropdown', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const items = [
  { label: 'Edit', value: 'edit', icon: '✏️' },
  { label: 'Duplicate', value: 'duplicate' },
  { separator: true, label: '', value: '' },
  { label: 'Delete', value: 'delete', danger: true },
];

export const Default: Story = {
  render: () => html`
    <wu-dropdown .items=${items}>
      <wu-button slot="trigger">Actions ▾</wu-button>
    </wu-dropdown>`
};

export const WithDisabled: Story = {
  render: () => html`
    <wu-dropdown .items=${[{ label: 'View', value: 'view' }, { label: 'Edit', value: 'edit', disabled: true }]} .open=${true}>
      <wu-button slot="trigger">Options</wu-button>
    </wu-dropdown>`
};

export const TopPlacement: Story = {
  render: () => html`
    <div style="margin-top:200px">
      <wu-dropdown placement="top" .items=${items} .open=${true}>
        <wu-button slot="trigger">Open Up ▴</wu-button>
      </wu-dropdown>
    </div>`
};
