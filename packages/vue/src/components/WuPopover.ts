import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuPopover',
  props: {
    open: { type: Boolean, default: false },
    placement: { type: String, default: 'bottom' },
  },
  emits: ['wu-open', 'wu-close'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-popover',
        {
          open: props.open || undefined,
          placement: props.placement,
          onWuopen: (e: CustomEvent) => emit('wu-open', e),
          onWuclose: (e: CustomEvent) => emit('wu-close', e),
        },
        slots.default?.()
      );
  },
});
