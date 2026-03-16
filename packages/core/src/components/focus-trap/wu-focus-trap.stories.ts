import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Accessibility/FocusTrap',
  component: 'wu-focus-trap',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-focus-trap label="FocusTrap"></wu-focus-trap>`,
};

export const WithValue: Story = {
  render: () => html`<wu-focus-trap label="FocusTrap" value="Sample value"></wu-focus-trap>`,
};
