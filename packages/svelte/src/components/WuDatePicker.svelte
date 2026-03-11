<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-date-picker>.
   *
   * @example
   * ```svelte
   * <WuDatePicker bind:value={date} label="Start date" onWuChange={handleChange} />
   * ```
   */

  interface Props {
    /** Selected date value (ISO 8601 string). */
    value?: string;
    /** Visible label. */
    label?: string;
    /** Minimum selectable date (ISO 8601). */
    min?: string;
    /** Maximum selectable date (ISO 8601). */
    max?: string;
    /** Locale for formatting (e.g. 'en-US'). */
    locale?: string;
    /** Disabled state. */
    disabled?: boolean;
    /** Emitted when the date changes. */
    onWuChange?: (e: CustomEvent<{ value: string }>) => void;
    class?: string;
    style?: string;
  }

  let {
    value,
    label,
    min,
    max,
    locale,
    disabled = false,
    onWuChange,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const _handler = onWuChange;
    if (!_handler) return;
    const handler = (e: Event) => _handler(e as CustomEvent<{ value: string }>);
    el.addEventListener('wu-change', handler);
    return () => el!.removeEventListener('wu-change', handler);
  });
</script>

<!-- @component Wrapper for <wu-date-picker> -->
<wu-date-picker
  bind:this={el}
  {value}
  {label}
  {min}
  {max}
  {locale}
  {disabled}
  class={className}
  {style}
></wu-date-picker>
