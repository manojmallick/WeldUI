import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/DeveloperExperience/CronBuilder',
  component: 'wu-cron-builder',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-cron-builder label="CronBuilder"></wu-cron-builder>`,
};

export const WithValue: Story = {
  render: () => html`<wu-cron-builder label="CronBuilder" value="Sample value"></wu-cron-builder>`,
};
