<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-command>.
   *
   * @example
   * ```svelte
   * <WuCommand
   *   items={commandItems}
   *   open
   *   onWuSelect={handleSelect}
   *   onWuClose={handleClose}
   * />
   * ```
   */

  interface WuCommandItem {
    id: string;
    label: string;
    description?: string;
    icon?: string;
    group?: string;
    shortcut?: string;
    disabled?: boolean;
  }

  interface Props {
    /** Command items to display. */
    items?: WuCommandItem[];
    /** Whether the palette is open. */
    open?: boolean;
    /** Placeholder text for the search input. */
    placeholder?: string;
    /** Emitted when an item is selected. */
    onWuSelect?: (e: CustomEvent<{ item: WuCommandItem }>) => void;
    /** Emitted when the palette is closed. */
    onWuClose?: (e: CustomEvent) => void;
    class?: string;
    style?: string;
  }

  let {
    items = [],
    open = false,
    placeholder = 'Search…',
    onWuSelect,
    onWuClose,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const handlers: Array<[string, EventListener]> = [];
    if (onWuSelect) {
      const h = (e: Event) => onWuSelect!(e as CustomEvent<{ item: WuCommandItem }>);
      el.addEventListener('wu-select', h);
      handlers.push(['wu-select', h]);
    }
    if (onWuClose) {
      const h = (e: Event) => onWuClose!(e as CustomEvent);
      el.addEventListener('wu-close', h);
      handlers.push(['wu-close', h]);
    }
    return () => {
      for (const [name, h] of handlers) el!.removeEventListener(name, h);
    };
  });

  $effect(() => {
    if (!el) return;
    (el as unknown as Record<string, unknown>).items = items;
  });
</script>

<!-- @component Wrapper for <wu-command> -->
<wu-command
  bind:this={el}
  {open}
  {placeholder}
  class={className}
  {style}
></wu-command>
