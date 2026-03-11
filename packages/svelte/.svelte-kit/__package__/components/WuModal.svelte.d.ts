/**
   * Svelte 5 wrapper for <wu-modal>.
   *
   * @example
   * ```svelte
   * <WuModal bind:open={isOpen} label="Confirm action" onWuClose={handleClose}>
   *   <p>Are you sure?</p>
   * </WuModal>
   * ```
   */
import type { Snippet } from 'svelte';
interface Props {
    /** Whether the modal is open. */
    open?: boolean;
    /** Accessible label for the dialog. */
    label?: string;
    /** Whether clicking the backdrop closes the modal. */
    closeOnBackdrop?: boolean;
    /** Emitted when the modal is closed. */
    onWuClose?: (e: CustomEvent) => void;
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-modal> */
declare const WuModal: import("svelte").Component<Props, {}, "">;
type WuModal = ReturnType<typeof WuModal>;
export default WuModal;
//# sourceMappingURL=WuModal.svelte.d.ts.map