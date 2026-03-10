/** Common size values used across WeldUI components */
export type Size = 'sm' | 'md' | 'lg';

/** Common variant values used for visual intent */
export type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'warning' | 'info';

/** Status values for status indicators */
export type Status = 'default' | 'success' | 'warning' | 'danger' | 'info';

/** Orientation for layout components */
export type Orientation = 'horizontal' | 'vertical';

/** Placement for floating elements (tooltips, popovers, etc.) */
export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

/** Generic key-value option for select/autocomplete components */
export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

/** WeldUI custom event base detail type */
export interface WuEventDetail {
  originalEvent?: Event;
}
