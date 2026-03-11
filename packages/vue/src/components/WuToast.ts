import { defineComponent, h } from 'vue';
import '@weldui/core';

export const WuToast = defineComponent({
  name: 'WuToast',
  props: {
    variant: { type: String, default: 'info' },
    duration: { type: Number, default: 4000 },
    dismissible: { type: Boolean, default: true },
  },
  emits: ['wu-close'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-toast',
        {
          variant: props.variant,
          duration: props.duration,
          dismissible: props.dismissible || undefined,
          onWuclose: (e: CustomEvent) => emit('wu-close', e),
        },
        slots.default?.()
      );
  },
});

export const WuToastProvider = defineComponent({
  name: 'WuToastProvider',
  props: {
    position: { type: String, default: 'bottom-right' },
  },
  setup(props) {
    return () => h('wu-toast-provider', { position: props.position });
  },
});
