import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/Timeline', component: 'wu-timeline', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`
  <wu-timeline>
    <wu-timeline-item title="Pull request merged" meta="2 hours ago" status="success">Merged feature/auth into main</wu-timeline-item>
    <wu-timeline-item title="Build running" meta="1 hour ago" status="pending">CI pipeline in progress…</wu-timeline-item>
    <wu-timeline-item title="Deployment failed" meta="30 min ago" status="danger">Error: Container OOMKilled</wu-timeline-item>
    <wu-timeline-item title="Rollback complete" meta="25 min ago" status="warning">Reverted to previous version</wu-timeline-item>
  </wu-timeline>`
};
