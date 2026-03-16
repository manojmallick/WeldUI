import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Maps/Geofence',
  component: 'wu-geofence',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-geofence label="Geofence"></wu-geofence>`,
};

export const WithValue: Story = {
  render: () => html`<wu-geofence label="Geofence" value="Sample value"></wu-geofence>`,
};
