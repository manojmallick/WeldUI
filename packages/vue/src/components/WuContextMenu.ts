import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuContextMenu',
  emits: ['wu-select'],
  setup(_, { slots, emit }) {
    return () =>
      h(
        'wu-context-menu',
        {
          onWuselect: (e: CustomEvent) => emit('wu-select', e),
        },
        slots.default?.()
      );
  },
});
