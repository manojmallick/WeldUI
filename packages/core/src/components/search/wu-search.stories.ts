import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Components/Search',
  component: 'wu-search',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    loading: { control: 'boolean' },
    clearable: { control: 'boolean' },
    debounce: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { placeholder: 'Search…', debounce: 300, clearable: true },
  render: (args) => html`
    <div style="max-width:320px">
      <wu-search
        placeholder=${args.placeholder}
        ?loading=${args.loading}
        ?clearable=${args.clearable}
        debounce=${args.debounce}
        @wu-search=${(e: CustomEvent) => console.log('wu-search', e.detail)}
      ></wu-search>
    </div>
  `,
};

export const Loading: Story = {
  render: () => html`
    <div style="max-width:320px">
      <wu-search value="users" loading></wu-search>
    </div>
  `,
};

export const WithValue: Story = {
  render: () => html`
    <div style="max-width:320px">
      <wu-search value="hello world" clearable></wu-search>
    </div>
  `,
};

export const CustomPlaceholder: Story = {
  render: () => html`
    <div style="max-width:320px">
      <wu-search placeholder="Search users, teams, or projects…"></wu-search>
    </div>
  `,
};
