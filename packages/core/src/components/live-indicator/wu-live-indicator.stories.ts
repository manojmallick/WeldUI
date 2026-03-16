import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/RealTime/LiveIndicator',
  component: 'wu-live-indicator',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-live-indicator></wu-live-indicator>`,
};

export const CustomLabel: Story = {
  render: () => html`<wu-live-indicator label="STREAMING"></wu-live-indicator>`,
};
