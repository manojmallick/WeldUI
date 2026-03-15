import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Auth & Security/API Key Display',
  component: 'wu-api-key-display',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-api-key-display
      label="Secret Key"
      value="sk_demo_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    ></wu-api-key-display>
  `,
};

export const Empty: Story = {
  render: () => html`<wu-api-key-display label="API Key"></wu-api-key-display>`,
};
