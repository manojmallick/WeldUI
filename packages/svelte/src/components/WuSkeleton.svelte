<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-skeleton>.
   *
   * @example
   * ```svelte
   * <WuSkeleton variant="text" width="200px" />
   * <WuSkeleton variant="circle" size="48px" />
   * ```
   */

  interface Props {
    /** Shape variant. */
    variant?: 'text' | 'rect' | 'circle';
    /** Width of the skeleton. */
    width?: string;
    /** Height of the skeleton. */
    height?: string;
    /** Size (diameter) for circle variant. */
    size?: string;
    /** Enable shimmer animation. */
    animated?: boolean;
    class?: string;
    style?: string;
  }

  let {
    variant = 'text',
    width,
    height,
    size,
    animated = true,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-skeleton> -->
<wu-skeleton
  {variant}
  {width}
  {height}
  {size}
  {animated}
  class={className}
  {style}
></wu-skeleton>
