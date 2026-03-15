import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuCombobox',
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    label: { type: String, default: undefined },
    name: { type: String, default: undefined },
  },
  emits: ['wu-change', 'wu-input', 'wu-clear'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-combobox',
        {
          value: props.value,
          placeholder: props.placeholder,
          disabled: props.disabled || undefined,
          clearable: props.clearable || undefined,
          loading: props.loading || undefined,
          label: props.label,
          name: props.name,
          onWuchange: (e: CustomEvent) => emit('wu-change', e),
          onWuinput: (e: CustomEvent) => emit('wu-input', e),
          onWuclear: (e: CustomEvent) => emit('wu-clear', e),
        },
        slots.default?.()
      );
  },
});
