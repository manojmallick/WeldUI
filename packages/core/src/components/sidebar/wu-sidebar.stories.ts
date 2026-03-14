import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Sidebar',
  component: 'wu-sidebar',
  tags: ['autodocs'],
  argTypes: {
    collapsed:   { control: 'boolean' },
    hideToggle:  { control: 'boolean' },
  },
  args: { collapsed: false, hideToggle: false },
  parameters: {
    docs: {
      description: {
        component:
          'Collapsible application sidebar. Place `<wu-sidebar-item>` elements in the ' +
          'default slot for navigation links. The `header` slot holds branding/logo and ' +
          'the `footer` slot is ideal for user profile or settings links. ' +
          'Click the chevron toggle to switch between expanded and icon-only mode.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const navIcon = (path: string) => html`
  <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="${path}"/>
  </svg>
`;

/** Fully expanded sidebar with header, nav, and footer slots. */
export const Default: Story = {
  render: () => html`
    <div style="display:flex;height:420px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg);overflow:hidden;width:280px">
      <wu-sidebar style="height:100%">
        <span slot="header" style="font-weight:var(--wu-font-bold);font-family:var(--wu-font-sans);font-size:var(--wu-text-sm)">WeldUI</span>
        <wu-sidebar-item href="#" active>
          ${navIcon('M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6')}
          Dashboard
        </wu-sidebar-item>
        <wu-sidebar-item href="#">
          ${navIcon('M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z')}
          Analytics
        </wu-sidebar-item>
        <wu-sidebar-item href="#">
          ${navIcon('M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z')}
          Team
        </wu-sidebar-item>
        <wu-sidebar-item href="#">
          ${navIcon('M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z')}
          Settings
        </wu-sidebar-item>
        <wu-sidebar-item href="#" disabled>
          ${navIcon('M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z')}
          Admin (disabled)
        </wu-sidebar-item>
        <wu-sidebar-item slot="footer" href="#">
          ${navIcon('M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1')}
          Sign out
        </wu-sidebar-item>
      </wu-sidebar>
    </div>
  `,
};

/** Collapsed to icon-only mode — hover items to see tooltip labels. */
export const Collapsed: Story = {
  render: () => html`
    <div style="display:flex;height:420px;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg);overflow:hidden;width:100px">
      <wu-sidebar collapsed style="height:100%">
        <span slot="header" style="font-weight:var(--wu-font-bold);font-family:var(--wu-font-sans);font-size:var(--wu-text-xs)">W</span>
        <wu-sidebar-item href="#" active>
          ${navIcon('M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6')}
          Dashboard
        </wu-sidebar-item>
        <wu-sidebar-item href="#">
          ${navIcon('M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z')}
          Analytics
        </wu-sidebar-item>
      </wu-sidebar>
    </div>
  `,
};
