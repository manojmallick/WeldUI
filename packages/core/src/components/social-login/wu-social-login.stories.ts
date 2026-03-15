import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Auth & Security/Social Login',
  component: 'wu-social-login',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-social-login style="max-width:360px"></wu-social-login>`,
};

export const CustomProviders: Story = {
  render: () => html`
    <wu-social-login
      style="max-width:360px"
      .providers=${[
        { id: 'google', label: 'Continue with Google' },
        { id: 'github', label: 'Continue with GitHub' },
      ]}
    ></wu-social-login>
  `,
};
