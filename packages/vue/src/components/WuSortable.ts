import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuSortable',
  props: {
    group: { type: String, default: undefined },
    animation: { type: Number, default: 150 },
    disabled: { type: Boolean, default: false },
  },
  emits: ['wu-sort-end'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-sortable',
        {
          group: props.group,
          animation: props.animation,
          disabled: props.disabled || undefined,
          onWusortend: (e: CustomEvent) => emit('wu-sort-end', e),
        },
        slots.default?.()
      );
  },
});
