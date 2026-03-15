import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuPinInput',
  props: {
    length: { type: Number, default: 4 },
    value: { type: String, default: '' },
    type: { type: String, default: 'numeric' },
    disabled: { type: Boolean, default: false },
    placeholder: { type: String, default: '○' },
  },
  emits: ['wu-change', 'wu-complete'],
  setup(props, { emit }) {
    return () =>
      h('wu-pin-input', {
        length: props.length,
        value: props.value,
        type: props.type,
        disabled: props.disabled || undefined,
        placeholder: props.placeholder,
        onWuchange: (e: CustomEvent) => emit('wu-change', e),
        onWucomplete: (e: CustomEvent) => emit('wu-complete', e),
      });
  },
});
