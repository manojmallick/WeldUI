import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuAlert',
  props: {
    variant: { type: String, default: 'info' },
    dismissible: { type: Boolean, default: false },
  },
  emits: ['wu-dismiss'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-alert',
        {
          variant: props.variant,
          dismissible: props.dismissible || undefined,
          onWudismiss: (e: CustomEvent) => emit('wu-dismiss', e),
        },
        slots.default?.()
      );
  },
});
