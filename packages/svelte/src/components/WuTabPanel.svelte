<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-tab-panel> (used inside <wu-tabs>).
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Matches the panel prop on the corresponding <wu-tab>. */
    name?: string;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    name,
    children,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-tab-panel> -->
<wu-tab-panel
  {name}
  class={className}
  {style}
>
  {@render children?.()}
</wu-tab-panel>
