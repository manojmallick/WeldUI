import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Components/MultiSelect', component: 'wu-multi-select', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const FRUITS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

export const Default: Story = {
  render: () => html`
    <wu-multi-select label="Fruits" .options=${FRUITS} show-select-all></wu-multi-select>
  `,
};

export const PreSelected: Story = {
  render: () => html`
    <wu-multi-select
      label="Technologies"
      .options=${[
        { value: 'ts', label: 'TypeScript' },
        { value: 'lit', label: 'Lit' },
        { value: 'vite', label: 'Vite' },
      ]}
      .values=${['ts', 'lit']}
    ></wu-multi-select>
  `,
};
