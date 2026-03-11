import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Skeleton',
  component: 'wu-skeleton',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'circle', 'rect'] },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { variant: 'text', width: '200px' },
  render: (args) => html`<wu-skeleton variant=${args.variant} width=${args.width}></wu-skeleton>`,
};

export const CardSkeleton: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:320px;padding:16px;border:1px solid var(--wu-color-border);border-radius:8px">
      <wu-skeleton variant="rect" width="100%" height="160px"></wu-skeleton>
      <wu-skeleton variant="text" width="60%"></wu-skeleton>
      <wu-skeleton variant="text" width="100%"></wu-skeleton>
      <wu-skeleton variant="text" width="80%"></wu-skeleton>
    </div>
  `,
};

export const AvatarRow: Story = {
  render: () => html`
    <div style="display:flex;align-items:center;gap:12px">
      <wu-skeleton variant="circle" width="40px" height="40px"></wu-skeleton>
      <div style="display:flex;flex-direction:column;gap:6px;flex:1">
        <wu-skeleton variant="text" width="140px"></wu-skeleton>
        <wu-skeleton variant="text" width="80px"></wu-skeleton>
      </div>
    </div>
  `,
};
