import { defineComponent, h } from 'vue';
import '@weldui/core';

export default defineComponent({
  name: 'WuPagination',
  props: {
    page: { type: Number, default: 1 },
    totalPages: { type: Number, default: 1 },
    showInfo: { type: Boolean, default: false },
    totalItems: { type: Number, default: undefined },
    pageSize: { type: Number, default: undefined },
  },
  emits: ['wu-page-change'],
  setup(props, { emit }) {
    return () =>
      h('wu-pagination', {
        page: props.page,
        'total-pages': props.totalPages,
        'show-info': props.showInfo || undefined,
        'total-items': props.totalItems,
        'page-size': props.pageSize,
        onWupagechange: (e: CustomEvent) => emit('wu-page-change', e),
      });
  },
});
