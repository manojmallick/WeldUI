import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Accessibility/SkipLink',
  component: 'wu-skip-link',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-skip-link label="SkipLink"></wu-skip-link>`,
};

export const WithValue: Story = {
  render: () => html`<wu-skip-link label="SkipLink" value="Sample value"></wu-skip-link>`,
};
