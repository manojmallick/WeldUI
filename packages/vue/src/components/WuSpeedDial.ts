import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuSpeedDial',
  props: {
    icon: { type: String, default: undefined },
    placement: { type: String, default: 'bottom-right' },
    direction: { type: String, default: 'up' },
  },
  emits: ['wu-action-click'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-speed-dial',
        {
          icon: props.icon,
          placement: props.placement,
          direction: props.direction,
          onWuactionclick: (e: CustomEvent) => emit('wu-action-click', e),
        },
        slots.default?.()
      );
  },
});
