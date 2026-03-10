import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuButton',
  props: {
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    type: { type: String, default: 'button' },
    ariaLabel: { type: String, default: undefined },
  },
  emits: ['wu-click'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-button',
        {
          variant: props.variant,
          size: props.size,
          disabled: props.disabled || undefined,
          loading: props.loading || undefined,
          type: props.type,
          'aria-label': props.ariaLabel,
          onWuclick: (e: CustomEvent) => emit('wu-click', e),
        },
        slots.default?.()
      );
  },
});
