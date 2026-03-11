import { defineComponent, h, onMounted, ref, watch } from 'vue';
import '@weldui/core';

type WuTableColumn = { key: string; label: string; sortable?: boolean; width?: string };

export default defineComponent({
  name: 'WuTable',
  props: {
    columns: { type: Array as () => WuTableColumn[], default: () => [] },
    data: { type: Array as () => Record<string, unknown>[], default: () => [] },
    selectable: { type: Boolean, default: false },
    sortKey: { type: String, default: undefined },
    sortDirection: { type: String, default: 'asc' },
    emptyMessage: { type: String, default: 'No data' },
  },
  emits: ['wu-sort', 'wu-select'],
  setup(props, { emit }) {
    const elRef = ref<HTMLElement | null>(null);

    const setProps = () => {
      const el = elRef.value as any;
      if (!el) return;
      el.columns = props.columns;
      el.data = props.data;
    };

    onMounted(() => {
      setProps();
      const el = elRef.value;
      if (!el) return;
      el.addEventListener('wu-sort', (e: Event) => emit('wu-sort', e as CustomEvent));
      el.addEventListener('wu-select', (e: Event) => emit('wu-select', e as CustomEvent));
    });

    watch([() => props.columns, () => props.data], setProps);

    return () =>
      h('wu-table', {
        ref: elRef,
        selectable: props.selectable || undefined,
        'sort-key': props.sortKey,
        'sort-direction': props.sortDirection,
        'empty-message': props.emptyMessage,
      });
  },
});
