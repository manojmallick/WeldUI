import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Radio',
  component: 'wu-radio-group',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-radio-group name="plan" value="pro" label="Choose plan">
      <wu-radio value="free">Free</wu-radio>
      <wu-radio value="pro">Pro</wu-radio>
      <wu-radio value="enterprise">Enterprise</wu-radio>
    </wu-radio-group>
  `,
};

export const Horizontal: Story = {
  render: () => html`
    <wu-radio-group name="size" orientation="horizontal" label="Size">
      <wu-radio value="sm">Small</wu-radio>
      <wu-radio value="md">Medium</wu-radio>
      <wu-radio value="lg">Large</wu-radio>
    </wu-radio-group>
  `,
};

export const WithError: Story = {
  render: () => html`
    <wu-radio-group name="agreed" error="You must select an option" label="Do you agree?">
      <wu-radio value="yes">Yes</wu-radio>
      <wu-radio value="no">No</wu-radio>
    </wu-radio-group>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <wu-radio-group name="plan" value="pro" disabled label="Plan (disabled)">
      <wu-radio value="free">Free</wu-radio>
      <wu-radio value="pro">Pro</wu-radio>
    </wu-radio-group>
  `,
};
