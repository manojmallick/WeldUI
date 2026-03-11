import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Accordion',
  component: 'wu-accordion',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-accordion style="max-width:560px">
      <wu-accordion-item>
        <span slot="summary">What is WeldUI?</span>
        WeldUI is a framework-agnostic component library built with Lit Web Components.
        It works in any framework — React, Vue, Angular, Svelte, or plain HTML.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">How do I install it?</span>
        Run <code>pnpm add @weldui/core</code> and import the components you need.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Is it accessible?</span>
        Yes — all components target WCAG 2.1 AA compliance with full keyboard navigation.
      </wu-accordion-item>
    </wu-accordion>
  `,
};

export const SingleOpen: Story = {
  render: () => html`
    <wu-accordion single style="max-width:560px">
      <wu-accordion-item open>
        <span slot="summary">First item (open by default)</span>
        This item is open by default. Opening another will close this one.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Second item</span>
        This is the second item's content.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Third item</span>
        This is the third item's content.
      </wu-accordion-item>
    </wu-accordion>
  `,
};
