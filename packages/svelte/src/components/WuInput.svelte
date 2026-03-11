<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-input>.
   * Supports bind:value for two-way data binding.
   *
   * @example
   * ```svelte
   * <WuInput bind:value={email} type="email" label="Email" required />
   * <WuInput bind:value={search} placeholder="Search…" size="sm" />
   * ```
   */

  interface Props {
    /** Two-way binding for the current value. Use bind:value. */
    value?: string;
    /** HTML input type. */
    type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
    /** Visible label above the input. */
    label?: string;
    /** Placeholder text. */
    placeholder?: string;
    /** Hint text below the input. */
    hint?: string;
    /** Error message — shown in red, sets aria-invalid. */
    error?: string;
    /** Disabled state. */
    disabled?: boolean;
    /** Marks the field as required. */
    required?: boolean;
    /** Size variant. */
    size?: 'sm' | 'md' | 'lg';
    /** Name attribute for form submission. */
    name?: string;
    /** Emitted on each value change. */
    onWuChange?: (e: CustomEvent<{ value: string }>) => void;
    /** Emitted when the input loses focus. */
    onWuBlur?: (e: CustomEvent) => void;
    class?: string;
    style?: string;
  }

  let {
    value = $bindable(''),
    type = 'text',
    label,
    placeholder,
    hint,
    error,
    disabled = false,
    required = false,
    size = 'md',
    name,
    onWuChange,
    onWuBlur,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const _onChange = onWuChange;
    const _onBlur = onWuBlur;

    const handleChange = (e: Event) => {
      const ce = e as CustomEvent<{ value: string }>;
      value = ce.detail.value;
      _onChange?.(ce);
    };

    const handleBlur = (e: Event) => {
      _onBlur?.(e as CustomEvent);
    };

    el.addEventListener('wu-change', handleChange);
    el.addEventListener('wu-blur', handleBlur);

    return () => {
      el!.removeEventListener('wu-change', handleChange);
      el!.removeEventListener('wu-blur', handleBlur);
    };
  });
</script>

<!-- @component Wrapper for <wu-input> with bind:value support -->
<wu-input
  bind:this={el}
  {value}
  {type}
  {label}
  {placeholder}
  {hint}
  {error}
  {disabled}
  {required}
  {size}
  {name}
  class={className}
  {style}
></wu-input>
