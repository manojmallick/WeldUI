<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-tab> (used inside <wu-tabs>).
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** The panel name this tab activates. */
    panel?: string;
    /** Whether this tab is active. */
    active?: boolean;
    /** Whether this tab is disabled. */
    disabled?: boolean;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    panel,
    active = false,
    disabled = false,
    children,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-tab> -->
<wu-tab
  {panel}
  {active}
  {disabled}
  class={className}
  {style}
>
  {@render children?.()}
</wu-tab>
