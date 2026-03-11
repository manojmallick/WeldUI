import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Table',
  component: 'wu-table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A data table with sortable columns, sticky header and optional row-selection checkboxes. Pass `columns` and `rows` as JavaScript properties. Emits `wu-sort` and `wu-select` events.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const columns = [
  { key: 'id', label: 'ID', width: '60px' },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status' },
];

const data = [
  { id: '1', name: 'Alice Johnson', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Bob Smith', role: 'User', status: 'Active' },
  { id: '3', name: 'Charlie Brown', role: 'User', status: 'Inactive' },
  { id: '4', name: 'Diana Prince', role: 'Manager', status: 'Active' },
  { id: '5', name: 'Eve Wilson', role: 'User', status: 'Pending' },
];

export const Default: Story = {
  render: () => {
    const el = document.createElement('wu-table') as any;
    el.columns = columns;
    el.data = data;
    return el;
  },
};

export const Selectable: Story = {
  render: () => {
    const el = document.createElement('wu-table') as any;
    el.columns = columns;
    el.data = data;
    el.selectable = true;
    return el;
  },
};

export const Empty: Story = {
  render: () => {
    const el = document.createElement('wu-table') as any;
    el.columns = columns;
    el.data = [];
    el.emptyMessage = 'No users found.';
    return el;
  },
};

export const WithSorting: Story = {
  render: () => {
    const el = document.createElement('wu-table') as any;
    el.columns = columns;
    el.data = data;
    el.sortKey = 'name';
    el.sortDirection = 'asc';
    return el;
  },
};
