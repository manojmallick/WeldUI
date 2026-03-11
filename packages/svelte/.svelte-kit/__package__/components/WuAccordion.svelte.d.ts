/**
   * Svelte 5 wrapper for <wu-accordion>.
   *
   * @example
   * ```svelte
   * <WuAccordion>
   *   <WuAccordionItem summary="Section 1">Content</WuAccordionItem>
   * </WuAccordion>
   * ```
   */
import type { Snippet } from 'svelte';
interface Props {
    /** Allow multiple items to be open simultaneously. */
    multiple?: boolean;
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-accordion> */
declare const WuAccordion: import("svelte").Component<Props, {}, "">;
type WuAccordion = ReturnType<typeof WuAccordion>;
export default WuAccordion;
//# sourceMappingURL=WuAccordion.svelte.d.ts.map