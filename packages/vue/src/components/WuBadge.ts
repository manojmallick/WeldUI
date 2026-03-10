import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuBadge',
  props: {
    variant: { type: String, default: 'default' },
  },
  setup(props, { slots }) {
    return () =>
      h('wu-badge', { variant: props.variant }, slots.default?.());
  },
});
