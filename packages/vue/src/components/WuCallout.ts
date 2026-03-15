import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuCallout',
  props: {
    variant: { type: String, default: 'info' },
    heading: { type: String, default: undefined },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-callout',
        { variant: props.variant, heading: props.heading },
        slots.default?.()
      );
  },
});
