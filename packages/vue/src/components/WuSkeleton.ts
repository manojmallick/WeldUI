import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuSkeleton',
  props: {
    variant: { type: String, default: 'text' },
    width: { type: String, default: undefined },
    height: { type: String, default: undefined },
  },
  setup(props) {
    return () =>
      h('wu-skeleton', { variant: props.variant, width: props.width, height: props.height });
  },
});
