import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = { title: 'Components/AvatarGroup', component: 'wu-avatar-group', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;
export const Default: Story = { render: () => html`
  <wu-avatar-group max="4" total="12">
    <wu-avatar initials="JD"></wu-avatar>
    <wu-avatar initials="AB"></wu-avatar>
    <wu-avatar initials="CS"></wu-avatar>
    <wu-avatar initials="MK"></wu-avatar>
  </wu-avatar-group>` };
