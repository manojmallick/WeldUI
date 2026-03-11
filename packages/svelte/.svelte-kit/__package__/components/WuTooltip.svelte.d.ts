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
/** Wrapper for <wu-tooltip> */
declare const WuTooltip: import("svelte").Component<Props, {}, "">;
type WuTooltip = ReturnType<typeof WuTooltip>;
export default WuTooltip;
//# sourceMappingURL=WuTooltip.svelte.d.ts.map