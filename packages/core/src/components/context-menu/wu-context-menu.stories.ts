import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const items = [{ label: '✏️ Edit', value: 'edit' }, { label: '📋 Copy', value: 'copy' }, { separator: true, label: '', value: '' }, { label: '🗑️ Delete', value: 'delete', danger: true }];
const meta: Meta = { title: 'Components/ContextMenu', component: 'wu-context-menu', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`<wu-context-menu open x="20" y="20" .items=${items}></wu-context-menu>` };
