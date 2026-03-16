import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Analytics/EventTimeline',
  component: 'wu-event-timeline',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-event-timeline label="EventTimeline"></wu-event-timeline>`,
};

export const WithValue: Story = {
  render: () => html`<wu-event-timeline label="EventTimeline" value="Sample value"></wu-event-timeline>`,
};
