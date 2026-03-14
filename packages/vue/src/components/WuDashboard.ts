import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuDashboard',
  props: {
    fullWidth: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-dashboard',
        { 'full-width': props.fullWidth || undefined },
        slots.default?.()
      );
  },
});
