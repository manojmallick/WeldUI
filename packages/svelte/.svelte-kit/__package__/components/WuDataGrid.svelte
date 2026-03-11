<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-data-grid>.
   *
   * @example
   * ```svelte
   * <WuDataGrid columns={cols} rows={data} onWuRowEdit={handleEdit} />
   * ```
   */

  interface WuDataGridColumn {
    key: string;
    label: string;
    sortable?: boolean;
    editable?: boolean;
    width?: string;
  }

  interface Props {
    /** Column definitions. */
    columns?: WuDataGridColumn[];
    /** Row data — each item should have keys matching column.key. */
    rows?: Record<string, unknown>[];
    /** Number of rows to render in virtual viewport. */
    virtualRows?: number;
    /** Allow column resizing. */
    resizable?: boolean;
    /** Emitted when a cell edit is committed. */
    onWuRowEdit?: (e: CustomEvent<{ row: Record<string, unknown>; key: string; value: unknown }>) => void;
    /** Emitted when sort changes. */
    onWuSort?: (e: CustomEvent<{ key: string; direction: 'asc' | 'desc' }>) => void;
    class?: string;
    style?: string;
  }

  let {
    columns = [],
    rows = [],
    virtualRows = 50,
    resizable = false,
    onWuRowEdit,
    onWuSort,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const handlers: Array<[string, EventListener]> = [];
    if (onWuRowEdit) {
      const h = (e: Event) => onWuRowEdit!(e as CustomEvent<{ row: Record<string, unknown>; key: string; value: unknown }>);
      el.addEventListener('wu-row-edit', h);
      handlers.push(['wu-row-edit', h]);
    }
    if (onWuSort) {
      const h = (e: Event) => onWuSort!(e as CustomEvent<{ key: string; direction: 'asc' | 'desc' }>);
      el.addEventListener('wu-sort', h);
      handlers.push(['wu-sort', h]);
    }
    return () => {
      for (const [name, h] of handlers) el!.removeEventListener(name, h);
    };
  });

  $effect(() => {
    if (!el) return;
    (el as unknown as Record<string, unknown>).columns = columns;
  });

  $effect(() => {
    if (!el) return;
    (el as unknown as Record<string, unknown>).rows = rows;
  });
</script>

<!-- @component Wrapper for <wu-data-grid> -->
<wu-data-grid
  bind:this={el}
  virtual-rows={virtualRows}
  {resizable}
  class={className}
  {style}
></wu-data-grid>
