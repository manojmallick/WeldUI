import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/PWA/ShareButton',
  component: 'wu-share-button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-share-button label="ShareButton"></wu-share-button>`,
};

export const WithValue: Story = {
  render: () => html`<wu-share-button label="ShareButton" value="Sample value"></wu-share-button>`,
};
