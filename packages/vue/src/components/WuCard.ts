import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuCard',
  props: {
    interactive: { type: Boolean, default: false },
  },
  emits: ['wu-click'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-card',
        {
          interactive: props.interactive || undefined,
          onWuclick: (e: CustomEvent) => emit('wu-click', e),
        },
        slots.default?.()
      );
  },
});
