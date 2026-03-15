import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuCollapse',
  props: {
    open: { type: Boolean, default: false },
    label: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
  },
  emits: ['wu-open', 'wu-close'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-collapse',
        {
          open: props.open || undefined,
          label: props.label,
          disabled: props.disabled || undefined,
          onWuopen: (e: CustomEvent) => emit('wu-open', e),
          onWuclose: (e: CustomEvent) => emit('wu-close', e),
        },
        slots.default?.()
      );
  },
});
