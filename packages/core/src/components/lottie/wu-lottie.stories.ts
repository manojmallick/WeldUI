import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Media/Lottie',
  component: 'wu-lottie',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-lottie label="Lottie"></wu-lottie>`,
};

export const WithValue: Story = {
  render: () => html`<wu-lottie label="Lottie" value="Sample value"></wu-lottie>`,
};
