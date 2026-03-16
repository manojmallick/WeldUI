import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/DeveloperExperience/Terminal',
  component: 'wu-terminal',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-terminal label="Terminal"></wu-terminal>`,
};

export const WithValue: Story = {
  render: () => html`<wu-terminal label="Terminal" value="Sample value"></wu-terminal>`,
};
