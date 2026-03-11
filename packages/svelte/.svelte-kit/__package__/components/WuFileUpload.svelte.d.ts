/**
 * Svelte 5 wrapper for <wu-file-upload>.
 *
 * @example
 * ```svelte
 * <WuFileUpload accept=".pdf,.docx" multiple onWuChange={handleFiles} />
 * ```
 */
interface Props {
    /** Accepted file types (e.g. '.pdf,image/*'). */
    accept?: string;
    /** Allow selecting multiple files. */
    multiple?: boolean;
    /** Maximum file size in bytes. */
    maxSize?: number;
    /** Disabled state. */
    disabled?: boolean;
    /** Emitted when files are selected. */
    onWuChange?: (e: CustomEvent<{
        files: File[];
    }>) => void;
    /** Emitted when a file is removed. */
    onWuRemove?: (e: CustomEvent<{
        file: File;
    }>) => void;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-file-upload> */
declare const WuFileUpload: import("svelte").Component<Props, {}, "">;
type WuFileUpload = ReturnType<typeof WuFileUpload>;
export default WuFileUpload;
//# sourceMappingURL=WuFileUpload.svelte.d.ts.map