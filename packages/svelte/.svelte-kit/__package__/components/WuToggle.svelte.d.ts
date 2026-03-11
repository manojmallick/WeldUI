/**
 * Svelte 5 wrapper for <wu-toggle>.
 * Supports bind:checked for two-way data binding.
 *
 * @example
 * ```svelte
 * <WuToggle bind:checked={darkMode} label="Dark mode" />
 * <WuToggle bind:checked={notifications} label="Notifications" labelPosition="start" size="sm" />
 * ```
 */
interface Props {
    /** Two-way binding for the toggle on/off state. Use bind:checked. */
    checked?: boolean;
    /** Visible label next to the toggle. */
    label?: string;
    /** Position of the label relative to the toggle. */
    labelPosition?: 'start' | 'end';
    /** Size variant. */
    size?: 'sm' | 'md' | 'lg';
    /** Disabled state. */
    disabled?: boolean;
    /** Name attribute for form submission. */
    name?: string;
    /** Emitted when toggle state changes. */
    onWuChange?: (e: CustomEvent<{
        checked: boolean;
    }>) => void;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-toggle> with bind:checked support */
declare const WuToggle: import("svelte").Component<Props, {}, "checked">;
type WuToggle = ReturnType<typeof WuToggle>;
export default WuToggle;
//# sourceMappingURL=WuToggle.svelte.d.ts.map