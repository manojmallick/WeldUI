<script lang="ts">
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
    onWuClick?: (e: CustomEvent<{ originalEvent: MouseEvent }>) => void;
    /** Default slot content. */
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    type = 'button',
    'aria-label': ariaLabel,
    onWuClick,
    children,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const _handler = onWuClick;
    if (!_handler) return;
    const handler = (e: Event) => _handler(e as CustomEvent<{ originalEvent: MouseEvent }>);
    el.addEventListener('wu-click', handler);
    return () => el!.removeEventListener('wu-click', handler);
  });
</script>

<!-- @component Wrapper for <wu-button> -->
<wu-button
  bind:this={el}
  {variant}
  {size}
  {disabled}
  {loading}
  {type}
  aria-label={ariaLabel}
  class={className}
  {style}
>
  {@render children?.()}
</wu-button>
