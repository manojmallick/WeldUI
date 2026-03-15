import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'V3/SaaS & App Shell/Keyboard Shortcuts', component: 'wu-keyboard-shortcuts', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const shortcuts = [
  { keys: ['⌘', 'K'], description: 'Open command palette', group: 'Navigation' },
  { keys: ['⌘', '/'], description: 'Toggle sidebar', group: 'Navigation' },
  { keys: ['⌘', 'S'], description: 'Save', group: 'Editing' },
  { keys: ['⌘', 'Z'], description: 'Undo', group: 'Editing' },
  { keys: ['⌘', '⇧', 'Z'], description: 'Redo', group: 'Editing' },
  { keys: ['Esc'], description: 'Close modal / panel' },
];

export const Default: Story = {
  render: () => html`<wu-keyboard-shortcuts .shortcuts=${shortcuts} style="max-width:420px"></wu-keyboard-shortcuts>`,
};
