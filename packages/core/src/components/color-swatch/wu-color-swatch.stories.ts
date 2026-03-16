import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Media/ColorSwatch',
  component: 'wu-color-swatch',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-color-swatch label="ColorSwatch"></wu-color-swatch>`,
};

export const WithValue: Story = {
  render: () => html`<wu-color-swatch label="ColorSwatch" value="Sample value"></wu-color-swatch>`,
};
