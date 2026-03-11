import { defineComponent, h } from 'vue';
import '@weldui/core';

export const WuTabs = defineComponent({
  name: 'WuTabs',
  props: {
    orientation: { type: String, default: 'horizontal' },
    activePanel: { type: String, default: undefined },
  },
  emits: ['wu-tab-change'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-tabs',
        {
          orientation: props.orientation,
          'active-panel': props.activePanel,
          onWutabchange: (e: CustomEvent) => emit('wu-tab-change', e),
        },
        slots.default?.()
      );
  },
});

export const WuTab = defineComponent({
  name: 'WuTab',
  props: {
    panel: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h('wu-tab', { panel: props.panel, disabled: props.disabled || undefined }, slots.default?.());
  },
});

export const WuTabPanel = defineComponent({
  name: 'WuTabPanel',
  props: {
    name: { type: String, default: undefined },
  },
  setup(props, { slots }) {
    return () => h('wu-tab-panel', { name: props.name }, slots.default?.());
  },
});
