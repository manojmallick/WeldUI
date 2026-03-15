import { defineComponent, h } from 'vue';
import '@weldui/core';

export const WuKanban = defineComponent({
  name: 'WuKanban',
  emits: ['wu-card-move'],
  setup(_, { slots, emit }) {
    return () =>
      h(
        'wu-kanban',
        {
          onWucardmove: (e: CustomEvent) => emit('wu-card-move', e),
        },
        slots.default?.()
      );
  },
});

export const WuKanbanColumn = defineComponent({
  name: 'WuKanbanColumn',
  props: {
    label: { type: String, default: undefined },
    columnId: { type: String, default: undefined },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-kanban-column',
        {
          label: props.label,
          'column-id': props.columnId,
        },
        slots.default?.()
      );
  },
});
