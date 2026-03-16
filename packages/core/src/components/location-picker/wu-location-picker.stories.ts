import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Maps/LocationPicker',
  component: 'wu-location-picker',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-location-picker label="LocationPicker"></wu-location-picker>`,
};

export const WithValue: Story = {
  render: () => html`<wu-location-picker label="LocationPicker" value="Sample value"></wu-location-picker>`,
};
