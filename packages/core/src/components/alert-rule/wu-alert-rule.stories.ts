import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Analytics/AlertRule',
  component: 'wu-alert-rule',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-alert-rule label="AlertRule"></wu-alert-rule>`,
};

export const WithValue: Story = {
  render: () => html`<wu-alert-rule label="AlertRule" value="Sample value"></wu-alert-rule>`,
};
