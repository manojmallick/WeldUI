import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuNotificationCenter',
  props: {
    placement: { type: String, default: 'top-right' },
  },
  emits: ['wu-dismiss'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-notification-center',
        {
          placement: props.placement,
          onWudismiss: (e: CustomEvent) => emit('wu-dismiss', e),
        },
        slots.default?.()
      );
  },
});
