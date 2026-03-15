import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'Enterprise/Emoji Picker', component: 'wu-emoji-picker', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-emoji-picker></wu-emoji-picker>`,
};
