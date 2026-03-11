<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-modal>.
   *
   * @example
   * ```svelte
   * <WuModal bind:open={isOpen} label="Confirm action" onWuClose={handleClose}>
   *   <p>Are you sure?</p>
   * </WuModal>
   * ```
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Whether the modal is open. */
    open?: boolean;
    /** Accessible label for the dialog. */
    label?: string;
    /** Whether clicking the backdrop closes the modal. */
    closeOnBackdrop?: boolean;
    /** Emitted when the modal is closed. */
    onWuClose?: (e: CustomEvent) => void;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    open = false,
    label,
    closeOnBackdrop = true,
    onWuClose,
    children,
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

<!-- @component Wrapper for <wu-modal> -->
<wu-modal
  bind:this={el}
  {open}
  {label}
  close-on-backdrop={closeOnBackdrop}
  class={className}
  {style}
>
  {@render children?.()}
</wu-modal>
