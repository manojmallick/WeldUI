import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuCopyButton',
  props: {
    value: { type: String, default: '' },
    label: { type: String, default: undefined },
    successLabel: { type: String, default: undefined },
    feedbackDuration: { type: Number, default: 2000 },
  },
  emits: ['wu-copy', 'wu-error'],
  setup(props, { emit }) {
    return () =>
      h('wu-copy-button', {
        value: props.value,
        label: props.label,
        'success-label': props.successLabel,
        'feedback-duration': props.feedbackDuration,
        onWucopy: (e: CustomEvent) => emit('wu-copy', e),
        onWuerror: (e: CustomEvent) => emit('wu-error', e),
      });
  },
});
