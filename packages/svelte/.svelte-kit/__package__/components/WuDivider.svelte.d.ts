/**
   * Svelte 5 wrapper for <wu-divider>.
   *
   * @example
   * ```svelte
   * <WuDivider />
   * <WuDivider orientation="vertical" />
   * <WuDivider>Or</WuDivider>
   * ```
   */
import type { Snippet } from 'svelte';
interface Props {
    /** Orientation of the divider. */
    orientation?: 'horizontal' | 'vertical';
    children?: Snippet;
    class?: string;
    style?: string;
}
/** Wrapper for <wu-divider> */
declare const WuDivider: import("svelte").Component<Props, {}, "">;
type WuDivider = ReturnType<typeof WuDivider>;
export default WuDivider;
//# sourceMappingURL=WuDivider.svelte.d.ts.map