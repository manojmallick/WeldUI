import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Accessibility/ReducedMotion',
  component: 'wu-reduced-motion',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-reduced-motion label="ReducedMotion"></wu-reduced-motion>`,
};

export const WithValue: Story = {
  render: () => html`<wu-reduced-motion label="ReducedMotion" value="Sample value"></wu-reduced-motion>`,
};
