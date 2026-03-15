import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuTagInput',
  props: {
    value: { type: Array, default: () => [] },
    placeholder: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
    maxTags: { type: Number, default: undefined },
    label: { type: String, default: undefined },
    name: { type: String, default: undefined },
  },
  emits: ['wu-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-tag-input', {
        value: props.value,
        placeholder: props.placeholder,
        disabled: props.disabled || undefined,
        'max-tags': props.maxTags,
        label: props.label,
        name: props.name,
        onWuchange: (e: CustomEvent) => emit('wu-change', e),
      });
  },
});
