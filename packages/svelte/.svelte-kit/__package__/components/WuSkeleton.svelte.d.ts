/**
 * Svelte 5 wrapper for <wu-skeleton>.
 *
 * @example
 * ```svelte
 * <WuSkeleton variant="text" width="200px" />
 * <WuSkeleton variant="circle" size="48px" />
 * ```
 */
interface Props {
    /** Shape variant. */
    variant?: 'text' | 'rect' | 'circle';
    /** Width of the skeleton. */
    width?: string;
    /** Height of the skeleton. */
    height?: string;
    /** Size (diameter) for circle variant. */
    size?: string;
    /** Enable shimmer animation. */
    animated?: boolean;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-skeleton> */
declare const WuSkeleton: import("svelte").Component<Props, {}, "">;
type WuSkeleton = ReturnType<typeof WuSkeleton>;
export default WuSkeleton;
//# sourceMappingURL=WuSkeleton.svelte.d.ts.map