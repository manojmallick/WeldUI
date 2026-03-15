import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuMegaMenu',
  setup(_, { slots }) {
    return () => h('wu-mega-menu', {}, slots.default?.());
  },
});
