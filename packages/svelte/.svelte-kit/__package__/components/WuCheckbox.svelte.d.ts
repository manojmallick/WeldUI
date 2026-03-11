/**
 * Svelte 5 wrapper for <wu-checkbox>.
 * Supports bind:checked for two-way data binding.
 *
 * @example
 * ```svelte
 * <WuCheckbox bind:checked={agreed} label="I agree to the terms" />
 * <WuCheckbox bind:checked={selectAll} indeterminate={someSelected} label="Select all" />
 * ```
 */
interface Props {
    /** Two-way binding for checked state. Use bind:checked. */
    checked?: boolean;
    /** Indeterminate state (visually shows a dash, not a tick). */
    indeterminate?: boolean;
    /** Visible label next to the checkbox. */
    label?: string;
    /** Disabled state. */
    disabled?: boolean;
    /** Name attribute for form submission. */
    name?: string;
    /** Value attribute for form submission. */
    value?: string;
    /** Emitted when checked state changes. */
    onWuChange?: (e: CustomEvent<{
        checked: boolean;
    }>) => void;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-checkbox> with bind:checked support */
declare const WuCheckbox: import("svelte").Component<Props, {}, "checked">;
type WuCheckbox = ReturnType<typeof WuCheckbox>;
export default WuCheckbox;
//# sourceMappingURL=WuCheckbox.svelte.d.ts.map