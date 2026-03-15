import { defineComponent, h } from 'vue';
import '@weldui/core';

export const WuList = defineComponent({
  name: 'WuList',
  props: {
    variant: { type: String, default: 'none' },
  },
  setup(props, { slots }) {
    return () =>
      h('wu-list', { variant: props.variant }, slots.default?.());
  },
});

export const WuListItem = defineComponent({
  name: 'WuListItem',
  setup(_, { slots }) {
    return () => h('wu-list-item', {}, slots.default?.());
  },
});
