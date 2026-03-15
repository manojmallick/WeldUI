import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuLightbox',
  props: {
    open: { type: Boolean, default: false },
    currentIndex: { type: Number, default: 0 },
  },
  emits: ['wu-open', 'wu-close', 'wu-change'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-lightbox',
        {
          open: props.open || undefined,
          'current-index': props.currentIndex,
          onWuopen: (e: CustomEvent) => emit('wu-open', e),
          onWuclose: (e: CustomEvent) => emit('wu-close', e),
          onWuchange: (e: CustomEvent) => emit('wu-change', e),
        },
        slots.default?.()
      );
  },
});
