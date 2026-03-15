import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuQrCode',
  props: {
    value: { type: String, default: '' },
    size: { type: Number, default: 200 },
    errorCorrectionLevel: { type: String, default: 'M' },
  },
  setup(props) {
    return () =>
      h('wu-qr-code', {
        value: props.value,
        size: props.size,
        'error-correction-level': props.errorCorrectionLevel,
      });
  },
});
