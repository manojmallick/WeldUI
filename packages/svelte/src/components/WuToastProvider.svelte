<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-toast-provider>.
   * Place once near the root of your app to enable programmatic toasts.
   *
   * @example
   * ```svelte
   * <WuToastProvider position="top-right" />
   * ```
   */

  interface Props {
    /** Position of the toast stack. */
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    class?: string;
    style?: string;
  }

  let {
    position = 'top-right',
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-toast-provider> -->
<wu-toast-provider
  {position}
  class={className}
  {style}
></wu-toast-provider>
