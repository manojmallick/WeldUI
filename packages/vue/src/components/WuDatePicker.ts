import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuDatePicker',
  props: {
    value: { type: String, default: undefined },
    placeholder: { type: String, default: 'Select a date' },
    min: { type: String, default: undefined },
    max: { type: String, default: undefined },
    open: { type: Boolean, default: false },
  },
  emits: ['wu-date-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-date-picker', {
        value: props.value,
        placeholder: props.placeholder,
        min: props.min,
        max: props.max,
        open: props.open || undefined,
        onWudatechange: (e: CustomEvent) => emit('wu-date-change', e),
      });
  },
});
