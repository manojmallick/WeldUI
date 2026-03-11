/**
 * Svelte 5 wrapper for <wu-date-picker>.
 *
 * @example
 * ```svelte
 * <WuDatePicker bind:value={date} label="Start date" onWuChange={handleChange} />
 * ```
 */
interface Props {
    /** Selected date value (ISO 8601 string). */
    value?: string;
    /** Visible label. */
    label?: string;
    /** Minimum selectable date (ISO 8601). */
    min?: string;
    /** Maximum selectable date (ISO 8601). */
    max?: string;
    /** Locale for formatting (e.g. 'en-US'). */
    locale?: string;
    /** Disabled state. */
    disabled?: boolean;
    /** Emitted when the date changes. */
    onWuChange?: (e: CustomEvent<{
        value: string;
    }>) => void;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-date-picker> */
declare const WuDatePicker: import("svelte").Component<Props, {}, "">;
type WuDatePicker = ReturnType<typeof WuDatePicker>;
export default WuDatePicker;
//# sourceMappingURL=WuDatePicker.svelte.d.ts.map