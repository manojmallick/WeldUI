import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuTooltip',
  props: {
    content: { type: String, default: undefined },
    placement: { type: String, default: 'top' },
    delay: { type: Number, default: 0 },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-tooltip',
        { content: props.content, placement: props.placement, delay: props.delay },
        slots.default?.()
      );
  },
});
