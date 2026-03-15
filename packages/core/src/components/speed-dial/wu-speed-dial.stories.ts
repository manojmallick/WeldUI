import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Navigation/SpeedDial', component: 'wu-speed-dial', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const actions = [
  { label: 'New Document', value: 'doc', icon: '📄' },
  { label: 'Upload File', value: 'upload', icon: '📤' },
  { label: 'New Folder', value: 'folder', icon: '📁' },
];

export const Default: Story = {
  render: () => html`
    <div style="position:relative;height:250px">
      <wu-speed-dial .actions=${actions} .open=${true}></wu-speed-dial>
    </div>`
};

export const LeftDirection: Story = {
  render: () => html`
    <div style="position:relative;height:120px;">
      <wu-speed-dial direction="left" .actions=${actions} .open=${true}></wu-speed-dial>
    </div>`
};
