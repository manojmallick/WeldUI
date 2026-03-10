/**
 * Creates a composed, bubbling CustomEvent for use in Web Components.
 * Events composed with this helper will cross Shadow DOM boundaries.
 */
export function createEvent<T = void>(
  name: string,
  detail?: T,
  options?: { cancelable?: boolean }
): CustomEvent<T> {
  return new CustomEvent(name, {
    bubbles: true,
    composed: true,
    cancelable: options?.cancelable ?? false,
    detail: detail as T,
  });
}

/**
 * Dispatches a WeldUI custom event from the given element.
 * Returns true if the event was not cancelled.
 */
export function emit<T = void>(
  element: HTMLElement,
  name: string,
  detail?: T,
  options?: { cancelable?: boolean }
): boolean {
  return element.dispatchEvent(createEvent(name, detail, options));
}
