import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuSwitch',
  props: {
    checked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    label: { type: String, default: undefined },
    labelPosition: { type: String, default: 'right' },
    size: { type: String, default: 'md' },
    name: { type: String, default: undefined },
    value: { type: String, default: undefined },
    required: { type: Boolean, default: false },
  },
  emits: ['wu-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-switch', {
        checked: props.checked || undefined,
        disabled: props.disabled || undefined,
        label: props.label,
        'label-position': props.labelPosition,
        size: props.size,
        name: props.name,
        value: props.value,
        required: props.required || undefined,
        onWuchange: (e: CustomEvent) => emit('wu-change', e),
      });
  },
});
