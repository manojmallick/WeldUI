import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuDropdown',
  props: {
    label: { type: String, default: undefined },
    placement: { type: String, default: 'bottom-start' },
    disabled: { type: Boolean, default: false },
  },
  emits: ['wu-select'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-dropdown',
        {
          label: props.label,
          placement: props.placement,
          disabled: props.disabled || undefined,
          onWuselect: (e: CustomEvent) => emit('wu-select', e),
        },
        slots.default?.()
      );
  },
});
