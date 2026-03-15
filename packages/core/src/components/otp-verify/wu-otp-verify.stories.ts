import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Auth & Security/OTP Verify',
  component: 'wu-otp-verify',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-otp-verify hint="Sent to your phone number"></wu-otp-verify>`,
};

export const FourDigit: Story = {
  render: () => html`<wu-otp-verify digits="4" heading="Enter PIN"></wu-otp-verify>`,
};
