import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuMention',
  props: {
    trigger: { type: String, default: '@' },
    value: { type: String, default: '' },
    placeholder: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
  },
  emits: ['wu-select', 'wu-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-mention', {
        trigger: props.trigger,
        value: props.value,
        placeholder: props.placeholder,
        disabled: props.disabled || undefined,
        onWuselect: (e: CustomEvent) => emit('wu-select', e),
        onWuchange: (e: CustomEvent) => emit('wu-change', e),
      });
  },
});
