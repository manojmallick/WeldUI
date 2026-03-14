import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/NavBar',
  component: 'wu-navbar',
  tags: ['autodocs'],
  argTypes: {
    sticky: { control: 'boolean' },
    fixed:  { control: 'boolean' },
  },
  args: { sticky: false, fixed: false },
  parameters: {
    docs: {
      description: {
        component:
          'Top navigation bar with `logo`, default nav, and `actions` slots. ' +
          'Collapses nav into a burger-menu drawer on screens ≤ 768px wide. ' +
          'Use `sticky` to keep it in view while scrolling, or `fixed` to overlay content.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const navLinks = html`
  <a href="#" style="padding:var(--wu-space-2) var(--wu-space-3);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);text-decoration:none;border-radius:var(--wu-radius-md)">Docs</a>
  <a href="#" style="padding:var(--wu-space-2) var(--wu-space-3);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);text-decoration:none;border-radius:var(--wu-radius-md)">Components</a>
  <a href="#" style="padding:var(--wu-space-2) var(--wu-space-3);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);text-decoration:none;border-radius:var(--wu-radius-md)">Themes</a>
  <a href="#" style="padding:var(--wu-space-2) var(--wu-space-3);font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);text-decoration:none;border-radius:var(--wu-radius-md)">Pricing</a>
`;

/** Standard navbar with logo, navigation links, and action button. */
export const Default: Story = {
  render: () => html`
    <wu-navbar>
      <span slot="logo" style="font-size:var(--wu-text-base);font-weight:var(--wu-font-bold);color:var(--wu-color-primary)">WeldUI</span>
      ${navLinks}
      <wu-button slot="actions" size="sm" variant="secondary">Log in</wu-button>
      <wu-button slot="actions" size="sm">Get started</wu-button>
    </wu-navbar>
  `,
};

/** With a logo image and avatar in actions. */
export const WithAvatar: Story = {
  render: () => html`
    <wu-navbar>
      <span slot="logo" style="display:flex;align-items:center;gap:var(--wu-space-2)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--wu-color-primary)">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span style="font-weight:var(--wu-font-bold)">WeldUI</span>
      </span>
      ${navLinks}
      <wu-avatar slot="actions" initials="MJ" size="sm"></wu-avatar>
    </wu-navbar>
  `,
};

/** Sticky navbar stays visible while page content scrolls. */
export const Sticky: Story = {
  render: () => html`
    <div style="height:300px;overflow-y:auto;border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-lg)">
      <wu-navbar sticky>
        <span slot="logo" style="font-weight:var(--wu-font-bold)">WeldUI</span>
        ${navLinks}
        <wu-button slot="actions" size="sm">Sign in</wu-button>
      </wu-navbar>
      <div style="padding:var(--wu-space-8);display:flex;flex-direction:column;gap:var(--wu-space-4)">
        ${Array.from({ length: 8 }, (_, i) => html`
          <div style="height:48px;background:var(--wu-color-surface);border-radius:var(--wu-radius-md);display:flex;align-items:center;padding:0 var(--wu-space-4);color:var(--wu-color-text-secondary);font-size:var(--wu-text-sm)">
            Scroll content row ${i + 1}
          </div>
        `)}
      </div>
    </div>
  `,
};
