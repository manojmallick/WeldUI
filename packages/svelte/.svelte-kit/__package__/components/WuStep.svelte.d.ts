/**
   * Svelte 5 wrapper for <wu-step> (used inside <wu-stepper>).
   */
import type { Snippet } from 'svelte';
interface Props {
    /** Step label. */
    label?: string;
    /** Step description. */
    description?: string;
    /** Step status. */
    status?: 'pending' | 'active' | 'complete' | 'error';
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-step> */
declare const WuStep: import("svelte").Component<Props, {}, "">;
type WuStep = ReturnType<typeof WuStep>;
export default WuStep;
//# sourceMappingURL=WuStep.svelte.d.ts.map