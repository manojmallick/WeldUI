import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuFileUpload',
  props: {
    accept: { type: String, default: undefined },
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    hint: { type: String, default: undefined },
  },
  emits: ['wu-file-select', 'wu-file-remove'],
  setup(props, { emit }) {
    return () =>
      h('wu-file-upload', {
        accept: props.accept,
        multiple: props.multiple || undefined,
        disabled: props.disabled || undefined,
        hint: props.hint,
        onWufileselect: (e: CustomEvent) => emit('wu-file-select', e),
        onWufileremove: (e: CustomEvent) => emit('wu-file-remove', e),
      });
  },
});
