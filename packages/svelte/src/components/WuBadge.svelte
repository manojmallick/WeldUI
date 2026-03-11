<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-badge>.
   *
   * @example
   * ```svelte
   * <WuBadge variant="success">Active</WuBadge>
   * <WuBadge variant="danger">Error</WuBadge>
   * ```
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Visual style variant. */
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';
    /** Default slot content (badge label). */
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let { variant = 'default', children, class: className, style }: Props = $props();
</script>

<!-- @component Wrapper for <wu-badge> -->
<wu-badge {variant} class={className} {style}>
  {@render children?.()}
</wu-badge>
