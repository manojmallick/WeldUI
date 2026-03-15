import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Combobox',
  component: 'wu-combobox',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const LANGS = [
  { value: 'ts', label: 'TypeScript' },
  { value: 'js', label: 'JavaScript' },
  { value: 'py', label: 'Python' },
  { value: 'rs', label: 'Rust' },
  { value: 'go', label: 'Go' },
];

export const Default: Story = {
  render: () => html`
    <wu-combobox label="Language" placeholder="Search languages…" .options=${LANGS}></wu-combobox>
  `,
};

export const WithError: Story = {
  render: () => html`
    <wu-combobox
      label="Language"
      .options=${LANGS}
      error="Please select a language"
    ></wu-combobox>
  `,
};

export const Loading: Story = {
  render: () => html`
    <wu-combobox label="Country" placeholder="Search…" loading></wu-combobox>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <wu-combobox label="Language" .options=${LANGS} value="ts" disabled></wu-combobox>
  `,
};
