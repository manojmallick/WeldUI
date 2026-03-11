<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-toast>.
   *
   * @example
   * ```svelte
   * <WuToast variant="success" message="Saved!" open onWuClose={handleClose} />
   * ```
   */

  interface Props {
    /** Toast variant. */
    variant?: 'info' | 'success' | 'warning' | 'danger';
    /** Toast message. */
    message?: string;
    /** Whether the toast is visible. */
    open?: boolean;
    /** Auto-dismiss duration in ms (0 = no auto-dismiss). */
    duration?: number;
    /** Emitted when the toast is dismissed. */
    onWuClose?: (e: CustomEvent) => void;
    class?: string;
    style?: string;
  }

  let {
    variant = 'info',
    message,
    open = false,
    duration = 3000,
    onWuClose,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const _handler = onWuClose;
    if (!_handler) return;
    const handler = (e: Event) => _handler(e as CustomEvent);
    el.addEventListener('wu-close', handler);
    return () => el!.removeEventListener('wu-close', handler);
  });
</script>

<!-- @component Wrapper for <wu-toast> -->
<wu-toast
  bind:this={el}
  {variant}
  {message}
  {open}
  {duration}
  class={className}
  {style}
></wu-toast>
