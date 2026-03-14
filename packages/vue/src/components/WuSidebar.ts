import { defineComponent, h } from 'vue';
import '@weldui/core';

export const WuSidebar = defineComponent({
  name: 'WuSidebar',
  props: {
    collapsed:   { type: Boolean, default: false },
    hideToggle:  { type: Boolean, default: false },
  },
  emits: ['wu-collapse'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-sidebar',
        {
          collapsed:    props.collapsed   || undefined,
          'hide-toggle': props.hideToggle || undefined,
          onWuCollapse: (e: CustomEvent) => emit('wu-collapse', e),
        },
        slots.default?.()
      );
  },
});

export const WuSidebarItem = defineComponent({
  name: 'WuSidebarItem',
  props: {
    href:      { type: String,  default: undefined },
    active:    { type: Boolean, default: false },
    disabled:  { type: Boolean, default: false },
    collapsed: { type: Boolean, default: false },
  },
  emits: ['wu-nav'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-sidebar-item',
        {
          href:      props.href,
          active:    props.active    || undefined,
          disabled:  props.disabled  || undefined,
          collapsed: props.collapsed || undefined,
          onWuNav:   (e: CustomEvent) => emit('wu-nav', e),
        },
        slots.default?.()
      );
  },
});
