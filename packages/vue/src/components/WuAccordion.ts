import { defineComponent, h } from 'vue';
import '@weldui/core';

export const WuAccordion = defineComponent({
  name: 'WuAccordion',
  props: {
    single: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h('wu-accordion', { single: props.single || undefined }, slots.default?.());
  },
});

export const WuAccordionItem = defineComponent({
  name: 'WuAccordionItem',
  props: {
    summary: { type: String, default: undefined },
    open: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-accordion-item',
        {
          summary: props.summary,
          open: props.open || undefined,
          disabled: props.disabled || undefined,
        },
        slots.default?.()
      );
  },
});
