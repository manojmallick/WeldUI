import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Navigation/BottomNav', component: 'wu-bottom-nav', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="position:relative;height:120px;">
      <wu-bottom-nav>
        <wu-bottom-nav-item value="home" label="Home" icon="🏠" active></wu-bottom-nav-item>
        <wu-bottom-nav-item value="search" label="Search" icon="🔍"></wu-bottom-nav-item>
        <wu-bottom-nav-item value="cart" label="Cart" icon="🛒"></wu-bottom-nav-item>
        <wu-bottom-nav-item value="profile" label="Profile" icon="👤"></wu-bottom-nav-item>
      </wu-bottom-nav>
    </div>`
};
