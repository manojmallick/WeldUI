import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Media/ColorPalette',
  component: 'wu-color-palette',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-color-palette label="ColorPalette"></wu-color-palette>`,
};

export const WithValue: Story = {
  render: () => html`<wu-color-palette label="ColorPalette" value="Sample value"></wu-color-palette>`,
};
