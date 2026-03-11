import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuTextarea',
  props: {
    modelValue:  { type: String, default: '' },
    placeholder: { type: String, default: undefined },
    label:       { type: String, default: undefined },
    hint:        { type: String, default: undefined },
    error:       { type: String, default: undefined },
    disabled:    { type: Boolean, default: false },
    required:    { type: Boolean, default: false },
    rows:        { type: Number, default: 3 },
    maxlength:   { type: Number, default: undefined },
    name:        { type: String, default: undefined },
  },
  emits: ['update:modelValue', 'wu-change', 'wu-blur'],
  setup(props, { emit }) {
    return () =>
      h('wu-textarea', {
        value:       props.modelValue,
        placeholder: props.placeholder,
        label:       props.label,
        hint:        props.hint,
        error:       props.error,
        disabled:    props.disabled || undefined,
        required:    props.required || undefined,
        rows:        props.rows,
        maxlength:   props.maxlength,
        name:        props.name,
        onWuchange:  (e: CustomEvent) => {
          emit('update:modelValue', (e as CustomEvent & { detail: { value: string } }).detail.value);
          emit('wu-change', e);
        },
        onWublur: (e: CustomEvent) => emit('wu-blur', e),
      });
  },
});
