/**
 * Svelte 5 wrapper for <wu-spinner>.
 *
 * @example
 * ```svelte
 * <WuSpinner size="lg" />
 * ```
 */
interface Props {
    /** Size variant. */
    size?: 'sm' | 'md' | 'lg';
    /** Accessible label for screen readers. */
    label?: string;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-spinner> */
declare const WuSpinner: import("svelte").Component<Props, {}, "">;
type WuSpinner = ReturnType<typeof WuSpinner>;
export default WuSpinner;
//# sourceMappingURL=WuSpinner.svelte.d.ts.map