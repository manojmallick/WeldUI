import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Feedback & Validation/Survey',
  component: 'wu-survey',
  tags: ['autodocs'],
  argTypes: {
    question: { control: 'text' },
    withComment: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { question: 'How likely are you to recommend us to a colleague?' },
  render: (args) => html`
    <wu-survey .question=${args.question}></wu-survey>
  `,
};

export const WithComment: Story = {
  render: () => html`
    <wu-survey with-comment question="How satisfied are you with our product?"></wu-survey>
  `,
};

export const CustomQuestion: Story = {
  render: () => html`
    <wu-survey question="How would you rate your onboarding experience?"></wu-survey>
  `,
};
