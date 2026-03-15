import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const sampleItems = [
  { id: '1', label: 'Create your account', completed: true },
  { id: '2', label: 'Set up your profile', completed: false },
  { id: '3', label: 'Invite your first team member', completed: false },
  { id: '4', label: 'Install the CLI', completed: false },
];

const meta: Meta = {
  title: 'V3/Feedback & Validation/Onboarding Checklist',
  component: 'wu-onboarding-checklist',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-onboarding-checklist
      title="Getting Started"
      .items=${sampleItems}
    ></wu-onboarding-checklist>
  `,
};

export const AllComplete: Story = {
  render: () => html`
    <wu-onboarding-checklist
      title="Onboarding Complete!"
      .items=${sampleItems.map((i) => ({ ...i, completed: true }))}
    ></wu-onboarding-checklist>
  `,
};

export const Empty: Story = {
  render: () => html`
    <wu-onboarding-checklist title="No Steps Yet" .items=${[]}></wu-onboarding-checklist>
  `,
};
