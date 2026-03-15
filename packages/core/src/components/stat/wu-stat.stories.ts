import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/Stat', component: 'wu-stat', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<wu-stat label="Monthly Revenue" value="$48,200" delta="+8.2%" trend="up" description="vs last month"></wu-stat>` };
export const Down: Story = { render: () => html`<wu-stat label="Churn Rate" value="2.4%" delta="+0.3%" trend="down" description="Monthly average"></wu-stat>` };
export const Simple: Story = { render: () => html`<wu-stat label="Uptime" value="99.97%"></wu-stat>` };
export const Dashboard: Story = { render: () => html`
  <div style="display:flex;gap:16px;flex-wrap:wrap">
    <wu-stat label="Users" value="12,453" delta="+142" trend="up" description="New this month"></wu-stat>
    <wu-stat label="Revenue" value="$84,200" delta="+12%" trend="up"></wu-stat>
    <wu-stat label="Bounce Rate" value="34.2%" delta="-2.1%" trend="up" description="Lower is better"></wu-stat>
    <wu-stat label="Support Tickets" value="23" delta="+5" trend="down"></wu-stat>
  </div>`
};
