import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuEmptyState',
  props: {
    title:       { type: String, default: '' },
    description: { type: String, default: '' },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-empty-state',
        { title: props.title, description: props.description },
        slots.default?.()
      );
  },
});
