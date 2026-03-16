import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Media/Icon',
  component: 'wu-icon',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-icon label="Icon"></wu-icon>`,
};

export const WithValue: Story = {
  render: () => html`<wu-icon label="Icon" value="Sample value"></wu-icon>`,
};
