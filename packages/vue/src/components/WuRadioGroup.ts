import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuRadioGroup',
  props: {
    value: { type: String, default: undefined },
    name: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
    orientation: { type: String, default: 'vertical' },
  },
  emits: ['wu-change'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-radio-group',
        {
          value: props.value,
          name: props.name,
          disabled: props.disabled || undefined,
          orientation: props.orientation,
          onWuchange: (e: CustomEvent) => emit('wu-change', e),
        },
        slots.default?.()
      );
  },
});
