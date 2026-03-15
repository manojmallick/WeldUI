import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuGallery',
  props: {
    columns: { type: Number, default: 3 },
    gap: { type: String, default: undefined },
  },
  emits: ['wu-click'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-gallery',
        {
          columns: props.columns,
          gap: props.gap,
          onWuclick: (e: CustomEvent) => emit('wu-click', e),
        },
        slots.default?.()
      );
  },
});
