/**
   * Svelte 5 wrapper for <wu-stepper> and <wu-step>.
   *
   * @example
   * ```svelte
   * <WuStepper activeStep={1} onWuStepChange={handleChange}>
   *   <WuStep label="Account" />
   *   <WuStep label="Profile" />
   *   <WuStep label="Review" />
   * </WuStepper>
   * ```
   */
import type { Snippet } from 'svelte';
interface Props {
    /** Index of the currently active step (0-based). */
    activeStep?: number;
    /** Orientation of the stepper. */
    orientation?: 'horizontal' | 'vertical';
    /** Emitted when the active step changes. */
    onWuStepChange?: (e: CustomEvent<{
        step: number;
    }>) => void;
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-stepper> */
declare const WuStepper: import("svelte").Component<Props, {}, "">;
type WuStepper = ReturnType<typeof WuStepper>;
export default WuStepper;
//# sourceMappingURL=WuStepper.svelte.d.ts.map