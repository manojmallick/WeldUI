import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Maps/RouteDisplay',
  component: 'wu-route-display',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-route-display label="RouteDisplay"></wu-route-display>`,
};

export const WithValue: Story = {
  render: () => html`<wu-route-display label="RouteDisplay" value="Sample value"></wu-route-display>`,
};
