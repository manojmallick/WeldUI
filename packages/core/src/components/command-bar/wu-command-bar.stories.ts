import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/SaaS & App Shell/Command Bar',
  component: 'wu-command-bar',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    shortcut: { control: 'text' },
    readonlyTrigger: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-command-bar style="max-width:380px"></wu-command-bar>`,
};

export const ReadonlyTrigger: Story = {
  render: () => html`<wu-command-bar readonly-trigger style="max-width:380px"></wu-command-bar>`,
};

export const NoShortcut: Story = {
  render: () => html`<wu-command-bar shortcut="" placeholder="Search…" style="max-width:380px"></wu-command-bar>`,
};
