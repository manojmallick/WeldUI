import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'Enterprise/Signature', component: 'wu-signature', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-signature style="width:400px"></wu-signature>`,
};

export const Tall: Story = {
  render: () => html`<wu-signature height="220" style="width:400px"></wu-signature>`,
};
