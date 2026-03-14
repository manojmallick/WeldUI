import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuErrorPage',
  props: {
    code:        { type: String, default: '404' },
    title:       { type: String, default: '' },
    description: { type: String, default: '' },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-error-page',
        { code: props.code, title: props.title, description: props.description },
        slots.default?.()
      );
  },
});
