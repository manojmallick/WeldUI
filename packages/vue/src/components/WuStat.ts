import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuStat',
  props: {
    label: { type: String, default: undefined },
    value: { type: String, default: undefined },
    delta: { type: String, default: undefined },
    trend: { type: String, default: undefined },
    prefix: { type: String, default: undefined },
    suffix: { type: String, default: undefined },
    loading: { type: Boolean, default: false },
  },
  setup(props) {
    return () =>
      h('wu-stat', {
        label: props.label,
        value: props.value,
        delta: props.delta,
        trend: props.trend,
        prefix: props.prefix,
        suffix: props.suffix,
        loading: props.loading || undefined,
      });
  },
});
