import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Media/Kanban', component: 'wu-kanban', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-kanban>
      <wu-kanban-column column-id="todo" label="To Do" .cards=${[
        { id: '1', title: 'Design new homepage' },
        { id: '2', title: 'Accessibility audit' },
        { id: '3', title: 'Write unit tests' }
      ]}></wu-kanban-column>
      <wu-kanban-column column-id="in-progress" label="In Progress" .cards=${[
        { id: '4', title: 'Build wu-kanban component' },
        { id: '5', title: 'Update documentation' }
      ]}></wu-kanban-column>
      <wu-kanban-column column-id="done" label="Done" .cards=${[
        { id: '6', title: 'Set up monorepo' }
      ]}></wu-kanban-column>
    </wu-kanban>`
};
