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
/** Wrapper for <wu-badge> */
declare const WuBadge: import("svelte").Component<Props, {}, "">;
type WuBadge = ReturnType<typeof WuBadge>;
export default WuBadge;
//# sourceMappingURL=WuBadge.svelte.d.ts.map