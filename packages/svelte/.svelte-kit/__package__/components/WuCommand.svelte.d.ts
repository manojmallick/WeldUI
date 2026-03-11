/**
 * Svelte 5 wrapper for <wu-command>.
 *
 * @example
 * ```svelte
 * <WuCommand
 *   items={commandItems}
 *   open
 *   onWuSelect={handleSelect}
 *   onWuClose={handleClose}
 * />
 * ```
 */
interface WuCommandItem {
    id: string;
    label: string;
    description?: string;
    icon?: string;
    group?: string;
    shortcut?: string;
    disabled?: boolean;
}
interface Props {
    /** Command items to display. */
    items?: WuCommandItem[];
    /** Whether the palette is open. */
    open?: boolean;
    /** Placeholder text for the search input. */
    placeholder?: string;
    /** Emitted when an item is selected. */
    onWuSelect?: (e: CustomEvent<{
        item: WuCommandItem;
    }>) => void;
    /** Emitted when the palette is closed. */
    onWuClose?: (e: CustomEvent) => void;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-command> */
declare const WuCommand: import("svelte").Component<Props, {}, "">;
type WuCommand = ReturnType<typeof WuCommand>;
export default WuCommand;
//# sourceMappingURL=WuCommand.svelte.d.ts.map