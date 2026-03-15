import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuScrollArea',
  props: {
    maxHeight: { type: String, default: undefined },
    maxWidth: { type: String, default: undefined },
    orientation: { type: String, default: 'vertical' },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-scroll-area',
        {
          'max-height': props.maxHeight,
          'max-width': props.maxWidth,
          orientation: props.orientation,
        },
        slots.default?.()
      );
  },
});
