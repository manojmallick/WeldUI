import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuMultiSelect',
  props: {
    value: { type: Array, default: () => [] },
    placeholder: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
    searchable: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    maxItems: { type: Number, default: undefined },
    label: { type: String, default: undefined },
    name: { type: String, default: undefined },
  },
  emits: ['wu-change'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-multi-select',
        {
          value: props.value,
          placeholder: props.placeholder,
          disabled: props.disabled || undefined,
          searchable: props.searchable || undefined,
          clearable: props.clearable || undefined,
          'max-items': props.maxItems,
          label: props.label,
          name: props.name,
          onWuchange: (e: CustomEvent) => emit('wu-change', e),
        },
        slots.default?.()
      );
  },
});
