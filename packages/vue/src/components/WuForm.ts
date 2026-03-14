import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuForm',
  props: {
    novalidate: { type: Boolean, default: false },
    loading:    { type: Boolean, default: false },
  },
  emits: ['wu-submit', 'wu-invalid'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-form',
        {
          novalidate: props.novalidate || undefined,
          loading:    props.loading    || undefined,
          onWuSubmit:  (e: CustomEvent) => emit('wu-submit',  e),
          onWuInvalid: (e: CustomEvent) => emit('wu-invalid', e),
        },
        slots.default?.()
      );
  },
});
