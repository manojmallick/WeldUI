import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const COLUMNS = [
  { key: 'name',   label: 'Name',   sortable: true, width: '200px' },
  { key: 'email',  label: 'Email',  sortable: true },
  { key: 'role',   label: 'Role',   sortable: false, width: '120px' },
  { key: 'status', label: 'Status', sortable: false, width: '100px' },
];

const ROWS = Array.from({ length: 10 }, (_, i) => ({
  name:   `User ${i + 1}`,
  email:  `user${i + 1}@example.com`,
  role:   i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'Editor' : 'Viewer',
  status: i % 4 === 0 ? 'Inactive' : 'Active',
}));

const meta: Meta = {
  title: 'Components/DataTable',
  component: 'wu-data-table',
  tags: ['autodocs'],
  argTypes: {
    loading:    { control: 'boolean' },
    selectable: { control: 'boolean' },
    searchable: { control: 'boolean' },
    page:       { control: 'number' },
    pageSize:   { control: 'number' },
    total:      { control: 'number' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { loading: false, selectable: false, searchable: false, page: 1, pageSize: 10, total: 10 },
  render: (args) => html`
    <wu-data-table
      .columns=${COLUMNS}
      .rows=${ROWS}
      total=${args.total}
      page=${args.page}
      page-size=${args.pageSize}
      ?loading=${args.loading}
      ?selectable=${args.selectable}
      ?searchable=${args.searchable}
      @wu-sort-change=${(e: CustomEvent) => console.log('sort', e.detail)}
      @wu-page-change=${(e: CustomEvent) => console.log('page', e.detail)}
    ></wu-data-table>
  `,
};

export const Selectable: Story = {
  render: () => html`
    <wu-data-table
      .columns=${COLUMNS}
      .rows=${ROWS}
      total=${ROWS.length}
      page="1"
      page-size="10"
      selectable
      @wu-selection-change=${(e: CustomEvent) => console.log('selected', e.detail.selected.length)}
    ></wu-data-table>
  `,
};

export const Searchable: Story = {
  render: () => html`
    <wu-data-table
      .columns=${COLUMNS}
      .rows=${ROWS}
      total=${ROWS.length}
      page="1"
      page-size="10"
      searchable
      @wu-search-change=${(e: CustomEvent) => console.log('search', e.detail)}
    ></wu-data-table>
  `,
};

export const Loading: Story = {
  render: () => html`
    <wu-data-table
      .columns=${COLUMNS}
      .rows=${[]}
      total="0"
      loading
    ></wu-data-table>
  `,
};

export const Empty: Story = {
  render: () => html`
    <wu-data-table
      .columns=${COLUMNS}
      .rows=${[]}
      total="0"
      empty-message="No users found. Try adjusting your filters."
    ></wu-data-table>
  `,
};

export const WithPagination: Story = {
  render: () => html`
    <wu-data-table
      .columns=${COLUMNS}
      .rows=${ROWS}
      total="150"
      page="3"
      page-size="10"
      @wu-page-change=${(e: CustomEvent) => console.log('page', e.detail)}
    ></wu-data-table>
  `,
};
