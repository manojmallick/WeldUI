import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuTag',
  props: {
    variant: { type: String, default: 'default' },
    size: { type: String, default: 'md' },
    dismissible: { type: Boolean, default: false },
  },
  emits: ['wu-close'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-tag',
        {
          variant: props.variant,
          size: props.size,
          dismissible: props.dismissible || undefined,
          onWuclose: (e: CustomEvent) => emit('wu-close', e),
        },
        slots.default?.()
      );
  },
});
