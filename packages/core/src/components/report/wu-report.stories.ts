import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Print/Report',
  component: 'wu-report',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-report label="Report"></wu-report>`,
};

export const WithValue: Story = {
  render: () => html`<wu-report label="Report" value="Sample value"></wu-report>`,
};
