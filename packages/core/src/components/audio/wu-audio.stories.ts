import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'Enterprise/Audio', component: 'wu-audio', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-audio src="https://www.w3schools.com/html/horse.ogg"></wu-audio>
  `,
};

export const NoSource: Story = {
  render: () => html`<wu-audio></wu-audio>`,
};
