import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Accessibility/HighContrast',
  component: 'wu-high-contrast',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-high-contrast label="HighContrast"></wu-high-contrast>`,
};

export const WithValue: Story = {
  render: () => html`<wu-high-contrast label="HighContrast" value="Sample value"></wu-high-contrast>`,
};
