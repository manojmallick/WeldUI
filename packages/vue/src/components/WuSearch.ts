import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuSearch',
  props: {
    value:       { type: String,  default: '' },
    placeholder: { type: String,  default: 'Search…' },
    loading:     { type: Boolean, default: false },
    clearable:   { type: Boolean, default: true },
    debounce:    { type: Number,  default: 300 },
  },
  emits: ['wu-search', 'wu-clear', 'wu-change', 'update:modelValue'],
  setup(props, { emit }) {
    return () =>
      h('wu-search', {
        value:       props.value,
        placeholder: props.placeholder,
        loading:     props.loading   || undefined,
        clearable:   props.clearable || undefined,
        debounce:    props.debounce,
        onWuSearch: (e: CustomEvent) => { emit('wu-search', e); emit('update:modelValue', e.detail.value); },
        onWuClear:  (e: CustomEvent) => { emit('wu-clear',  e); emit('update:modelValue', ''); },
        onWuChange: (e: CustomEvent) => emit('wu-change', e),
      });
  },
});
