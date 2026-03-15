import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Auth & Security/Session Timeout',
  component: 'wu-session-timeout',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Visible: Story = {
  render: () => html`
    <wu-session-timeout visible seconds-remaining="90"></wu-session-timeout>
  `,
};

export const Hidden: Story = {
  render: () => html`
    <p>Session timeout is not visible — set the <code>visible</code> attribute to show it.</p>
    <wu-session-timeout seconds-remaining="30"></wu-session-timeout>
  `,
};
