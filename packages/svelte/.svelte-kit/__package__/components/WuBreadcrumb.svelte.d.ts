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
/** Wrapper for <wu-breadcrumb> */
declare const WuBreadcrumb: import("svelte").Component<Props, {}, "">;
type WuBreadcrumb = ReturnType<typeof WuBreadcrumb>;
export default WuBreadcrumb;
//# sourceMappingURL=WuBreadcrumb.svelte.d.ts.map