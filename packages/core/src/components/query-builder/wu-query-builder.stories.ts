import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'Enterprise/Query Builder', component: 'wu-query-builder', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const fields = [
  { id: 'name', label: 'Name', type: 'string' },
  { id: 'age', label: 'Age', type: 'number' },
  { id: 'active', label: 'Active', type: 'boolean' },
  { id: 'created', label: 'Created At', type: 'date' },
];

export const Default: Story = {
  render: () => html`<wu-query-builder .fields=${fields} style="max-width:600px"></wu-query-builder>`,
};

export const WithRules: Story = {
  render: () => html`
    <wu-query-builder
      .fields=${fields}
      .rules=${[{ id: '1', field: 'name', operator: 'contains', value: 'Alice' }]}
      style="max-width:600px"
    ></wu-query-builder>
  `,
};
