import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Components/Select',
  component: 'wu-select',
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj;

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' }
];

export const Default: Story = {
  render: () => html`
    <wu-select
      label="Framework"
      placeholder="Choose a framework"
      .options=${options}
      style="max-width:320px"
    ></wu-select>
  `
};
