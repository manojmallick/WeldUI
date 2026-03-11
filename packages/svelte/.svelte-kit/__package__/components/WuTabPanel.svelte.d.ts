/**
   * Svelte 5 wrapper for <wu-tab-panel> (used inside <wu-tabs>).
   */
import type { Snippet } from 'svelte';
interface Props {
    /** Matches the panel prop on the corresponding <wu-tab>. */
    name?: string;
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-tab-panel> */
declare const WuTabPanel: import("svelte").Component<Props, {}, "">;
type WuTabPanel = ReturnType<typeof WuTabPanel>;
export default WuTabPanel;
//# sourceMappingURL=WuTabPanel.svelte.d.ts.map