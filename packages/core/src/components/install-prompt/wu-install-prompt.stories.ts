import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/PWA/InstallPrompt',
  component: 'wu-install-prompt',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-install-prompt label="InstallPrompt"></wu-install-prompt>`,
};

export const WithValue: Story = {
  render: () => html`<wu-install-prompt label="InstallPrompt" value="Sample value"></wu-install-prompt>`,
};
