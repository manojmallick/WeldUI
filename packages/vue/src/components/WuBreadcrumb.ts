import { defineComponent, h } from 'vue';
import '@weldui/core';

export const WuBreadcrumb = defineComponent({
  name: 'WuBreadcrumb',
  props: {
    separator: { type: String, default: '/' },
    label: { type: String, default: 'Breadcrumb' },
  },
  setup(props, { slots }) {
    return () =>
      h('wu-breadcrumb', { separator: props.separator, label: props.label }, slots.default?.());
  },
});

export const WuBreadcrumbItem = defineComponent({
  name: 'WuBreadcrumbItem',
  props: {
    href: { type: String, default: undefined },
    current: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-breadcrumb-item',
        { href: props.href, current: props.current || undefined },
        slots.default?.()
      );
  },
});
