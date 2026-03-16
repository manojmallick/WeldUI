import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/RealTime/CollaborativeForm',
  component: 'wu-collaborative-form',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-collaborative-form style="max-width:400px"></wu-collaborative-form>`,
};

export const WithLockedField: Story = {
  render: () => html`
    <wu-collaborative-form
      style="max-width:400px"
      .fields=${[
        { name: 'title', label: 'Title', type: 'text', value: 'Q1 Report', lockedBy: 'Alice' },
        { name: 'description', label: 'Description', type: 'textarea', value: '' },
      ]}
    ></wu-collaborative-form>
  `,
};
