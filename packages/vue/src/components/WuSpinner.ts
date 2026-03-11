import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuSpinner',
  props: {
    size: { type: String, default: 'md' },
    label: { type: String, default: undefined },
  },
  setup(props) {
    return () => h('wu-spinner', { size: props.size, label: props.label });
  },
});
