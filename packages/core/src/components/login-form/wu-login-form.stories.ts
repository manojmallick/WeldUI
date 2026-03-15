import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Auth & Security/Login Form',
  component: 'wu-login-form',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-login-form></wu-login-form>`,
};

export const WithRemember: Story = {
  render: () => html`<wu-login-form show-remember></wu-login-form>`,
};

export const WithError: Story = {
  render: () => html`<wu-login-form error="Invalid email or password."></wu-login-form>`,
};

export const Loading: Story = {
  render: () => html`<wu-login-form loading></wu-login-form>`,
};
