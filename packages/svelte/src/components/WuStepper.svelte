<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-stepper> and <wu-step>.
   *
   * @example
   * ```svelte
   * <WuStepper activeStep={1} onWuStepChange={handleChange}>
   *   <WuStep label="Account" />
   *   <WuStep label="Profile" />
   *   <WuStep label="Review" />
   * </WuStepper>
   * ```
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** Index of the currently active step (0-based). */
    activeStep?: number;
    /** Orientation of the stepper. */
    orientation?: 'horizontal' | 'vertical';
    /** Emitted when the active step changes. */
    onWuStepChange?: (e: CustomEvent<{ step: number }>) => void;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    activeStep = 0,
    orientation = 'horizontal',
    onWuStepChange,
    children,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const _handler = onWuStepChange;
    if (!_handler) return;
    const handler = (e: Event) => _handler(e as CustomEvent<{ step: number }>);
    el.addEventListener('wu-step-change', handler);
    return () => el!.removeEventListener('wu-step-change', handler);
  });
</script>

<!-- @component Wrapper for <wu-stepper> -->
<wu-stepper
  bind:this={el}
  active-step={activeStep}
  {orientation}
  class={className}
  {style}
>
  {@render children?.()}
</wu-stepper>
