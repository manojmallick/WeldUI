import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/DataGrid',
  component: 'wu-data-grid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A high-performance data grid with virtual scrolling, inline cell editing, resizable columns and multi-column sort. Pass `columns` and `rows` as JavaScript properties.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const columns = [
  { key: 'id', label: 'ID', width: '60px' },
  { key: 'name', label: 'Name', sortable: true, filterable: true },
  { key: 'dept', label: 'Department', sortable: true, filterable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status' },
];

const data = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  name: `User ${i + 1}`,
  dept: ['Engineering', 'Design', 'Marketing', 'Sales', 'Support'][i % 5],
  role: ['Admin', 'User', 'Manager', 'Viewer'][i % 4],
  status: i % 3 === 0 ? 'Inactive' : 'Active',
}));

export const Default: Story = {
  render: () => {
    const el = document.createElement('wu-data-grid') as any;
    el.columns = columns;
    el.data = data;
    el.pageSize = 10;
    return el;
  },
};

export const WithoutToolbar: Story = {
  render: () => {
    const el = document.createElement('wu-data-grid') as any;
    el.columns = columns;
    el.data = data.slice(0, 5);
    el.showToolbar = false;
    return el;
  },
};

export const Empty: Story = {
  render: () => {
    const el = document.createElement('wu-data-grid') as any;
    el.columns = columns;
    el.data = [];
    el.emptyMessage = 'No records found.';
    return el;
  },
};

export const SmallPageSize: Story = {
  render: () => {
    const el = document.createElement('wu-data-grid') as any;
    el.columns = columns;
    el.data = data;
    el.pageSize = 5;
    return el;
  },
};
