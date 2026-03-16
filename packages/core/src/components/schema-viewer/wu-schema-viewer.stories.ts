import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/DeveloperExperience/SchemaViewer',
  component: 'wu-schema-viewer',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-schema-viewer label="SchemaViewer"></wu-schema-viewer>`,
};

export const WithValue: Story = {
  render: () => html`<wu-schema-viewer label="SchemaViewer" value="Sample value"></wu-schema-viewer>`,
};
