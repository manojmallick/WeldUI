<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-breadcrumb>.
   *
   * @example
   * ```svelte
   * <WuBreadcrumb>
   *   <WuBreadcrumbItem href="/">Home</WuBreadcrumbItem>
   *   <WuBreadcrumbItem href="/products">Products</WuBreadcrumbItem>
   *   <WuBreadcrumbItem>Item</WuBreadcrumbItem>
   * </WuBreadcrumb>
   * ```
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Accessible label for the nav landmark. */
    label?: string;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    label = 'Breadcrumb',
    children,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-breadcrumb> -->
<wu-breadcrumb
  {label}
  class={className}
  {style}
>
  {@render children?.()}
</wu-breadcrumb>
