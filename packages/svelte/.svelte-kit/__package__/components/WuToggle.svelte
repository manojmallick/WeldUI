<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-toggle>.
   * Supports bind:checked for two-way data binding.
   *
   * @example
   * ```svelte
   * <WuToggle bind:checked={darkMode} label="Dark mode" />
   * <WuToggle bind:checked={notifications} label="Notifications" labelPosition="start" size="sm" />
   * ```
   */

  interface Props {
    /** Two-way binding for the toggle on/off state. Use bind:checked. */
    checked?: boolean;
    /** Visible label next to the toggle. */
    label?: string;
    /** Position of the label relative to the toggle. */
    labelPosition?: 'start' | 'end';
    /** Size variant. */
    size?: 'sm' | 'md' | 'lg';
    /** Disabled state. */
    disabled?: boolean;
    /** Name attribute for form submission. */
    name?: string;
    /** Emitted when toggle state changes. */
    onWuChange?: (e: CustomEvent<{ checked: boolean }>) => void;
    class?: string;
    style?: string;
  }

  let {
    checked = $bindable(false),
    label,
    labelPosition = 'end',
    size = 'md',
    disabled = false,
    name,
    onWuChange,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const _onChange = onWuChange;

    const handleChange = (e: Event) => {
      const ce = e as CustomEvent<{ checked: boolean }>;
      checked = ce.detail.checked;
      _onChange?.(ce);
    };

    el.addEventListener('wu-change', handleChange);
    return () => el!.removeEventListener('wu-change', handleChange);
  });
</script>

<!-- @component Wrapper for <wu-toggle> with bind:checked support -->
<wu-toggle
  bind:this={el}
  {checked}
  {label}
  label-position={labelPosition}
  {size}
  {disabled}
  {name}
  class={className}
  {style}
></wu-toggle>
