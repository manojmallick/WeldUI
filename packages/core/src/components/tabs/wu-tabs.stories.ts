import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Tabs',
  component: 'wu-tabs',
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-tabs style="max-width:600px">
      <wu-tab slot="tabs" panel="overview">Overview</wu-tab>
      <wu-tab slot="tabs" panel="activity">Activity</wu-tab>
      <wu-tab slot="tabs" panel="settings">Settings</wu-tab>
      <wu-tab-panel name="overview">
        <p style="padding:16px 0;color:var(--wu-color-text-secondary)">Overview content</p>
      </wu-tab-panel>
      <wu-tab-panel name="activity">
        <p style="padding:16px 0;color:var(--wu-color-text-secondary)">Activity content</p>
      </wu-tab-panel>
      <wu-tab-panel name="settings">
        <p style="padding:16px 0;color:var(--wu-color-text-secondary)">Settings content</p>
      </wu-tab-panel>
    </wu-tabs>
  `,
};

export const Vertical: Story = {
  render: () => html`
    <wu-tabs orientation="vertical" style="max-width:600px">
      <wu-tab slot="tabs" panel="profile">Profile</wu-tab>
      <wu-tab slot="tabs" panel="billing">Billing</wu-tab>
      <wu-tab slot="tabs" panel="security">Security</wu-tab>
      <wu-tab-panel name="profile">
        <p style="color:var(--wu-color-text-secondary)">Profile settings</p>
      </wu-tab-panel>
      <wu-tab-panel name="billing">
        <p style="color:var(--wu-color-text-secondary)">Billing settings</p>
      </wu-tab-panel>
      <wu-tab-panel name="security">
        <p style="color:var(--wu-color-text-secondary)">Security settings</p>
      </wu-tab-panel>
    </wu-tabs>
  `,
};
