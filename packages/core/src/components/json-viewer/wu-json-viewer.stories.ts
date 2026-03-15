import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Enterprise/JSON Viewer',
  component: 'wu-json-viewer',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const data = {
  name: 'WeldUI',
  version: '1.0.0',
  active: true,
  count: 42,
  tags: ['web-components', 'lit', 'typescript'],
  config: { theme: 'ocean', locale: 'en-US', debug: false },
  extra: null,
};

export const Default: Story = {
  render: () => html`<wu-json-viewer .data=${data} expand-depth="2" style="max-width:480px"></wu-json-viewer>`,
};

export const Collapsed: Story = {
  render: () => html`<wu-json-viewer .data=${data} expand-depth="0" style="max-width:480px"></wu-json-viewer>`,
};
