import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Auth & Security/Password Strength',
  component: 'wu-password-strength',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const AllLevels: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:200px">
      <wu-password-strength .score=${1}></wu-password-strength>
      <wu-password-strength .score=${2}></wu-password-strength>
      <wu-password-strength .score=${3}></wu-password-strength>
      <wu-password-strength .score=${4}></wu-password-strength>
    </div>
  `,
};

export const FromPassword: Story = {
  render: () => html`
    <wu-password-strength password="Abc123!@#"></wu-password-strength>
  `,
};
