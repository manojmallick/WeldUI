import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Accessibility/Announce',
  component: 'wu-announce',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-announce label="Announce"></wu-announce>`,
};

export const WithValue: Story = {
  render: () => html`<wu-announce label="Announce" value="Sample value"></wu-announce>`,
};
