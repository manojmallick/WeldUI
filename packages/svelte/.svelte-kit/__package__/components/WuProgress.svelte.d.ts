/**
 * Svelte 5 wrapper for <wu-progress>.
 *
 * @example
 * ```svelte
 * <WuProgress value={65} max={100} label="Upload" />
 * ```
 */
interface Props {
    /** Current progress value. */
    value?: number;
    /** Maximum value. */
    max?: number;
    /** Indeterminate state. */
    indeterminate?: boolean;
    /** Visible label above the bar. */
    label?: string;
    /** Show percentage text. */
    showLabel?: boolean;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-progress> */
declare const WuProgress: import("svelte").Component<Props, {}, "">;
type WuProgress = ReturnType<typeof WuProgress>;
export default WuProgress;
//# sourceMappingURL=WuProgress.svelte.d.ts.map