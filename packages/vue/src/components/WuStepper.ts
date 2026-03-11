import { defineComponent, h } from 'vue';
import '@weldui/core';

export const WuStepper = defineComponent({
  name: 'WuStepper',
  props: {
    activeStep: { type: Number, default: 0 },
    linear: { type: Boolean, default: true },
    vertical: { type: Boolean, default: false },
  },
  emits: ['wu-step-change'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-stepper',
        {
          'active-step': props.activeStep,
          linear: props.linear || undefined,
          vertical: props.vertical || undefined,
          onWustepchange: (e: CustomEvent) => emit('wu-step-change', e),
        },
        slots.default?.()
      );
  },
});

export const WuStep = defineComponent({
  name: 'WuStep',
  props: {
    label: { type: String, default: undefined },
    description: { type: String, default: undefined },
    status: { type: String, default: 'pending' },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-step',
        {
          label: props.label,
          description: props.description,
          status: props.status,
          disabled: props.disabled || undefined,
        },
        slots.default?.()
      );
  },
});
