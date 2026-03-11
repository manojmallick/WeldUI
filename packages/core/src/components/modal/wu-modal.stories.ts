import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Modal',
  component: 'wu-modal',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    label: { control: 'text' },
    hideClose: { control: 'boolean' },
    closeOnBackdrop: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A dialog overlay built on the native `<dialog>` element. Implements a focus trap, scroll lock and Escape-to-close. Declare content with `header`, default and `footer` slots.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-button id="open-btn" @wu-click=${() => {
      document.querySelector<any>('#demo-modal')!.open = true;
    }}>Open Modal</wu-button>
    <wu-modal id="demo-modal" label="Confirm Action">
      <p style="margin:0">Are you sure you want to delete this item? This action cannot be undone.</p>
      <div slot="footer">
        <wu-button variant="ghost" size="sm" @wu-click=${() => {
          document.querySelector<any>('#demo-modal')!.open = false;
        }}>Cancel</wu-button>
        <wu-button variant="danger" size="sm" @wu-click=${() => {
          document.querySelector<any>('#demo-modal')!.open = false;
        }}>Delete</wu-button>
      </div>
    </wu-modal>
  `,
};

export const NoFooter: Story = {
  render: () => html`
    <wu-button @wu-click=${() => {
      document.querySelector<any>('#info-modal')!.open = true;
    }}>Show Info</wu-button>
    <wu-modal id="info-modal" label="About WeldUI">
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        WeldUI is a framework-agnostic component library built on Web Components and Lit.
      </p>
    </wu-modal>
  `,
};
