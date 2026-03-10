/**
 * Generates a unique ID for ARIA attribute pairing (labelledby, describedby, etc.)
 */
export function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Returns the appropriate aria-label or aria-labelledby attributes
 * for a given element based on provided label/labelId.
 */
export function ariaLabel(label?: string, labelId?: string): Record<string, string> {
  if (labelId) return { 'aria-labelledby': labelId };
  if (label) return { 'aria-label': label };
  return {};
}

/**
 * Announces a message to screen readers via a live region.
 * Creates a temporary live region if one doesn't exist.
 */
export function announce(message: string, politeness: 'polite' | 'assertive' = 'polite'): void {
  const regionId = `wu-live-region-${politeness}`;
  let region = document.getElementById(regionId);

  if (!region) {
    region = document.createElement('div');
    region.id = regionId;
    region.setAttribute('aria-live', politeness);
    region.setAttribute('aria-atomic', 'true');
    region.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;';
    document.body.appendChild(region);
  }

  // Clear and re-set to force announcement
  region.textContent = '';
  requestAnimationFrame(() => {
    region!.textContent = message;
  });
}
