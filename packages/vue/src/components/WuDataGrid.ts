import { defineComponent, h, onMounted, ref, watch } from 'vue';
import '@weldui/core';

type WuDataGridColumn = {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
};

export default defineComponent({
  name: 'WuDataGrid',
  props: {
    columns: { type: Array as () => WuDataGridColumn[], default: () => [] },
    data: { type: Array as () => Record<string, unknown>[], default: () => [] },
    totalRows: { type: Number, default: undefined },
    page: { type: Number, default: 1 },
    pageSize: { type: Number, default: 25 },
    showToolbar: { type: Boolean, default: true },
    emptyMessage: { type: String, default: 'No data' },
  },
  emits: ['wu-sort-change', 'wu-filter-change', 'wu-page-change'],
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
      el.addEventListener('wu-sort-change', (e: Event) => emit('wu-sort-change', e as CustomEvent));
      el.addEventListener('wu-filter-change', (e: Event) => emit('wu-filter-change', e as CustomEvent));
      el.addEventListener('wu-page-change', (e: Event) => emit('wu-page-change', e as CustomEvent));
    });

    watch([() => props.columns, () => props.data], setProps, { deep: true });

    return () =>
      h('wu-data-grid', {
        ref: elRef,
        'total-rows': props.totalRows,
        page: props.page,
        'page-size': props.pageSize,
        'show-toolbar': props.showToolbar || undefined,
        'empty-message': props.emptyMessage,
      });
  },
});
