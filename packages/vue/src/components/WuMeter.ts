import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuMeter',
  props: {
    value: { type: Number, default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    label: { type: String, default: undefined },
    unit: { type: String, default: undefined },
    variant: { type: String, default: 'default' },
  },
  setup(props) {
    return () =>
      h('wu-meter', {
        value: props.value,
        min: props.min,
        max: props.max,
        label: props.label,
        unit: props.unit,
        variant: props.variant,
      });
  },
});
