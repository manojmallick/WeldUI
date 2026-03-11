import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Card',
  component: 'wu-card',
  tags: ['autodocs'],
  argTypes: {
    interactive: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A surface container with `header`, `body` and `footer` slots. Set `interactive` for a hover elevation effect.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { interactive: false },
  render: (args) => html`
    <wu-card ?interactive=${args.interactive} style="max-width:360px">
      <span slot="header" style="font-weight:600;font-size:1rem">Card Title</span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        This is the card body. It can contain any content.
      </p>
      <div slot="footer">
        <wu-button size="sm">Action</wu-button>
      </div>
    </wu-card>
  `,
};

export const SimpleBody: Story = {
  render: () => html`
    <wu-card style="max-width:360px">
      <p style="margin:0">A simple card with only body content.</p>
    </wu-card>
  `,
};

export const Interactive: Story = {
  render: () => html`
    <wu-card interactive style="max-width:360px">
      <span slot="header" style="font-weight:600">Clickable Card</span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        Hover or click this card to see the elevation change.
      </p>
    </wu-card>
  `,
};

export const AllSlots: Story = {
  render: () => html`
    <wu-card style="max-width:360px">
      <span slot="header" style="font-weight:600;font-size:1rem;color:var(--wu-color-text)">
        Header Title
      </span>
      <p style="margin:0;color:var(--wu-color-text-secondary)">
        Card body content with full header and footer.
      </p>
      <div slot="footer" style="display:flex;gap:8px;justify-content:flex-end">
        <wu-button variant="ghost" size="sm">Cancel</wu-button>
        <wu-button size="sm">Confirm</wu-button>
      </div>
    </wu-card>
  `,
};
