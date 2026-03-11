/**
 * Svelte 5 wrapper for <wu-textarea>.
 * Supports bind:value for two-way data binding.
 *
 * @example
 * ```svelte
 * <WuTextarea bind:value={bio} label="Bio" maxlength={200} rows={4} />
 * ```
 */
interface Props {
    /** Two-way binding for the current value. Use bind:value. */
    value?: string;
    /** Visible label above the textarea. */
    label?: string;
    /** Placeholder text. */
    placeholder?: string;
    /** Hint text below the textarea. */
    hint?: string;
    /** Error message — shown in red, sets aria-invalid. */
    error?: string;
    /** Disabled state. */
    disabled?: boolean;
    /** Marks the field as required. */
    required?: boolean;
    /** Number of visible text rows. */
    rows?: number;
    /** Maximum character length — shows char count when set. */
    maxlength?: number;
    /** Name attribute for form submission. */
    name?: string;
    /** Emitted on each value change. */
    onWuChange?: (e: CustomEvent<{
        value: string;
    }>) => void;
    /** Emitted when the textarea loses focus. */
    onWuBlur?: (e: CustomEvent) => void;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-textarea> with bind:value support */
declare const WuTextarea: import("svelte").Component<Props, {}, "value">;
type WuTextarea = ReturnType<typeof WuTextarea>;
export default WuTextarea;
//# sourceMappingURL=WuTextarea.svelte.d.ts.map