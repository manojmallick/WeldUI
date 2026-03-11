import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Popover',
  component: 'wu-popover',
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'radio', options: ['top', 'bottom'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="padding:80px;display:flex;justify-content:center">
      <wu-popover>
        <wu-button slot="trigger" variant="secondary">Options ▾</wu-button>
        <div style="display:flex;flex-direction:column;gap:4px">
          <wu-button variant="ghost" size="sm" style="justify-content:flex-start">Edit</wu-button>
          <wu-button variant="ghost" size="sm" style="justify-content:flex-start">Duplicate</wu-button>
          <wu-divider></wu-divider>
          <wu-button variant="ghost" size="sm" style="justify-content:flex-start;color:var(--wu-color-danger)">Delete</wu-button>
        </div>
      </wu-popover>
    </div>
  `,
};
