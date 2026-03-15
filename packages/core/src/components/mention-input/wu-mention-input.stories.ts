import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/SaaS & App Shell/Mention Input',
  component: 'wu-mention-input',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-mention-input style="max-width:400px"></wu-mention-input>`,
};

export const WithValue: Story = {
  render: () => html`<wu-mention-input value="Hey @alice, can you review this?" style="max-width:400px"></wu-mention-input>`,
};
