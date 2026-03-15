import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Auth & Security/Signup Form',
  component: 'wu-signup-form',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-signup-form></wu-signup-form>`,
};

export const WithError: Story = {
  render: () => html`<wu-signup-form error="Email already in use."></wu-signup-form>`,
};

export const Loading: Story = {
  render: () => html`<wu-signup-form loading></wu-signup-form>`,
};
