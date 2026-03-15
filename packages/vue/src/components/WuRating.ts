import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuRating',
  props: {
    value: { type: Number, default: 0 },
    max: { type: Number, default: 5 },
    precision: { type: Number, default: 1 },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    label: { type: String, default: undefined },
  },
  emits: ['wu-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-rating', {
        value: props.value,
        max: props.max,
        precision: props.precision,
        readonly: props.readonly || undefined,
        disabled: props.disabled || undefined,
        label: props.label,
        onWuchange: (e: CustomEvent) => emit('wu-change', e),
      });
  },
});
