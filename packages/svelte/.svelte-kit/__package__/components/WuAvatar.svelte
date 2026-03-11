<script lang="ts">
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

  let { src, alt, initials, size = 'md', class: className, style }: Props = $props();
</script>

<!-- @component Wrapper for <wu-avatar> -->
<wu-avatar {src} {alt} {initials} {size} class={className} {style}></wu-avatar>
