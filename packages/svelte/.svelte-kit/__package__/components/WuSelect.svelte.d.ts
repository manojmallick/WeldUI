/**
 * Svelte 5 wrapper for wu-select.
 * Supports bind:value for two-way data binding.
 *
 * @example
 * ```svelte
 * <WuSelect bind:value={country} {options} label="Country" />
 * ```
 */
interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface Props {
    /** Two-way binding for the selected value. Use bind:value. */
    value?: string;
    /** Array of options to display. */
    options?: SelectOption[];
    /** Placeholder text shown when no option is selected. */
    placeholder?: string;
    /** Visible label above the select. */
    label?: string;
    /** Hint text below the select. */
    hint?: string;
    /** Error message — shown in red. */
    error?: string;
    /** Disabled state. */
    disabled?: boolean;
    /** Size variant. */
    size?: 'sm' | 'md' | 'lg';
    /** Name attribute for form submission. */
    name?: string;
    /** Emitted when selection changes. */
    onWuChange?: (e: CustomEvent<{
        value: string;
    }>) => void;
    /** Emitted when the select loses focus. */
    onWuBlur?: (e: CustomEvent) => void;
    class?: string;
    style?: string;
}
declare const WuSelect: import("svelte").Component<Props, {}, "value">;
type WuSelect = ReturnType<typeof WuSelect>;
export default WuSelect;
//# sourceMappingURL=WuSelect.svelte.d.ts.map