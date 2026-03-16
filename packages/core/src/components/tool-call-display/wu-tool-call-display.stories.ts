import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/AI-LLM/ToolCallDisplay',
  component: 'wu-tool-call-display',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Success: Story = {
  render: () => html`
    <wu-tool-call-display
      tool-name="search_web"
      status="success"
      input='{"query":"TypeScript generics"}'
      output='{"results":[{"title":"TypeScript Handbook","url":"https://www.typescriptlang.org"}]}'
    ></wu-tool-call-display>
  `,
};

export const Running: Story = {
  render: () => html`
    <wu-tool-call-display
      tool-name="get_weather"
      status="running"
      input='{"city":"Amsterdam"}'
      output=""
    ></wu-tool-call-display>
  `,
};

export const Error: Story = {
  render: () => html`
    <wu-tool-call-display
      tool-name="run_sql"
      status="error"
      input='{"query":"SELECT * FROM users"}'
      output='{"error":"Connection timeout"}'
    ></wu-tool-call-display>
  `,
};
