<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-spinner>.
   *
   * @example
   * ```svelte
   * <WuSpinner size="lg" />
   * ```
   */

  interface Props {
    /** Size variant. */
    size?: 'sm' | 'md' | 'lg';
    /** Accessible label for screen readers. */
    label?: string;
    class?: string;
    style?: string;
  }

  let {
    size = 'md',
    label,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-spinner> -->
<wu-spinner
  {size}
  {label}
  class={className}
  {style}
></wu-spinner>
