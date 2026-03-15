import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './wu-tree.js';

const meta: Meta = { title: 'Navigation/Tree', component: 'wu-tree', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-tree>
      <wu-tree-item label="Documents" expanded>
        <wu-tree-item label="Reports">
          <wu-tree-item label="Q1 2025.pdf"></wu-tree-item>
          <wu-tree-item label="Q2 2025.pdf"></wu-tree-item>
        </wu-tree-item>
        <wu-tree-item label="Invoices">
          <wu-tree-item label="INV-001.pdf"></wu-tree-item>
        </wu-tree-item>
      </wu-tree-item>
      <wu-tree-item label="Images">
        <wu-tree-item label="logo.png"></wu-tree-item>
      </wu-tree-item>
      <wu-tree-item label="README.md"></wu-tree-item>
    </wu-tree>`
};

export const PreSelected: Story = {
  render: () => html`
    <wu-tree>
      <wu-tree-item label="src" expanded>
        <wu-tree-item label="index.ts" selected></wu-tree-item>
        <wu-tree-item label="app.ts"></wu-tree-item>
      </wu-tree-item>
    </wu-tree>`
};
