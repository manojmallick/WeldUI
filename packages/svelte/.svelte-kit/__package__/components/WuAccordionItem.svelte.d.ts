/**
   * Svelte 5 wrapper for <wu-accordion-item> (used inside <wu-accordion>).
   */
import type { Snippet } from 'svelte';
interface Props {
    /** Header summary text. */
    summary?: string;
    /** Whether the item is expanded. */
    open?: boolean;
    /** Whether the item is disabled. */
    disabled?: boolean;
    /** Emitted when the item toggles open/closed. */
    onWuToggle?: (e: CustomEvent<{
        open: boolean;
    }>) => void;
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-accordion-item> */
declare const WuAccordionItem: import("svelte").Component<Props, {}, "">;
type WuAccordionItem = ReturnType<typeof WuAccordionItem>;
export default WuAccordionItem;
//# sourceMappingURL=WuAccordionItem.svelte.d.ts.map