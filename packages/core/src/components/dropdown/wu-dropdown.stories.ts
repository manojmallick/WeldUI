import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/Dropdown',
  component: 'wu-dropdown',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const fileItems = [
  { label: 'New File', value: 'new', icon: '📄', group: 'File' },
  { label: 'Open…', value: 'open', icon: '📂', group: 'File' },
  { label: 'Save', value: 'save', icon: '💾', group: 'File' },
  { separator: true, label: '', value: '' },
  { label: 'Cut', value: 'cut', icon: '✂️', group: 'Edit' },
  { label: 'Copy', value: 'copy', icon: '📋', group: 'Edit' },
  { label: 'Paste', value: 'paste', icon: '📌', group: 'Edit', disabled: true },
  { separator: true, label: '', value: '' },
  { label: 'Delete', value: 'delete', danger: true, icon: '🗑️' },
];

export const Default: Story = {
  render: () => html`
    <div style="padding:60px">
      <wu-dropdown .items=${[
        { label: 'Edit', value: 'edit', icon: '✏️' },
        { label: 'Duplicate', value: 'duplicate', icon: '📑' },
        { separator: true, label: '', value: '' },
        { label: 'Delete', value: 'delete', danger: true, icon: '🗑️' },
      ]}>
        <wu-button slot="trigger">Actions ▾</wu-button>
      </wu-dropdown>
    </div>`,
};

export const WithGroups: Story = {
  name: 'With Group Headers',
  render: () => html`
    <div style="padding:60px">
      <wu-dropdown .items=${fileItems} @wu-select=${(e: CustomEvent) => console.log(e.detail)}>
        <wu-button slot="trigger">File ▾</wu-button>
      </wu-dropdown>
    </div>`,
};

export const Searchable: Story = {
  name: 'Searchable',
  render: () => html`
    <div style="padding:60px">
      <wu-dropdown searchable .items=${[
        { label: 'Dashboard', value: 'dashboard', icon: '🏠', description: 'Overview & stats' },
        { label: 'Projects', value: 'projects', icon: '📁', description: 'All active projects' },
        { label: 'Team', value: 'team', icon: '👥', description: 'Manage members' },
        { label: 'Reports', value: 'reports', icon: '📊', description: 'Analytics & exports' },
        { label: 'Settings', value: 'settings', icon: '⚙️', description: 'Account & preferences' },
        { label: 'Help & Docs', value: 'help', icon: '❓', description: 'Documentation' },
      ]}>
        <wu-button slot="trigger">Navigate ▾</wu-button>
      </wu-dropdown>
      <p style="margin-top:16px; font-size:13px; color:var(--wu-color-text-secondary)">
        Type in the search box to filter menu items.
      </p>
    </div>`,
};

export const WithChecked: Story = {
  name: 'With Selection State',
  render: () => html`
    <div style="padding:60px">
      <wu-dropdown .items=${[
        { label: 'Compact', value: 'compact', checked: false },
        { label: 'Comfortable', value: 'comfortable', checked: true },
        { label: 'Spacious', value: 'spacious', checked: false },
      ]}>
        <wu-button slot="trigger" variant="secondary">Density ▾</wu-button>
      </wu-dropdown>
    </div>`,
};

export const WithDescriptions: Story = {
  name: 'With Descriptions',
  render: () => html`
    <div style="padding:60px">
      <wu-dropdown .items=${[
        { label: 'Personal', value: 'personal', icon: '👤', description: 'Free — 1 user', checked: true },
        { label: 'Team', value: 'team', icon: '👥', description: 'From €49/mo — up to 10 users' },
        { label: 'Enterprise', value: 'enterprise', icon: '🏢', description: 'Custom pricing — unlimited' },
      ]}>
        <wu-button slot="trigger" variant="secondary">Switch plan ▾</wu-button>
      </wu-dropdown>
    </div>`,
};
