import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Layout/SplitPane', component: 'wu-split-pane', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  render: () => html`
    <wu-split-pane style="height:300px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <div slot="primary" style="padding:16px;background:var(--wu-color-surface);height:100%">
        <strong>Sidebar</strong><br>Drag the divider →
      </div>
      <div slot="secondary" style="padding:16px;height:100%">
        <strong>Main Content</strong><br>This panel fills remaining space.
      </div>
    </wu-split-pane>`
};

export const Vertical: Story = {
  render: () => html`
    <wu-split-pane orientation="vertical" style="height:400px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <div slot="primary" style="padding:16px;background:var(--wu-color-surface)">
        <strong>Top Panel</strong><br>Drag the divider ↓
      </div>
      <div slot="secondary" style="padding:16px">
        <strong>Bottom Panel</strong>
      </div>
    </wu-split-pane>`
};
