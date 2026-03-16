import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Media/ImageCrop',
  component: 'wu-image-crop',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-image-crop label="ImageCrop"></wu-image-crop>`,
};

export const WithValue: Story = {
  render: () => html`<wu-image-crop label="ImageCrop" value="Sample value"></wu-image-crop>`,
};
