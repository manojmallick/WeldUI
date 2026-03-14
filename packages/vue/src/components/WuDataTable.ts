import { defineComponent, h, watchEffect, ref } from 'vue';
import '@weldui/core';
import type { WuDataTableColumn } from '@weldui/core';

export default defineComponent({
  name: 'WuDataTable',
  props: {
    columns:      { type: Array as () => WuDataTableColumn[], default: () => [] },
    rows:         { type: Array as () => Record<string, unknown>[], default: () => [] },
    total:        { type: Number,  default: 0 },
    page:         { type: Number,  default: 1 },
    pageSize:     { type: Number,  default: 10 },
    loading:      { type: Boolean, default: false },
    selectable:   { type: Boolean, default: false },
    searchable:   { type: Boolean, default: false },
    emptyMessage: { type: String,  default: 'No data to display.' },
  },
  emits: ['wu-page-change', 'wu-sort-change', 'wu-search-change', 'wu-selection-change'],
  setup(props, { emit }) {
    const elRef = ref<HTMLElement | null>(null);

    watchEffect(() => {
      if (elRef.value) {
        (elRef.value as any).columns = props.columns;
        (elRef.value as any).rows    = props.rows;
      }
    });

    return () =>
      h('wu-data-table', {
        ref: elRef,
        total:          props.total,
        page:           props.page,
        'page-size':    props.pageSize,
        loading:        props.loading    || undefined,
        selectable:     props.selectable || undefined,
        searchable:     props.searchable || undefined,
        'empty-message': props.emptyMessage,
        onWuPageChange:      (e: CustomEvent) => emit('wu-page-change',      e),
        onWuSortChange:      (e: CustomEvent) => emit('wu-sort-change',      e),
        onWuSearchChange:    (e: CustomEvent) => emit('wu-search-change',    e),
        onWuSelectionChange: (e: CustomEvent) => emit('wu-selection-change', e),
      });
  },
});
