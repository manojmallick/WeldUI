import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuModal',
  props: {
    open: { type: Boolean, default: false },
    label: { type: String, default: undefined },
    closeOnBackdrop: { type: Boolean, default: true },
    hideClose: { type: Boolean, default: false },
  },
  emits: ['wu-open', 'wu-close'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-modal',
        {
          open: props.open || undefined,
          label: props.label,
          'close-on-backdrop': props.closeOnBackdrop || undefined,
          'hide-close': props.hideClose || undefined,
          onWuopen: (e: CustomEvent) => emit('wu-open', e),
          onWuclose: (e: CustomEvent) => emit('wu-close', e),
        },
        slots.default?.()
      );
  },
});
