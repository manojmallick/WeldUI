<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-table>.
   *
   * @example
   * ```svelte
   * <WuTable columns={cols} rows={data} selectable onWuSort={handleSort} />
   * ```
   */

  interface WuTableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
  }

  interface Props {
    /** Column definitions. */
    columns?: WuTableColumn[];
    /** Row data — each item should have keys matching column.key. */
    rows?: Record<string, unknown>[];
    /** Enable row selection checkboxes. */
    selectable?: boolean;
    /** Enable sticky header. */
    stickyHeader?: boolean;
    /** Emitted when a sortable column header is clicked. */
    onWuSort?: (e: CustomEvent<{ key: string; direction: 'asc' | 'desc' }>) => void;
    /** Emitted when selected rows change. */
    onWuSelect?: (e: CustomEvent<{ rows: Record<string, unknown>[] }>) => void;
    class?: string;
    style?: string;
  }

  let {
    columns = [],
    rows = [],
    selectable = false,
    stickyHeader = false,
    onWuSort,
    onWuSelect,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const handlers: Array<[string, EventListener]> = [];
    if (onWuSort) {
      const h = (e: Event) => onWuSort!(e as CustomEvent<{ key: string; direction: 'asc' | 'desc' }>);
      el.addEventListener('wu-sort', h);
      handlers.push(['wu-sort', h]);
    }
    if (onWuSelect) {
      const h = (e: Event) => onWuSelect!(e as CustomEvent<{ rows: Record<string, unknown>[] }>);
      el.addEventListener('wu-select', h);
      handlers.push(['wu-select', h]);
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

<!-- @component Wrapper for <wu-table> -->
<wu-table
  bind:this={el}
  {selectable}
  sticky-header={stickyHeader}
  class={className}
  {style}
></wu-table>
