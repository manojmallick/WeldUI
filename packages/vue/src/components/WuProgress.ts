import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuProgress',
  props: {
    value: { type: Number, default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    indeterminate: { type: Boolean, default: false },
    showLabel: { type: Boolean, default: false },
    size: { type: String, default: 'md' },
  },
  setup(props) {
    return () =>
      h('wu-progress', {
        value: props.value,
        min: props.min,
        max: props.max,
        indeterminate: props.indeterminate || undefined,
        'show-label': props.showLabel || undefined,
        size: props.size,
      });
  },
});
