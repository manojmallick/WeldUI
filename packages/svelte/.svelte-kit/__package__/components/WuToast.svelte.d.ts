/**
 * Svelte 5 wrapper for <wu-toast>.
 *
 * @example
 * ```svelte
 * <WuToast variant="success" message="Saved!" open onWuClose={handleClose} />
 * ```
 */
interface Props {
    /** Toast variant. */
    variant?: 'info' | 'success' | 'warning' | 'danger';
    /** Toast message. */
    message?: string;
    /** Whether the toast is visible. */
    open?: boolean;
    /** Auto-dismiss duration in ms (0 = no auto-dismiss). */
    duration?: number;
    /** Emitted when the toast is dismissed. */
    onWuClose?: (e: CustomEvent) => void;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-toast> */
declare const WuToast: import("svelte").Component<Props, {}, "">;
type WuToast = ReturnType<typeof WuToast>;
export default WuToast;
//# sourceMappingURL=WuToast.svelte.d.ts.map