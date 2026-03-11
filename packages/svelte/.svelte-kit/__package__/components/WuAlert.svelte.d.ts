/**
   * Svelte 5 wrapper for <wu-alert>.
   *
   * @example
   * ```svelte
   * <WuAlert variant="success" dismissible onWuDismiss={handleDismiss}>
   *   Operation completed successfully.
   * </WuAlert>
   * ```
   */
import type { Snippet } from 'svelte';
interface Props {
    /** Alert variant. */
    variant?: 'info' | 'success' | 'warning' | 'danger';
    /** Whether the alert can be dismissed. */
    dismissible?: boolean;
    /** Emitted when the alert is dismissed. */
    onWuDismiss?: (e: CustomEvent) => void;
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-alert> */
declare const WuAlert: import("svelte").Component<Props, {}, "">;
type WuAlert = ReturnType<typeof WuAlert>;
export default WuAlert;
//# sourceMappingURL=WuAlert.svelte.d.ts.map