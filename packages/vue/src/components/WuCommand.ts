import { defineComponent, h, onMounted, ref, watch } from 'vue';
import '@weldui/core';

type WuCommandItem = {
  id: string;
  label: string;
  group?: string;
  shortcut?: string;
  icon?: string;
  keywords?: string[];
};

export default defineComponent({
  name: 'WuCommand',
  props: {
    open: { type: Boolean, default: false },
    items: { type: Array as () => WuCommandItem[], default: () => [] },
    placeholder: { type: String, default: 'Search...' },
    emptyMessage: { type: String, default: 'No results' },
  },
  emits: ['wu-select', 'wu-close'],
  setup(props, { emit }) {
    const elRef = ref<HTMLElement | null>(null);

    const setItems = () => {
      const el = elRef.value as any;
      if (el) el.items = props.items;
    };

    onMounted(() => {
      setItems();
      const el = elRef.value;
      if (!el) return;
      el.addEventListener('wu-select', (e: Event) => emit('wu-select', e as CustomEvent));
      el.addEventListener('wu-close', (e: Event) => emit('wu-close', e as CustomEvent));
    });

    watch(() => props.items, setItems, { deep: true });

    return () =>
      h('wu-command', {
        ref: elRef,
        open: props.open || undefined,
        placeholder: props.placeholder,
        'empty-message': props.emptyMessage,
      });
  },
});
