import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Maps/Map',
  component: 'wu-map',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-map label="Map"></wu-map>`,
};

export const WithValue: Story = {
  render: () => html`<wu-map label="Map" value="Sample value"></wu-map>`,
};
