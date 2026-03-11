<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-tabs>, <wu-tab>, and <wu-tab-panel>.
   *
   * @example
   * ```svelte
   * <WuTabs activePanel="tab1" onWuTabChange={handleChange}>
   *   <WuTab panel="tab1">Tab 1</WuTab>
   *   <WuTab panel="tab2">Tab 2</WuTab>
   *   <WuTabPanel name="tab1"><p>Panel 1</p></WuTabPanel>
   *   <WuTabPanel name="tab2"><p>Panel 2</p></WuTabPanel>
   * </WuTabs>
   * ```
   */
  import type { Snippet } from 'svelte';

  interface Props {
    /** The panel name of the currently active tab. */
    activePanel?: string;
    /** Orientation of tabs. */
    orientation?: 'horizontal' | 'vertical';
    /** Emitted when active tab changes. */
    onWuTabChange?: (e: CustomEvent<{ panel: string }>) => void;
    children?: Snippet;
    class?: string;
    style?: string;
  }

  let {
    activePanel,
    orientation = 'horizontal',
    onWuTabChange,
    children,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const _handler = onWuTabChange;
    if (!_handler) return;
    const handler = (e: Event) => _handler(e as CustomEvent<{ panel: string }>);
    el.addEventListener('wu-tab-change', handler);
    return () => el!.removeEventListener('wu-tab-change', handler);
  });
</script>

<!-- @component Wrapper for <wu-tabs> -->
<wu-tabs
  bind:this={el}
  active-panel={activePanel}
  {orientation}
  class={className}
  {style}
>
  {@render children?.()}
</wu-tabs>
