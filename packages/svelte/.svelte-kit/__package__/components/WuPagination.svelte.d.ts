/**
 * Svelte 5 wrapper for <wu-pagination>.
 *
 * @example
 * ```svelte
 * <WuPagination page={2} total={100} pageSize={10} onWuPageChange={handleChange} />
 * ```
 */
interface Props {
    /** Current page (1-based). */
    page?: number;
    /** Total number of items. */
    total?: number;
    /** Items per page. */
    pageSize?: number;
    /** Sibling page count around current. */
    siblingCount?: number;
    /** Emitted when the page changes. */
    onWuPageChange?: (e: CustomEvent<{
        page: number;
    }>) => void;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-pagination> */
declare const WuPagination: import("svelte").Component<Props, {}, "">;
type WuPagination = ReturnType<typeof WuPagination>;
export default WuPagination;
//# sourceMappingURL=WuPagination.svelte.d.ts.map