import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'Enterprise/Event Calendar', component: 'wu-event-calendar', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const now = new Date();
const y = now.getFullYear();
const m = String(now.getMonth() + 1).padStart(2, '0');

const sampleEvents = [
  { id: '1', title: 'Team standup', date: `${y}-${m}-05` },
  { id: '2', title: 'Product demo', date: `${y}-${m}-12` },
  { id: '3', title: 'Sprint planning', date: `${y}-${m}-15`, color: '#7c3aed' },
  { id: '4', title: 'All hands', date: `${y}-${m}-20` },
];

export const Default: Story = {
  render: () => html`
    <wu-event-calendar .events=${sampleEvents}></wu-event-calendar>
  `,
};

export const Empty: Story = {
  render: () => html`<wu-event-calendar></wu-event-calendar>`,
};
