import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuDescriptionList',
  setup(_, { slots }) {
    return () => h('wu-dl', {}, slots.default?.());
  },
});
