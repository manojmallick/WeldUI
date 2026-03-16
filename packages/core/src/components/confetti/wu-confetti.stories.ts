import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Media/Confetti',
  component: 'wu-confetti',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-confetti label="Confetti"></wu-confetti>`,
};

export const WithValue: Story = {
  render: () => html`<wu-confetti label="Confetti" value="Sample value"></wu-confetti>`,
};
