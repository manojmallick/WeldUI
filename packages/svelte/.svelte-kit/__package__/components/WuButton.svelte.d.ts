/**
   * Svelte 5 wrapper for <wu-button>.
   *
   * @example
   * ```svelte
   * <WuButton variant="primary" onWuClick={handleClick}>Save</WuButton>
   * <WuButton variant="danger" size="sm" disabled>Delete</WuButton>
   * ```
   */
import type { Snippet } from 'svelte';
interface Props {
    /** Visual style variant. */
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
    /** Size variant. */
    size?: 'sm' | 'md' | 'lg';
    /** Disabled state. */
    disabled?: boolean;
    /** Loading state — shows spinner, disables interaction. */
    loading?: boolean;
    /** Native button type. */
    type?: 'button' | 'submit' | 'reset';
    /** Accessible label for icon-only buttons. */
    'aria-label'?: string;
    /** Emitted when the button is clicked (not disabled/loading). */
    onWuClick?: (e: CustomEvent<{
        originalEvent: MouseEvent;
    }>) => void;
    /** Default slot content. */
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-button> */
declare const WuButton: import("svelte").Component<Props, {}, "">;
type WuButton = ReturnType<typeof WuButton>;
export default WuButton;
//# sourceMappingURL=WuButton.svelte.d.ts.map