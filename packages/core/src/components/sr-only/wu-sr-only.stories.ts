import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Accessibility/SrOnly',
  component: 'wu-sr-only',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-sr-only label="SrOnly"></wu-sr-only>`,
};

export const WithValue: Story = {
  render: () => html`<wu-sr-only label="SrOnly" value="Sample value"></wu-sr-only>`,
};
