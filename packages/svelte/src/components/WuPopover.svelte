<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-popover>.
   *
   * @example
   * ```svelte
   * <WuPopover>
   *   <WuButton slot="trigger">Open</WuButton>
   *   <p>Popover body content</p>
   * </WuPopover>
   * ```
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Preferred placement. */
    placement?: 'top' | 'bottom' | 'left' | 'right';
    /** Whether the popover is open. */
    open?: boolean;
    /** Emitted when the popover opens. */
    onWuOpen?: (e: CustomEvent) => void;
    /** Emitted when the popover closes. */
    onWuClose?: (e: CustomEvent) => void;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    placement = 'bottom',
    open = false,
    onWuOpen,
    onWuClose,
    children,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const handlers: Array<[string, EventListener]> = [];
    if (onWuOpen) {
      const h = (e: Event) => onWuOpen!(e as CustomEvent);
      el.addEventListener('wu-open', h);
      handlers.push(['wu-open', h]);
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
</script>

<!-- @component Wrapper for <wu-popover> -->
<wu-popover
  bind:this={el}
  {placement}
  {open}
  class={className}
  {style}
>
  {@render children?.()}
</wu-popover>
