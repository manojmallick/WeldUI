import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Components/EmptyState',
  component: 'wu-empty-state',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Nothing here yet',
    description: 'Get started by creating your first item.',
  },
  render: (args) => html`
    <wu-empty-state title=${args.title} description=${args.description}></wu-empty-state>
  `,
};

export const WithAction: Story = {
  render: () => html`
    <wu-empty-state
      title="No projects found"
      description="Create a new project to get started."
    >
      <wu-button slot="actions" variant="primary">New project</wu-button>
      <wu-button slot="actions" variant="secondary">Browse templates</wu-button>
    </wu-empty-state>
  `,
};

export const NoData: Story = {
  render: () => html`
    <div style="border:1px solid var(--wu-color-border); border-radius:var(--wu-radius-lg); padding:var(--wu-space-4)">
      <wu-empty-state
        title="No records"
        description="There are no items matching your current filters."
      >
        <wu-button slot="actions" variant="ghost">Clear filters</wu-button>
      </wu-empty-state>
    </div>
  `,
};

export const CustomIcon: Story = {
  render: () => html`
    <wu-empty-state
      title="No messages"
      description="Your inbox is empty. Start a conversation."
    >
      <svg slot="icon" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" stroke-width="2"/>
        <path d="M6 16l18 12 18-12" stroke="currentColor" stroke-width="2"/>
      </svg>
      <wu-button slot="actions" variant="primary">Compose message</wu-button>
    </wu-empty-state>
  `,
};
