import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuNumberInput',
  props: {
    value: { type: Number, default: undefined },
    min: { type: Number, default: undefined },
    max: { type: Number, default: undefined },
    step: { type: Number, default: 1 },
    precision: { type: Number, default: undefined },
    disabled: { type: Boolean, default: false },
    placeholder: { type: String, default: undefined },
    label: { type: String, default: undefined },
    name: { type: String, default: undefined },
  },
  emits: ['wu-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-number', {
        value: props.value,
        min: props.min,
        max: props.max,
        step: props.step,
        precision: props.precision,
        disabled: props.disabled || undefined,
        placeholder: props.placeholder,
        label: props.label,
        name: props.name,
        onWuchange: (e: CustomEvent) => emit('wu-change', e),
      });
  },
});
