import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/RealTime/TypingUsers',
  component: 'wu-typing-users',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const OneUser: Story = {
  render: () => html`<wu-typing-users .users=${['Alice']}></wu-typing-users>`,
};

export const TwoUsers: Story = {
  render: () => html`<wu-typing-users .users=${['Alice', 'Bob']}></wu-typing-users>`,
};

export const ManyUsers: Story = {
  render: () => html`<wu-typing-users .users=${['Alice', 'Bob', 'Carol', 'Dave']}></wu-typing-users>`,
};

export const Empty: Story = {
  render: () => html`<wu-typing-users .users=${[]}></wu-typing-users>`,
};
