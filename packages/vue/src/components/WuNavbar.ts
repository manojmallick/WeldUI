import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuNavbar',
  props: {
    sticky: { type: Boolean, default: false },
    fixed:  { type: Boolean, default: false },
  },
  emits: ['wu-menu-open', 'wu-menu-close'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-navbar',
        {
          sticky: props.sticky || undefined,
          fixed:  props.fixed  || undefined,
          onWuMenuopen:  (e: CustomEvent) => emit('wu-menu-open',  e),
          onWuMenuclose: (e: CustomEvent) => emit('wu-menu-close', e),
        },
        slots.default?.()
      );
  },
});
