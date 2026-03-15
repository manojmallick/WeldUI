import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Media/Mention', component: 'wu-mention', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const users = [
  { id: '1', name: 'Alice Smith' }, { id: '2', name: 'Bob Jones' },
  { id: '3', name: 'Charlie Brown' }, { id: '4', name: 'Diana Prince' },
];

export const Default: Story = { render: () => { const el = document.createElement('wu-mention') as any; el.users = users; return el; } };
export const Multiline: Story = { render: () => { const el = document.createElement('wu-mention') as any; el.users = users; el.multiline = true; el.placeholder = 'Write a comment, type @ to mention...'; return el; } };
