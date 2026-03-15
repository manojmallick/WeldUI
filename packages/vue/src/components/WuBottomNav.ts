import { defineComponent, h } from 'vue';
import '@weldui/core';

export const WuBottomNav = defineComponent({
  name: 'WuBottomNav',
  emits: ['wu-change'],
  setup(_, { slots, emit }) {
    return () =>
      h(
        'wu-bottom-nav',
        {
          onWuchange: (e: CustomEvent) => emit('wu-change', e),
        },
        slots.default?.()
      );
  },
});

export const WuBottomNavItem = defineComponent({
  name: 'WuBottomNavItem',
  props: {
    label: { type: String, default: undefined },
    href: { type: String, default: undefined },
    active: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-bottom-nav-item',
        {
          label: props.label,
          href: props.href,
          active: props.active || undefined,
          disabled: props.disabled || undefined,
        },
        slots.default?.()
      );
  },
});
