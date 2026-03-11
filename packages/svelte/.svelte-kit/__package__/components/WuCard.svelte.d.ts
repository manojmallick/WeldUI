/**
   * Svelte 5 wrapper for <wu-card>.
   *
   * @example
   * ```svelte
   * <WuCard>
   *   <span slot="header">Title</span>
   *   <p>Body content</p>
   * </WuCard>
   * ```
   */
import type { Snippet } from 'svelte';
interface Props {
    /** Interactive/clickable card. */
    interactive?: boolean;
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-card> */
declare const WuCard: import("svelte").Component<Props, {}, "">;
type WuCard = ReturnType<typeof WuCard>;
export default WuCard;
//# sourceMappingURL=WuCard.svelte.d.ts.map