/**
 * Svelte 5 wrapper for <wu-avatar>.
 * Displays a user avatar with image + initials fallback.
 *
 * @example
 * ```svelte
 * <WuAvatar src="/avatar.jpg" alt="Alice" size="lg" />
 * <WuAvatar initials="AB" size="md" />
 * ```
 */
interface Props {
    /** Image URL. Falls back to initials if src fails to load. */
    src?: string;
    /** Alt text for the image. */
    alt?: string;
    /** Initials to display when no image is available (1–2 characters). */
    initials?: string;
    /** Size variant. */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    class?: string;
    style?: string;
}
/** Wrapper for <wu-avatar> */
declare const WuAvatar: import("svelte").Component<Props, {}, "">;
type WuAvatar = ReturnType<typeof WuAvatar>;
export default WuAvatar;
//# sourceMappingURL=WuAvatar.svelte.d.ts.map