import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/RealTime/ConflictResolver',
  component: 'wu-conflict-resolver',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-conflict-resolver
      mine-content="function greet(name: string) {\n  return 'Hello, ' + name;\n}"
      theirs-content="function greet(name: string): string {\n  return \`Hello, \${name}!\`;\n}"
    ></wu-conflict-resolver>
  `,
};
