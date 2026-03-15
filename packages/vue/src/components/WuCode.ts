import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuCode',
  props: {
    language: { type: String, default: undefined },
  },
  setup(props, { slots }) {
    return () =>
      h('wu-code', { language: props.language }, slots.default?.());
  },
});
