/**
 * Svelte 5 wrapper for <wu-toast-provider>.
 * Place once near the root of your app to enable programmatic toasts.
 *
 * @example
 * ```svelte
 * <WuToastProvider position="top-right" />
 * ```
 */
interface Props {
    /** Position of the toast stack. */
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    class?: string;
    style?: string;
}
/** Wrapper for <wu-toast-provider> */
declare const WuToastProvider: import("svelte").Component<Props, {}, "">;
type WuToastProvider = ReturnType<typeof WuToastProvider>;
export default WuToastProvider;
//# sourceMappingURL=WuToastProvider.svelte.d.ts.map