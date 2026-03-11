/**
   * Svelte 5 wrapper for <wu-popover>.
   *
   * @example
   * ```svelte
   * <WuPopover>
   *   <WuButton slot="trigger">Open</WuButton>
   *   <p>Popover body content</p>
   * </WuPopover>
   * ```
   */
import type { Snippet } from 'svelte';
interface Props {
    /** Preferred placement. */
    placement?: 'top' | 'bottom' | 'left' | 'right';
    /** Whether the popover is open. */
    open?: boolean;
    /** Emitted when the popover opens. */
    onWuOpen?: (e: CustomEvent) => void;
    /** Emitted when the popover closes. */
    onWuClose?: (e: CustomEvent) => void;
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-popover> */
declare const WuPopover: import("svelte").Component<Props, {}, "">;
type WuPopover = ReturnType<typeof WuPopover>;
export default WuPopover;
//# sourceMappingURL=WuPopover.svelte.d.ts.map