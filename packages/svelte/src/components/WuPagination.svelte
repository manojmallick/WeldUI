<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-pagination>.
   *
   * @example
   * ```svelte
   * <WuPagination page={2} total={100} pageSize={10} onWuPageChange={handleChange} />
   * ```
   */

  interface Props {
    /** Current page (1-based). */
    page?: number;
    /** Total number of items. */
    total?: number;
    /** Items per page. */
    pageSize?: number;
    /** Sibling page count around current. */
    siblingCount?: number;
    /** Emitted when the page changes. */
    onWuPageChange?: (e: CustomEvent<{ page: number }>) => void;
    class?: string;
    style?: string;
  }

  let {
    page = 1,
    total = 0,
    pageSize = 10,
    siblingCount = 1,
    onWuPageChange,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const _handler = onWuPageChange;
    if (!_handler) return;
    const handler = (e: Event) => _handler(e as CustomEvent<{ page: number }>);
    el.addEventListener('wu-page-change', handler);
    return () => el!.removeEventListener('wu-page-change', handler);
  });
</script>

<!-- @component Wrapper for <wu-pagination> -->
<wu-pagination
  bind:this={el}
  {page}
  {total}
  page-size={pageSize}
  sibling-count={siblingCount}
  class={className}
  {style}
></wu-pagination>
