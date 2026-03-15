import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'Enterprise/Diff Viewer', component: 'wu-diff-viewer', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const lines = [
  { type: 'unchanged', content: 'export class WuButton extends LitElement {', lineOld: 1, lineNew: 1 },
  { type: 'removed',   content: '  @property() size = "md";', lineOld: 2 },
  { type: 'added',     content: '  @property({ reflect: true }) size = "md";', lineNew: 2 },
  { type: 'unchanged', content: '  @property({ type: Boolean }) disabled = false;', lineOld: 3, lineNew: 3 },
];

export const Default: Story = {
  render: () => html`<wu-diff-viewer .lines=${lines} filename="wu-button.ts" style="max-width:600px"></wu-diff-viewer>`,
};
