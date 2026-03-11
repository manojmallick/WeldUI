<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-tooltip>.
   *
   * @example
   * ```svelte
   * <WuTooltip content="Save file">
   *   <WuButton>Save</WuButton>
   * </WuTooltip>
   * ```
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Tooltip text content. */
    content?: string;
    /** Preferred placement. */
    placement?: 'top' | 'bottom' | 'left' | 'right';
    /** Show delay in ms. */
    delay?: number;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    content,
    placement = 'top',
    delay = 200,
    children,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-tooltip> -->
<wu-tooltip
  {content}
  {placement}
  {delay}
  class={className}
  {style}
>
  {@render children?.()}
</wu-tooltip>
