import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/SaaS & App Shell/Rich Text Viewer',
  component: 'wu-rich-text-viewer',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const sampleHtml = `
<h2>Release Notes</h2>
<p>This release includes several <strong>performance improvements</strong> and bug fixes.</p>
<ul>
  <li>Reduced bundle size by 12%</li>
  <li>Fixed focus trap in <code>wu-modal</code></li>
  <li>Added <em>dark mode</em> support to all themes</li>
</ul>
<blockquote><p>Upgrade today to take advantage of these improvements.</p></blockquote>
`;

export const Default: Story = {
  render: () => html`<wu-rich-text-viewer .content=${sampleHtml}></wu-rich-text-viewer>`,
};

export const Compact: Story = {
  render: () => html`<wu-rich-text-viewer compact .content=${sampleHtml}></wu-rich-text-viewer>`,
};

export const WithSlot: Story = {
  render: () => html`
    <wu-rich-text-viewer>
      <p>Slotted content as a fallback.</p>
    </wu-rich-text-viewer>
  `,
};
