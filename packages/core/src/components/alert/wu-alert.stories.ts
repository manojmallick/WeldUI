import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Alert',
  component: 'wu-alert',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'danger', 'neutral'] },
    dismissible: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Contextual status messages for info, success, warning and danger feedback. Supports a dismissible mode and `title` / `icon` slots.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { variant: 'info', dismissible: false },
  render: (args) => html`
    <wu-alert variant=${args.variant} ?dismissible=${args.dismissible}>
      <span slot="title">Heads up</span>
      This is an informational message for the user.
    </wu-alert>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:480px">
      <wu-alert variant="info">
        <span slot="title">Info</span>
        Your changes have been saved to the cloud.
      </wu-alert>
      <wu-alert variant="success">
        <span slot="title">Success</span>
        Your account has been updated successfully.
      </wu-alert>
      <wu-alert variant="warning">
        <span slot="title">Warning</span>
        Your session will expire in 5 minutes.
      </wu-alert>
      <wu-alert variant="danger">
        <span slot="title">Error</span>
        Something went wrong. Please try again.
      </wu-alert>
      <wu-alert variant="neutral">
        No new notifications at this time.
      </wu-alert>
    </div>
  `,
};

export const Dismissible: Story = {
  render: () => html`
    <wu-alert variant="info" dismissible style="max-width:480px">
      <span slot="title">Dismissible Alert</span>
      Click the × button to dismiss this alert.
    </wu-alert>
  `,
};
