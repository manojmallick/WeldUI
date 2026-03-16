import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Print/Receipt',
  component: 'wu-receipt',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-receipt label="Receipt"></wu-receipt>`,
};

export const WithValue: Story = {
  render: () => html`<wu-receipt label="Receipt" value="Sample value"></wu-receipt>`,
};
