import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuSlider',
  props: {
    value: { type: Number, default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
    disabled: { type: Boolean, default: false },
    label: { type: String, default: undefined },
    showValue: { type: Boolean, default: false },
  },
  emits: ['wu-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-slider', {
        value: props.value,
        min: props.min,
        max: props.max,
        step: props.step,
        disabled: props.disabled || undefined,
        label: props.label,
        'show-value': props.showValue || undefined,
        onWuchange: (e: CustomEvent) => emit('wu-change', e),
      });
  },
});
