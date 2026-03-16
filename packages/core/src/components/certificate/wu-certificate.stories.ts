import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Print/Certificate',
  component: 'wu-certificate',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-certificate label="Certificate"></wu-certificate>`,
};

export const WithValue: Story = {
  render: () => html`<wu-certificate label="Certificate" value="Sample value"></wu-certificate>`,
};
