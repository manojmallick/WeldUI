<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-accordion>.
   *
   * @example
   * ```svelte
   * <WuAccordion>
   *   <WuAccordionItem summary="Section 1">Content</WuAccordionItem>
   * </WuAccordion>
   * ```
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Allow multiple items to be open simultaneously. */
    multiple?: boolean;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    multiple = false,
    children,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-accordion> -->
<wu-accordion
  {multiple}
  class={className}
  {style}
>
  {@render children?.()}
</wu-accordion>
