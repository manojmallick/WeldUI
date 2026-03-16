import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Media/ImageCompare',
  component: 'wu-image-compare',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-image-compare label="ImageCompare"></wu-image-compare>`,
};

export const WithValue: Story = {
  render: () => html`<wu-image-compare label="ImageCompare" value="Sample value"></wu-image-compare>`,
};
