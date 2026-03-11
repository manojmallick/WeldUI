<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-divider>.
   *
   * @example
   * ```svelte
   * <WuDivider />
   * <WuDivider orientation="vertical" />
   * <WuDivider>Or</WuDivider>
   * ```
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Orientation of the divider. */
    orientation?: 'horizontal' | 'vertical';
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    orientation = 'horizontal',
    children,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-divider> -->
<wu-divider
  {orientation}
  class={className}
  {style}
>
  {@render children?.()}
</wu-divider>
