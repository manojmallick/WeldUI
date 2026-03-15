import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Feedback & Validation/Feedback',
  component: 'wu-feedback',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['thumbs', 'stars'] },
    prompt: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Thumbs: Story = {
  render: () => html`<wu-feedback variant="thumbs" prompt="Was this page helpful?"></wu-feedback>`,
};

export const Stars: Story = {
  render: () => html`<wu-feedback variant="stars" prompt="Rate your experience:"></wu-feedback>`,
};

export const NoPrompt: Story = {
  render: () => html`<wu-feedback variant="stars" prompt=""></wu-feedback>`,
};
