import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/RealTime/UserCursor',
  component: 'wu-user-cursor',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="position:relative;width:300px;height:200px;background:var(--wu-color-surface);border:1px solid var(--wu-color-border);border-radius:8px;">
      <wu-user-cursor name="Alice" color="#3b82f6" x="80" y="60"></wu-user-cursor>
      <wu-user-cursor name="Bob" color="#22c55e" x="160" y="110"></wu-user-cursor>
    </div>
  `,
};
