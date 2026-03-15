import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/SaaS & App Shell/App Header',
  component: 'wu-app-header',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-app-header heading="MyApp">
      <nav slot="nav" style="display:flex;gap:8px">
        <a href="#" style="color:var(--wu-color-primary);font-family:var(--wu-font-sans);font-size:14px;text-decoration:none">Dashboard</a>
        <a href="#" style="color:var(--wu-color-text);font-family:var(--wu-font-sans);font-size:14px;text-decoration:none">Projects</a>
      </nav>
      <div slot="actions" style="display:flex;gap:8px;align-items:center">
        <wu-button variant="ghost" size="sm">Sign out</wu-button>
      </div>
    </wu-app-header>
  `,
};
