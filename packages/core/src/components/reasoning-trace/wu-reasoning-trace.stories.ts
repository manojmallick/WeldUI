import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/AI-LLM/ReasoningTrace',
  component: 'wu-reasoning-trace',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const steps = [
  'The user is asking about TypeScript generics.',
  'I should explain what generics are and why they are useful.',
  'I will provide a simple code example to illustrate.',
  'I will mention common use cases such as collections and utilities.',
];

export const Collapsed: Story = {
  render: () => html`
    <wu-reasoning-trace .steps=${steps}></wu-reasoning-trace>
  `,
};

export const Expanded: Story = {
  render: () => html`
    <wu-reasoning-trace .steps=${steps} open></wu-reasoning-trace>
  `,
};
