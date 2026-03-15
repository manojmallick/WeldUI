import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Auth & Security/Captcha',
  component: 'wu-captcha',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-captcha></wu-captcha>`,
};

export const Verified: Story = {
  render: () => html`<wu-captcha verified></wu-captcha>`,
};
