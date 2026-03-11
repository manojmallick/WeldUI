/**
   * Svelte 5 wrapper for <wu-tab> (used inside <wu-tabs>).
   */
import type { Snippet } from 'svelte';
interface Props {
    /** The panel name this tab activates. */
    panel?: string;
    /** Whether this tab is active. */
    active?: boolean;
    /** Whether this tab is disabled. */
    disabled?: boolean;
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-tab> */
declare const WuTab: import("svelte").Component<Props, {}, "">;
type WuTab = ReturnType<typeof WuTab>;
export default WuTab;
//# sourceMappingURL=WuTab.svelte.d.ts.map