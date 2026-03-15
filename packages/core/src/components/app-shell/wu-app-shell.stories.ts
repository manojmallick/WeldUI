import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/SaaS & App Shell/App Shell',
  component: 'wu-app-shell',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-app-shell style="height:400px">
      <div slot="sidebar" style="padding:16px;font-family:var(--wu-font-sans);font-size:14px;color:var(--wu-color-text-secondary)">
        <strong>Navigation</strong>
        <nav style="margin-top:16px;display:flex;flex-direction:column;gap:8px">
          <a href="#" style="color:var(--wu-color-primary);text-decoration:none">Dashboard</a>
          <a href="#" style="color:var(--wu-color-text);text-decoration:none">Analytics</a>
          <a href="#" style="color:var(--wu-color-text);text-decoration:none">Settings</a>
        </nav>
      </div>
      <div slot="header" style="padding:16px;font-family:var(--wu-font-sans);font-weight:600;color:var(--wu-color-text)">App Header</div>
      <div style="font-family:var(--wu-font-sans);color:var(--wu-color-text)">Main content area</div>
    </wu-app-shell>
  `,
};

export const CollapsedSidebar: Story = {
  render: () => html`
    <wu-app-shell sidebar-collapsed style="height:400px">
      <div slot="sidebar"></div>
      <div slot="header" style="padding:16px;font-family:var(--wu-font-sans);font-weight:600;color:var(--wu-color-text)">Collapsed</div>
      <div style="font-family:var(--wu-font-sans);color:var(--wu-color-text)">Content</div>
    </wu-app-shell>
  `,
};
