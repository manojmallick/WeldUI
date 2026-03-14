import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Components/ErrorPage',
  component: 'wu-error-page',
  tags: ['autodocs'],
  argTypes: {
    code: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const NotFound: Story = {
  args: { code: '404' },
  render: (args) => html`
    <wu-error-page code=${args.code}>
      <wu-button slot="actions" variant="primary">Go home</wu-button>
      <wu-button slot="actions" variant="secondary">Go back</wu-button>
    </wu-error-page>
  `,
};

export const ServerError: Story = {
  args: { code: '500' },
  render: (args) => html`
    <wu-error-page code=${args.code}>
      <wu-button slot="actions" variant="primary">Retry</wu-button>
      <wu-button slot="actions" variant="ghost">Report issue</wu-button>
    </wu-error-page>
  `,
};

export const ServiceUnavailable: Story = {
  args: { code: '503' },
  render: (args) => html`
    <wu-error-page code=${args.code}>
      <wu-button slot="actions" variant="primary">Try again</wu-button>
    </wu-error-page>
  `,
};

export const AccessDenied: Story = {
  args: { code: '403' },
  render: (args) => html`
    <wu-error-page code=${args.code}>
      <wu-button slot="actions" variant="primary">Sign in</wu-button>
      <wu-button slot="actions" variant="ghost">Contact support</wu-button>
    </wu-error-page>
  `,
};

export const CustomError: Story = {
  render: () => html`
    <wu-error-page
      code="418"
      title="I'm a teapot"
      description="This server refuses to brew coffee because it is a teapot."
    >
      <svg slot="icon" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="36" stroke="currentColor" stroke-width="3"/>
        <text x="40" y="52" text-anchor="middle" font-size="32" fill="currentColor">🫖</text>
      </svg>
      <wu-button slot="actions" variant="primary">Go home</wu-button>
    </wu-error-page>
  `,
};
