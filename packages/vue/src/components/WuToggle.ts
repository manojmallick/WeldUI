import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuToggle',
  props: {
    modelValue:    { type: Boolean, default: false },
    disabled:      { type: Boolean, default: false },
    label:         { type: String, default: undefined },
    labelPosition: { type: String, default: 'end' },
    size:          { type: String, default: 'md' },
    name:          { type: String, default: undefined },
  },
  emits: ['update:modelValue', 'wu-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-toggle', {
        checked:          props.modelValue || undefined,
        disabled:         props.disabled || undefined,
        label:            props.label,
        'label-position': props.labelPosition,
        size:             props.size,
        name:             props.name,
        onWuchange:       (e: CustomEvent) => {
          emit('update:modelValue', (e as CustomEvent & { detail: { checked: boolean } }).detail.checked);
          emit('wu-change', e);
        },
      });
  },
});
