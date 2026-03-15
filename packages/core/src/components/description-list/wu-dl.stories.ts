import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/DescriptionList', component: 'wu-dl', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`
  <wu-dl>
    <wu-dt>Name</wu-dt><wu-dd>Manoj Mallick</wu-dd>
    <wu-dt>Company</wu-dt><wu-dd>LearnHubPlay BV</wu-dd>
    <wu-dt>Location</wu-dt><wu-dd>Netherlands</wu-dd>
    <wu-dt>Status</wu-dt><wu-dd>Active</wu-dd>
  </wu-dl>` };
export const Stacked: Story = { render: () => html`
  <wu-dl layout="stacked">
    <wu-dt>API Version</wu-dt><wu-dd>v2.4.1</wu-dd>
    <wu-dt>Last Deploy</wu-dt><wu-dd>2024-06-10 14:32 UTC</wu-dd>
  </wu-dl>` };
