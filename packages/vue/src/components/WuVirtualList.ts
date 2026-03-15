import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuVirtualList',
  props: {
    itemHeight: { type: Number, default: 40 },
    overscan: { type: Number, default: 3 },
  },
  emits: ['wu-scroll'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-virtual-list',
        {
          'item-height': props.itemHeight,
          overscan: props.overscan,
          onWuscroll: (e: CustomEvent) => emit('wu-scroll', e),
        },
        slots.default?.()
      );
  },
});
