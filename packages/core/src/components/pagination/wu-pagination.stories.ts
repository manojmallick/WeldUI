import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Pagination',
  component: 'wu-pagination',
  tags: ['autodocs'],
  argTypes: {
    page: { control: { type: 'number', min: 1 } },
    totalPages: { control: { type: 'number', min: 1 } },
    showInfo: { control: 'boolean' },
    totalItems: { control: 'number' },
    pageSize: { control: 'number' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Page navigation for large data sets. Emits `wu-page-change` with the selected page number. Configure sibling page count and optional item-count display.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { page: 1, totalPages: 10 },
  render: (args) => html`<wu-pagination .page=${args.page} .totalPages=${args.totalPages}></wu-pagination>`,
};

export const MiddlePage: Story = {
  render: () => html`<wu-pagination page="5" total-pages="10"></wu-pagination>`,
};

export const LargePageCount: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px">
      <wu-pagination page="1" total-pages="100"></wu-pagination>
      <wu-pagination page="50" total-pages="100"></wu-pagination>
      <wu-pagination page="100" total-pages="100"></wu-pagination>
    </div>
  `,
};

export const WithInfo: Story = {
  render: () => html`
    <wu-pagination page="3" total-pages="10" show-info total-items="98" page-size="10"></wu-pagination>
  `,
};

export const FewPages: Story = {
  render: () => html`<wu-pagination page="2" total-pages="3"></wu-pagination>`,
};
