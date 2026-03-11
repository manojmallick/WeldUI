<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-accordion-item> (used inside <wu-accordion>).
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Header summary text. */
    summary?: string;
    /** Whether the item is expanded. */
    open?: boolean;
    /** Whether the item is disabled. */
    disabled?: boolean;
    /** Emitted when the item toggles open/closed. */
    onWuToggle?: (e: CustomEvent<{ open: boolean }>) => void;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    summary,
    open = false,
    disabled = false,
    onWuToggle,
    children,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const _handler = onWuToggle;
    if (!_handler) return;
    const handler = (e: Event) => _handler(e as CustomEvent<{ open: boolean }>);
    el.addEventListener('wu-toggle', handler);
    return () => el!.removeEventListener('wu-toggle', handler);
  });
</script>

<!-- @component Wrapper for <wu-accordion-item> -->
<wu-accordion-item
  bind:this={el}
  {summary}
  {open}
  {disabled}
  class={className}
  {style}
>
  {@render children?.()}
</wu-accordion-item>
