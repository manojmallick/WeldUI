import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuDivider',
  props: {
    vertical: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h('wu-divider', { vertical: props.vertical || undefined }, slots.default?.());
  },
});
