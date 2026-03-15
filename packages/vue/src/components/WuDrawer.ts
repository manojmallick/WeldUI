import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuDrawer',
  props: {
    open: { type: Boolean, default: false },
    placement: { type: String, default: 'right' },
    size: { type: String, default: 'md' },
    label: { type: String, default: undefined },
    noBackdrop: { type: Boolean, default: false },
  },
  emits: ['wu-open', 'wu-close'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-drawer',
        {
          open: props.open || undefined,
          placement: props.placement,
          size: props.size,
          label: props.label,
          'no-backdrop': props.noBackdrop || undefined,
          onWuopen: (e: CustomEvent) => emit('wu-open', e),
          onWuclose: (e: CustomEvent) => emit('wu-close', e),
        },
        slots.default?.()
      );
  },
});
