import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Print/LabelSheet',
  component: 'wu-label-sheet',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-label-sheet label="LabelSheet"></wu-label-sheet>`,
};

export const WithValue: Story = {
  render: () => html`<wu-label-sheet label="LabelSheet" value="Sample value"></wu-label-sheet>`,
};
