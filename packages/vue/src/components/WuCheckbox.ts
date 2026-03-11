import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuCheckbox',
  props: {
    modelValue:    { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
    disabled:      { type: Boolean, default: false },
    label:         { type: String, default: undefined },
    name:          { type: String, default: undefined },
    value:         { type: String, default: 'on' },
  },
  emits: ['update:modelValue', 'wu-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-checkbox', {
        checked:       props.modelValue || undefined,
        indeterminate: props.indeterminate || undefined,
        disabled:      props.disabled || undefined,
        label:         props.label,
        name:          props.name,
        value:         props.value,
        onWuchange:    (e: CustomEvent) => {
          emit('update:modelValue', (e as CustomEvent & { detail: { checked: boolean } }).detail.checked);
          emit('wu-change', e);
        },
      });
  },
});
