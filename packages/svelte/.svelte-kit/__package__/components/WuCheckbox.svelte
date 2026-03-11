<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-checkbox>.
   * Supports bind:checked for two-way data binding.
   *
   * @example
   * ```svelte
   * <WuCheckbox bind:checked={agreed} label="I agree to the terms" />
   * <WuCheckbox bind:checked={selectAll} indeterminate={someSelected} label="Select all" />
   * ```
   */

  interface Props {
    /** Two-way binding for checked state. Use bind:checked. */
    checked?: boolean;
    /** Indeterminate state (visually shows a dash, not a tick). */
    indeterminate?: boolean;
    /** Visible label next to the checkbox. */
    label?: string;
    /** Disabled state. */
    disabled?: boolean;
    /** Name attribute for form submission. */
    name?: string;
    /** Value attribute for form submission. */
    value?: string;
    /** Emitted when checked state changes. */
    onWuChange?: (e: CustomEvent<{ checked: boolean }>) => void;
    class?: string;
    style?: string;
  }

  let {
    checked = $bindable(false),
    indeterminate = false,
    label,
    disabled = false,
    name,
    value,
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

<!-- @component Wrapper for <wu-checkbox> with bind:checked support -->
<wu-checkbox
  bind:this={el}
  {checked}
  {indeterminate}
  {label}
  {disabled}
  {name}
  {value}
  class={className}
  {style}
></wu-checkbox>
