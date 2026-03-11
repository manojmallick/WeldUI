/**
 * @weldui/svelte
 *
 * Svelte 5 wrappers for WeldUI Web Components.
 * Registers all wu-* custom elements as a side-effect.
 *
 * @example
 * ```svelte
 * <script>
 *   import { WuButton, WuInput } from '@weldui/svelte';
 * </script>
 *
 * <WuButton variant="primary" onWuClick={handleClick}>Save</WuButton>
 * <WuInput bind:value={name} label="Name" />
 * ```
 */
// Side-effect import: registers all wu-* custom elements
import '@weldui/core';
export { default as WuButton } from './components/WuButton.svelte';
export { default as WuBadge } from './components/WuBadge.svelte';
export { default as WuAvatar } from './components/WuAvatar.svelte';
export { default as WuInput } from './components/WuInput.svelte';
export { default as WuTextarea } from './components/WuTextarea.svelte';
export { default as WuSelect } from './components/WuSelect.svelte';
export { default as WuCheckbox } from './components/WuCheckbox.svelte';
export { default as WuToggle } from './components/WuToggle.svelte';
