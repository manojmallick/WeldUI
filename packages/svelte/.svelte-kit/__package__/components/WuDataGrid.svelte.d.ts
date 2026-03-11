/**
 * Svelte 5 wrapper for <wu-data-grid>.
 *
 * @example
 * ```svelte
 * <WuDataGrid columns={cols} rows={data} onWuRowEdit={handleEdit} />
 * ```
 */
interface WuDataGridColumn {
    key: string;
    label: string;
    sortable?: boolean;
    editable?: boolean;
    width?: string;
}
interface Props {
    /** Column definitions. */
    columns?: WuDataGridColumn[];
    /** Row data — each item should have keys matching column.key. */
    rows?: Record<string, unknown>[];
    /** Number of rows to render in virtual viewport. */
    virtualRows?: number;
    /** Allow column resizing. */
    resizable?: boolean;
    /** Emitted when a cell edit is committed. */
    onWuRowEdit?: (e: CustomEvent<{
        row: Record<string, unknown>;
        key: string;
        value: unknown;
    }>) => void;
    /** Emitted when sort changes. */
    onWuSort?: (e: CustomEvent<{
        key: string;
        direction: 'asc' | 'desc';
    }>) => void;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-data-grid> */
declare const WuDataGrid: import("svelte").Component<Props, {}, "">;
type WuDataGrid = ReturnType<typeof WuDataGrid>;
export default WuDataGrid;
//# sourceMappingURL=WuDataGrid.svelte.d.ts.map