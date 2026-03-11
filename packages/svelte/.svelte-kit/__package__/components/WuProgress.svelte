<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-progress>.
   *
   * @example
   * ```svelte
   * <WuProgress value={65} max={100} label="Upload" />
   * ```
   */

  interface Props {
    /** Current progress value. */
    value?: number;
    /** Maximum value. */
    max?: number;
    /** Indeterminate state. */
    indeterminate?: boolean;
    /** Visible label above the bar. */
    label?: string;
    /** Show percentage text. */
    showLabel?: boolean;
    class?: string;
    style?: string;
  }

  let {
    value = 0,
    max = 100,
    indeterminate = false,
    label,
    showLabel = false,
    class: className,
    style
  }: Props = $props();
</script>

<!-- @component Wrapper for <wu-progress> -->
<wu-progress
  {value}
  {max}
  {indeterminate}
  {label}
  show-label={showLabel}
  class={className}
  {style}
></wu-progress>
