<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-step> (used inside <wu-stepper>).
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Step label. */
    label?: string;
    /** Step description. */
    description?: string;
    /** Step status. */
    status?: 'pending' | 'active' | 'complete' | 'error';
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    label,
    description,
    status = 'pending',
    children,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-step> -->
<wu-step
  {label}
  {description}
  {status}
  class={className}
  {style}
>
  {@render children?.()}
</wu-step>
