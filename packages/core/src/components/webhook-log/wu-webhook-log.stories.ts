import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/DeveloperExperience/WebhookLog',
  component: 'wu-webhook-log',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-webhook-log label="WebhookLog"></wu-webhook-log>`,
};

export const WithValue: Story = {
  render: () => html`<wu-webhook-log label="WebhookLog" value="Sample value"></wu-webhook-log>`,
};
