import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Components/Textarea',
  component: 'wu-textarea',
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-textarea label="Message" placeholder="Enter your message..." style="max-width:320px"></wu-textarea>`
};

export const WithCharCount: Story = {
  render: () => html`<wu-textarea label="Bio" maxlength="200" placeholder="Tell us about yourself" style="max-width:320px"></wu-textarea>`
};
