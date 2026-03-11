<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-alert>.
   *
   * @example
   * ```svelte
   * <WuAlert variant="success" dismissible onWuDismiss={handleDismiss}>
   *   Operation completed successfully.
   * </WuAlert>
   * ```
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Alert variant. */
    variant?: 'info' | 'success' | 'warning' | 'danger';
    /** Whether the alert can be dismissed. */
    dismissible?: boolean;
    /** Emitted when the alert is dismissed. */
    onWuDismiss?: (e: CustomEvent) => void;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    variant = 'info',
    dismissible = false,
    onWuDismiss,
    children,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const _handler = onWuDismiss;
    if (!_handler) return;
    const handler = (e: Event) => _handler(e as CustomEvent);
    el.addEventListener('wu-dismiss', handler);
    return () => el!.removeEventListener('wu-dismiss', handler);
  });
</script>

<!-- @component Wrapper for <wu-alert> -->
<wu-alert
  bind:this={el}
  {variant}
  {dismissible}
  class={className}
  {style}
>
  {@render children?.()}
</wu-alert>
