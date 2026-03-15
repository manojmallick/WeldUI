import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuSplitPane',
  props: {
    direction: { type: String, default: 'horizontal' },
    initialSize: { type: Number, default: 50 },
    minSize: { type: Number, default: 10 },
    maxSize: { type: Number, default: 90 },
  },
  emits: ['wu-resize'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-split-pane',
        {
          direction: props.direction,
          'initial-size': props.initialSize,
          'min-size': props.minSize,
          'max-size': props.maxSize,
          onWuresize: (e: CustomEvent) => emit('wu-resize', e),
        },
        slots.default?.()
      );
  },
});
