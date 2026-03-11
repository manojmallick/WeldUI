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
/** Wrapper for <wu-breadcrumb-item> */
declare const WuBreadcrumbItem: import("svelte").Component<Props, {}, "">;
type WuBreadcrumbItem = ReturnType<typeof WuBreadcrumbItem>;
export default WuBreadcrumbItem;
//# sourceMappingURL=WuBreadcrumbItem.svelte.d.ts.map