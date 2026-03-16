import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/DeveloperExperience/RegexTester',
  component: 'wu-regex-tester',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-regex-tester label="RegexTester"></wu-regex-tester>`,
};

export const WithValue: Story = {
  render: () => html`<wu-regex-tester label="RegexTester" value="Sample value"></wu-regex-tester>`,
};
