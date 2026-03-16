import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/DeveloperExperience/ApiExplorer',
  component: 'wu-api-explorer',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-api-explorer label="ApiExplorer"></wu-api-explorer>`,
};

export const WithValue: Story = {
  render: () => html`<wu-api-explorer label="ApiExplorer" value="Sample value"></wu-api-explorer>`,
};
