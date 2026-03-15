import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuColorPicker',
  props: {
    value: { type: String, default: '#000000' },
    alpha: { type: Boolean, default: false },
    format: { type: String, default: 'hex' },
    disabled: { type: Boolean, default: false },
    label: { type: String, default: undefined },
  },
  emits: ['wu-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-color-picker', {
        value: props.value,
        alpha: props.alpha || undefined,
        format: props.format,
        disabled: props.disabled || undefined,
        label: props.label,
        onWuchange: (e: CustomEvent) => emit('wu-change', e),
      });
  },
});
