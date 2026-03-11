import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Command',
  component: 'wu-command',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const items = [
  { id: '1', label: 'New File', group: 'File', shortcut: '⌘N' },
  { id: '2', label: 'Open File', group: 'File', shortcut: '⌘O' },
  { id: '3', label: 'Save', group: 'File', shortcut: '⌘S' },
  { id: '4', label: 'Close Tab', group: 'File', shortcut: '⌘W' },
  { id: '5', label: 'Theme: Light', group: 'Appearance' },
  { id: '6', label: 'Theme: Dark', group: 'Appearance' },
  { id: '7', label: 'Open Settings', group: 'Settings', shortcut: '⌘,' },
  { id: '8', label: 'Keyboard Shortcuts', group: 'Settings' },
  { id: '9', label: 'About WeldUI', keywords: ['info', 'version', 'help'] },
];

export const OpenByDefault: Story = {
  render: () => {
    const el = document.createElement('wu-command') as any;
    el.open = true;
    el.items = items;
    el.style.display = 'block';
    el.style.height = '600px';
    el.style.position = 'relative';
    return el;
  },
};

export const WithTrigger: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = '20px';

    const btn = document.createElement('wu-button') as any;
    btn.textContent = 'Open Command Palette (⌘K)';

    const cmd = document.createElement('wu-command') as any;
    cmd.items = items;

    btn.addEventListener('wu-click', () => { cmd.open = true; });

    wrapper.appendChild(btn);
    wrapper.appendChild(cmd);
    return wrapper;
  },
};
