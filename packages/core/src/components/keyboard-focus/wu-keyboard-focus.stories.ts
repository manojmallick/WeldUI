import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Accessibility/KeyboardFocus',
  component: 'wu-keyboard-focus',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-keyboard-focus label="KeyboardFocus"></wu-keyboard-focus>`,
};

export const WithValue: Story = {
  render: () => html`<wu-keyboard-focus label="KeyboardFocus" value="Sample value"></wu-keyboard-focus>`,
};
