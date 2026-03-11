import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuSelect',
  props: {
    modelValue:  { type: String, default: '' },
    options:     { type: Array, default: () => [] },
    placeholder: { type: String, default: undefined },
    label:       { type: String, default: undefined },
    hint:        { type: String, default: undefined },
    error:       { type: String, default: undefined },
    disabled:    { type: Boolean, default: false },
    required:    { type: Boolean, default: false },
    size:        { type: String, default: 'md' },
    name:        { type: String, default: undefined },
  },
  emits: ['update:modelValue', 'wu-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-select', {
        value:       props.modelValue,
        options:     props.options,
        placeholder: props.placeholder,
        label:       props.label,
        hint:        props.hint,
        error:       props.error,
        disabled:    props.disabled || undefined,
        required:    props.required || undefined,
        size:        props.size,
        name:        props.name,
        onWuchange:  (e: CustomEvent) => {
          emit('update:modelValue', (e as CustomEvent & { detail: { value: string } }).detail.value);
          emit('wu-change', e);
        },
      });
  },
});
