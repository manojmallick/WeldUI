/**
 * Svelte 5 wrapper for <wu-table>.
 *
 * @example
 * ```svelte
 * <WuTable columns={cols} rows={data} selectable onWuSort={handleSort} />
 * ```
 */
interface WuTableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
}
interface Props {
    /** Column definitions. */
    columns?: WuTableColumn[];
    /** Row data — each item should have keys matching column.key. */
    rows?: Record<string, unknown>[];
    /** Enable row selection checkboxes. */
    selectable?: boolean;
    /** Enable sticky header. */
    stickyHeader?: boolean;
    /** Emitted when a sortable column header is clicked. */
    onWuSort?: (e: CustomEvent<{
        key: string;
        direction: 'asc' | 'desc';
    }>) => void;
    /** Emitted when selected rows change. */
    onWuSelect?: (e: CustomEvent<{
        rows: Record<string, unknown>[];
    }>) => void;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-table> */
declare const WuTable: import("svelte").Component<Props, {}, "">;
type WuTable = ReturnType<typeof WuTable>;
export default WuTable;
//# sourceMappingURL=WuTable.svelte.d.ts.map