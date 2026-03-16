import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/DeveloperExperience/EnvVars',
  component: 'wu-env-vars',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-env-vars label="EnvVars"></wu-env-vars>`,
};

export const WithValue: Story = {
  render: () => html`<wu-env-vars label="EnvVars" value="Sample value"></wu-env-vars>`,
};
