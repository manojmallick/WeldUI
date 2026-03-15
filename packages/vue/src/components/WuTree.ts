import { defineComponent, h } from 'vue';
import '@weldui/core';

export const WuTree = defineComponent({
  name: 'WuTree',
  props: {
    selection: { type: String, default: 'single' },
  },
  emits: ['wu-select', 'wu-expand', 'wu-collapse'],
  setup(props, { slots, emit }) {
    return () =>
      h(
        'wu-tree',
        {
          selection: props.selection,
          onWuselect: (e: CustomEvent) => emit('wu-select', e),
          onWuexpand: (e: CustomEvent) => emit('wu-expand', e),
          onWucollapse: (e: CustomEvent) => emit('wu-collapse', e),
        },
        slots.default?.()
      );
  },
});

export const WuTreeItem = defineComponent({
  name: 'WuTreeItem',
  props: {
    label: { type: String, default: undefined },
    expanded: { type: Boolean, default: false },
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'wu-tree-item',
        {
          label: props.label,
          expanded: props.expanded || undefined,
          selected: props.selected || undefined,
          disabled: props.disabled || undefined,
        },
        slots.default?.()
      );
  },
});
