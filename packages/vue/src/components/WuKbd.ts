import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuKbd',
  setup(_, { slots }) {
    return () => h('wu-kbd', {}, slots.default?.());
  },
});
