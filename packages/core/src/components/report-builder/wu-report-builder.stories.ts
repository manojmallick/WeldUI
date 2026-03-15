import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'Enterprise/Report Builder', component: 'wu-report-builder', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const columns = [
  { id: 'name', label: 'Name', selected: true },
  { id: 'email', label: 'Email', selected: true },
  { id: 'revenue', label: 'Revenue', selected: false },
  { id: 'created', label: 'Created At', selected: true },
  { id: 'plan', label: 'Plan', selected: false },
  { id: 'status', label: 'Status', selected: true },
];

export const Default: Story = {
  render: () => html`
    <wu-report-builder style="max-width:360px" .columns=${columns}></wu-report-builder>
  `,
};

export const Empty: Story = {
  render: () => html`<wu-report-builder style="max-width:360px"></wu-report-builder>`,
};
