<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-breadcrumb-item> (used inside <wu-breadcrumb>).
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** URL for the breadcrumb link. Omit for current/last item. */
    href?: string;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    href,
    children,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-breadcrumb-item> -->
<wu-breadcrumb-item
  {href}
  class={className}
  {style}
>
  {@render children?.()}
</wu-breadcrumb-item>
