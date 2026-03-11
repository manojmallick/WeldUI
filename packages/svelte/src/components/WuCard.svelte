<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-card>.
   *
   * @example
   * ```svelte
   * <WuCard>
   *   <span slot="header">Title</span>
   *   <p>Body content</p>
   * </WuCard>
   * ```
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Interactive/clickable card. */
    interactive?: boolean;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    interactive = false,
    children,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-card> -->
<wu-card
  {interactive}
  class={className}
  {style}
>
  {@render children?.()}
</wu-card>
