<script lang="ts">
  /**
   * Svelte 5 wrapper for <wu-file-upload>.
   *
   * @example
   * ```svelte
   * <WuFileUpload accept=".pdf,.docx" multiple onWuChange={handleFiles} />
   * ```
   */

  interface Props {
    /** Accepted file types (e.g. '.pdf,image/*'). */
    accept?: string;
    /** Allow selecting multiple files. */
    multiple?: boolean;
    /** Maximum file size in bytes. */
    maxSize?: number;
    /** Disabled state. */
    disabled?: boolean;
    /** Emitted when files are selected. */
    onWuChange?: (e: CustomEvent<{ files: File[] }>) => void;
    /** Emitted when a file is removed. */
    onWuRemove?: (e: CustomEvent<{ file: File }>) => void;
    class?: string;
    style?: string;
  }

  let {
    accept,
    multiple = false,
    maxSize,
    disabled = false,
    onWuChange,
    onWuRemove,
    class: className,
    style
  }: Props = $props();

  let el: HTMLElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const handlers: Array<[string, EventListener]> = [];
    if (onWuChange) {
      const h = (e: Event) => onWuChange!(e as CustomEvent<{ files: File[] }>);
      el.addEventListener('wu-change', h);
      handlers.push(['wu-change', h]);
    }
    if (onWuRemove) {
      const h = (e: Event) => onWuRemove!(e as CustomEvent<{ file: File }>);
      el.addEventListener('wu-remove', h);
      handlers.push(['wu-remove', h]);
    }
    return () => {
      for (const [name, h] of handlers) el!.removeEventListener(name, h);
    };
  });
</script>

<!-- @component Wrapper for <wu-file-upload> -->
<wu-file-upload
  bind:this={el}
  {accept}
  {multiple}
  max-size={maxSize}
  {disabled}
  class={className}
  {style}
></wu-file-upload>
