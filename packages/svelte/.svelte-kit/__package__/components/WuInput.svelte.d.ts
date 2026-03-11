/**
 * Svelte 5 wrapper for <wu-input>.
 * Supports bind:value for two-way data binding.
 *
 * @example
 * ```svelte
 * <WuInput bind:value={email} type="email" label="Email" required />
 * <WuInput bind:value={search} placeholder="Search…" size="sm" />
 * ```
 */
interface Props {
    /** Two-way binding for the current value. Use bind:value. */
    value?: string;
    /** HTML input type. */
    type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
    /** Visible label above the input. */
    label?: string;
    /** Placeholder text. */
    placeholder?: string;
    /** Hint text below the input. */
    hint?: string;
    /** Error message — shown in red, sets aria-invalid. */
    error?: string;
    /** Disabled state. */
    disabled?: boolean;
    /** Marks the field as required. */
    required?: boolean;
    /** Size variant. */
    size?: 'sm' | 'md' | 'lg';
    /** Name attribute for form submission. */
    name?: string;
    /** Emitted on each value change. */
    onWuChange?: (e: CustomEvent<{
        value: string;
    }>) => void;
    /** Emitted when the input loses focus. */
    onWuBlur?: (e: CustomEvent) => void;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-input> with bind:value support */
declare const WuInput: import("svelte").Component<Props, {}, "value">;
type WuInput = ReturnType<typeof WuInput>;
export default WuInput;
//# sourceMappingURL=WuInput.svelte.d.ts.map