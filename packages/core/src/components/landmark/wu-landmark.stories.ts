import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Accessibility/Landmark',
  component: 'wu-landmark',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-landmark label="Landmark"></wu-landmark>`,
};

export const WithValue: Story = {
  render: () => html`<wu-landmark label="Landmark" value="Sample value"></wu-landmark>`,
};
