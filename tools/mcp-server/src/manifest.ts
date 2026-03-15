// WeldUI component manifest — static data used by the MCP server tools.

export interface ComponentProperty {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface ComponentSlot {
  name: string;  // '' = default slot
  description: string;
}

export interface ComponentEvent {
  name: string;
  detail?: string;
  description: string;
}

export interface ComponentSpec {
  tag: string;
  class: string;
  description: string;
  phase: 1 | 3 | 4;
  subElements?: string[];   // related tags (e.g. wu-tab, wu-tab-panel for wu-tabs)
  properties: ComponentProperty[];
  slots: ComponentSlot[];
  events: ComponentEvent[];
  example: string;          // minimal HTML usage
}

export const COMPONENTS: ComponentSpec[] = [
  // ── Phase 1: Foundation ──────────────────────────────────────────────────

  {
    tag: 'wu-button',
    class: 'WuButton',
    description: 'A button that supports multiple visual variants and sizes with loading state.',
    phase: 1,
    properties: [
      { name: 'variant', type: "'primary'|'secondary'|'ghost'|'danger'|'success'", default: 'primary', description: 'Visual style variant' },
      { name: 'size', type: "'sm'|'md'|'lg'", default: 'md', description: 'Size variant' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows spinner and disables interaction' },
      { name: 'type', type: "'button'|'submit'|'reset'", default: 'button', description: 'Native button type' },
      { name: 'aria-label', type: 'string', description: 'Accessible label for icon-only buttons' },
    ],
    slots: [
      { name: '', description: 'Button label text' },
      { name: 'prefix', description: 'Icon or content before the label' },
      { name: 'suffix', description: 'Icon or content after the label' },
    ],
    events: [
      { name: 'wu-click', detail: '{ originalEvent: MouseEvent }', description: 'Emitted when clicked (not fired when disabled or loading)' },
    ],
    example: '<wu-button variant="primary" size="md">Save changes</wu-button>',
  },

  {
    tag: 'wu-badge',
    class: 'WuBadge',
    description: 'A small status label for counts, states, or categories.',
    phase: 1,
    properties: [
      { name: 'variant', type: "'default'|'primary'|'success'|'warning'|'danger'|'outline'", default: 'default', description: 'Colour variant' },
      { name: 'size', type: "'sm'|'md'|'lg'", default: 'md', description: 'Size variant' },
      { name: 'pill', type: 'boolean', default: 'false', description: 'Full-radius pill shape' },
    ],
    slots: [{ name: '', description: 'Badge label' }],
    events: [],
    example: '<wu-badge variant="success">Active</wu-badge>',
  },

  {
    tag: 'wu-avatar',
    class: 'WuAvatar',
    description: 'Displays a user avatar image with an initials fallback.',
    phase: 1,
    properties: [
      { name: 'src', type: 'string', description: 'Image URL' },
      { name: 'alt', type: 'string', description: 'Alt text (also used to derive initials)' },
      { name: 'size', type: "'sm'|'md'|'lg'|'xl'", default: 'md', description: 'Avatar size' },
      { name: 'shape', type: "'circle'|'square'", default: 'circle', description: 'Shape variant' },
    ],
    slots: [],
    events: [],
    example: '<wu-avatar src="/avatar.jpg" alt="Jane Doe" size="md"></wu-avatar>',
  },

  {
    tag: 'wu-input',
    class: 'WuInput',
    description: 'A text input field with label, hint, and error state support.',
    phase: 1,
    properties: [
      { name: 'type', type: "'text'|'email'|'password'|'number'|'search'|'tel'|'url'", default: 'text', description: 'Input type' },
      { name: 'value', type: 'string', default: '', description: 'Current value' },
      { name: 'label', type: 'string', description: 'Field label' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text' },
      { name: 'hint', type: 'string', description: 'Helper text below the input' },
      { name: 'error', type: 'string', description: 'Error message (shows input in error state)' },
      { name: 'size', type: "'sm'|'md'|'lg'", default: 'md', description: 'Size variant' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Required field' },
      { name: 'name', type: 'string', description: 'Form field name' },
    ],
    slots: [
      { name: 'prefix', description: 'Icon before the input' },
      { name: 'suffix', description: 'Icon after the input' },
    ],
    events: [
      { name: 'wu-input', detail: '{ value: string }', description: 'Emitted on every keystroke' },
      { name: 'wu-change', detail: '{ value: string }', description: 'Emitted when value is committed (blur/enter)' },
    ],
    example: '<wu-input type="email" label="Email address" placeholder="you@example.com" required></wu-input>',
  },

  {
    tag: 'wu-textarea',
    class: 'WuTextarea',
    description: 'A multi-line text input with optional character count display.',
    phase: 1,
    properties: [
      { name: 'value', type: 'string', default: '', description: 'Current value' },
      { name: 'label', type: 'string', description: 'Field label' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text' },
      { name: 'hint', type: 'string', description: 'Helper text' },
      { name: 'error', type: 'string', description: 'Error message' },
      { name: 'rows', type: 'number', default: '3', description: 'Visible row count' },
      { name: 'maxlength', type: 'number', description: 'Character limit (shows counter when set)' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Required field' },
    ],
    slots: [],
    events: [
      { name: 'wu-input', detail: '{ value: string }', description: 'Emitted on every keystroke' },
      { name: 'wu-change', detail: '{ value: string }', description: 'Emitted on blur' },
    ],
    example: '<wu-textarea label="Message" rows="4" maxlength="500" placeholder="Type your message…"></wu-textarea>',
  },

  {
    tag: 'wu-select',
    class: 'WuSelect',
    description: 'A dropdown select with options array and placeholder support.',
    phase: 1,
    properties: [
      { name: 'value', type: 'string', default: '', description: 'Selected value' },
      { name: 'options', type: 'Array<{value:string,label:string,disabled?:boolean}>', description: 'Options array (set via JS property)' },
      { name: 'label', type: 'string', description: 'Field label' },
      { name: 'placeholder', type: 'string', default: 'Select…', description: 'Placeholder option' },
      { name: 'size', type: "'sm'|'md'|'lg'", default: 'md', description: 'Size variant' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Required field' },
    ],
    slots: [],
    events: [
      { name: 'wu-change', detail: '{ value: string }', description: 'Emitted when selection changes' },
    ],
    example: '<wu-select label="Country" placeholder="Choose a country"></wu-select>',
  },

  {
    tag: 'wu-checkbox',
    class: 'WuCheckbox',
    description: 'A checkbox input supporting checked, indeterminate, and disabled states.',
    phase: 1,
    properties: [
      { name: 'checked', type: 'boolean', default: 'false', description: 'Checked state' },
      { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Indeterminate / partial state' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
      { name: 'label', type: 'string', description: 'Visible label text' },
      { name: 'value', type: 'string', description: 'Form value when checked' },
      { name: 'name', type: 'string', description: 'Form field name' },
    ],
    slots: [{ name: '', description: 'Label text (alternative to label prop)' }],
    events: [
      { name: 'wu-change', detail: '{ checked: boolean }', description: 'Emitted when checked state changes' },
    ],
    example: '<wu-checkbox label="I agree to the terms" name="terms"></wu-checkbox>',
  },

  {
    tag: 'wu-toggle',
    class: 'WuToggle',
    description: 'An on/off switch with label position and size variants.',
    phase: 1,
    properties: [
      { name: 'checked', type: 'boolean', default: 'false', description: 'On/off state' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
      { name: 'size', type: "'sm'|'md'|'lg'", default: 'md', description: 'Size variant' },
      { name: 'label', type: 'string', description: 'Visible label' },
      { name: 'label-position', type: "'start'|'end'", default: 'end', description: 'Label position relative to switch' },
      { name: 'name', type: 'string', description: 'Form field name' },
    ],
    slots: [{ name: '', description: 'Label (alternative to label prop)' }],
    events: [
      { name: 'wu-change', detail: '{ checked: boolean }', description: 'Emitted when toggled' },
    ],
    example: '<wu-toggle label="Enable notifications" checked></wu-toggle>',
  },

  // ── Phase 3A: Complex ────────────────────────────────────────────────────

  {
    tag: 'wu-card',
    class: 'WuCard',
    description: 'A surface container with header, body, and footer slots.',
    phase: 3,
    properties: [
      { name: 'interactive', type: 'boolean', default: 'false', description: 'Shows hover elevation and pointer cursor' },
      { name: 'padding', type: "'none'|'sm'|'md'|'lg'", default: 'md', description: 'Internal padding' },
    ],
    slots: [
      { name: '', description: 'Card body content' },
      { name: 'header', description: 'Card header' },
      { name: 'footer', description: 'Card footer' },
    ],
    events: [],
    example: '<wu-card>\n  <span slot="header">Card Title</span>\n  Body content here.\n</wu-card>',
  },

  {
    tag: 'wu-modal',
    class: 'WuModal',
    description: 'A dialog using native <dialog> element with focus trap and scroll lock.',
    phase: 3,
    properties: [
      { name: 'open', type: 'boolean', default: 'false', description: 'Controls visibility' },
      { name: 'label', type: 'string', description: 'Dialog title (used for aria-labelledby)' },
      { name: 'no-close-on-backdrop', type: 'boolean', default: 'false', description: 'Prevents closing on backdrop click' },
      { name: 'size', type: "'sm'|'md'|'lg'|'full'", default: 'md', description: 'Dialog width' },
    ],
    slots: [
      { name: '', description: 'Modal body content' },
      { name: 'header', description: 'Modal header (overrides label)' },
      { name: 'footer', description: 'Modal footer (action buttons)' },
    ],
    events: [
      { name: 'wu-close', description: 'Emitted when modal closes' },
      { name: 'wu-open', description: 'Emitted when modal opens' },
    ],
    example: '<wu-modal open label="Confirm action">\n  Are you sure?\n  <wu-button slot="footer" variant="danger">Delete</wu-button>\n</wu-modal>',
  },

  {
    tag: 'wu-alert',
    class: 'WuAlert',
    description: 'Contextual feedback message with info/success/warning/danger variants.',
    phase: 3,
    properties: [
      { name: 'variant', type: "'info'|'success'|'warning'|'danger'", default: 'info', description: 'Colour/semantic variant' },
      { name: 'dismissible', type: 'boolean', default: 'false', description: 'Shows a close button' },
      { name: 'title', type: 'string', description: 'Optional bold title above the message' },
    ],
    slots: [
      { name: '', description: 'Alert message content' },
      { name: 'icon', description: 'Override the default variant icon' },
    ],
    events: [
      { name: 'wu-dismiss', description: 'Emitted when the close button is clicked' },
    ],
    example: '<wu-alert variant="success" title="Saved!">Your changes have been saved.</wu-alert>',
  },

  {
    tag: 'wu-spinner',
    class: 'WuSpinner',
    description: 'An animated loading indicator with size variants.',
    phase: 3,
    properties: [
      { name: 'size', type: "'sm'|'md'|'lg'", default: 'md', description: 'Spinner size' },
      { name: 'aria-label', type: 'string', default: 'Loading', description: 'Screen-reader label' },
    ],
    slots: [],
    events: [],
    example: '<wu-spinner size="md" aria-label="Loading data"></wu-spinner>',
  },

  {
    tag: 'wu-progress',
    class: 'WuProgress',
    description: 'A progress bar supporting determinate and indeterminate modes.',
    phase: 3,
    properties: [
      { name: 'value', type: 'number', default: '0', description: 'Current progress (0–max)' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
      { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Animates without a set value' },
      { name: 'label', type: 'string', description: 'Visible label above the bar' },
      { name: 'show-value', type: 'boolean', default: 'false', description: 'Shows percentage inside bar' },
    ],
    slots: [],
    events: [],
    example: '<wu-progress value="65" label="Uploading…" show-value></wu-progress>',
  },

  {
    tag: 'wu-skeleton',
    class: 'WuSkeleton',
    description: 'Placeholder shapes shown while content is loading.',
    phase: 3,
    properties: [
      { name: 'variant', type: "'text'|'rect'|'circle'", default: 'text', description: 'Shape type' },
      { name: 'width', type: 'string', description: 'CSS width value (e.g. "200px", "100%")' },
      { name: 'height', type: 'string', description: 'CSS height value' },
    ],
    slots: [],
    events: [],
    example: '<wu-skeleton variant="rect" width="100%" height="120px"></wu-skeleton>',
  },

  {
    tag: 'wu-divider',
    class: 'WuDivider',
    description: 'A horizontal or vertical dividing line with optional label.',
    phase: 3,
    properties: [
      { name: 'orientation', type: "'horizontal'|'vertical'", default: 'horizontal', description: 'Line direction' },
    ],
    slots: [{ name: '', description: 'Optional label centered on the divider' }],
    events: [],
    example: '<wu-divider>or</wu-divider>',
  },

  {
    tag: 'wu-tooltip',
    class: 'WuTooltip',
    description: 'A contextual tooltip that appears on hover/focus with 8 placement options.',
    phase: 3,
    properties: [
      { name: 'content', type: 'string', description: 'Tooltip text' },
      { name: 'placement', type: "'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'left'|'right'", default: 'top', description: 'Tooltip position' },
      { name: 'delay', type: 'number', default: '0', description: 'Show delay in ms' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables tooltip' },
    ],
    slots: [{ name: '', description: 'The element that triggers the tooltip' }],
    events: [],
    example: '<wu-tooltip content="Edit this item">\n  <wu-button variant="ghost">Edit</wu-button>\n</wu-tooltip>',
  },

  {
    tag: 'wu-popover',
    class: 'WuPopover',
    description: 'A popover panel using the CSS Popover API with trigger slot and arrow.',
    phase: 3,
    properties: [
      { name: 'placement', type: "'top'|'bottom'|'left'|'right'", default: 'bottom', description: 'Popover position' },
      { name: 'open', type: 'boolean', default: 'false', description: 'Visibility' },
    ],
    slots: [
      { name: 'trigger', description: 'Element that toggles the popover' },
      { name: '', description: 'Popover content' },
    ],
    events: [
      { name: 'wu-open', description: 'Emitted when popover opens' },
      { name: 'wu-close', description: 'Emitted when popover closes' },
    ],
    example: '<wu-popover>\n  <wu-button slot="trigger">Info</wu-button>\n  <p>Popover content here.</p>\n</wu-popover>',
  },

  {
    tag: 'wu-toast',
    class: 'WuToast',
    description: 'A notification toast message. Use inside <wu-toast-provider>.',
    phase: 3,
    subElements: ['wu-toast-provider'],
    properties: [
      { name: 'variant', type: "'default'|'info'|'success'|'warning'|'danger'", default: 'default', description: 'Colour variant' },
      { name: 'duration', type: 'number', default: '4000', description: 'Auto-dismiss time in ms (0 = persistent)' },
      { name: 'dismissible', type: 'boolean', default: 'true', description: 'Shows close button' },
      { name: 'title', type: 'string', description: 'Optional bold title' },
    ],
    slots: [{ name: '', description: 'Toast message content' }],
    events: [
      { name: 'wu-dismiss', description: 'Emitted when toast is dismissed' },
    ],
    example: '<wu-toast-provider>\n  <wu-toast variant="success" title="Saved!">Your file has been saved.</wu-toast>\n</wu-toast-provider>',
  },

  // ── Phase 3C: Advanced ───────────────────────────────────────────────────

  {
    tag: 'wu-tabs',
    class: 'WuTabs',
    description: 'A tabbed panel interface with full keyboard navigation.',
    phase: 3,
    subElements: ['wu-tab', 'wu-tab-panel'],
    properties: [
      { name: 'active-tab', type: 'string', description: 'ID of the active tab panel' },
      { name: 'orientation', type: "'horizontal'|'vertical'", default: 'horizontal', description: 'Tab bar orientation' },
    ],
    slots: [
      { name: 'tabs', description: 'wu-tab elements for the tab bar' },
      { name: '', description: 'wu-tab-panel elements' },
    ],
    events: [
      { name: 'wu-tab-change', detail: '{ tabId: string }', description: 'Emitted when active tab changes' },
    ],
    example: '<wu-tabs>\n  <wu-tab slot="tabs" panel="a">Tab A</wu-tab>\n  <wu-tab slot="tabs" panel="b">Tab B</wu-tab>\n  <wu-tab-panel id="a">Content A</wu-tab-panel>\n  <wu-tab-panel id="b">Content B</wu-tab-panel>\n</wu-tabs>',
  },

  {
    tag: 'wu-accordion',
    class: 'WuAccordion',
    description: 'A vertically stacked set of expandable panels.',
    phase: 3,
    subElements: ['wu-accordion-item'],
    properties: [
      { name: 'multiple', type: 'boolean', default: 'false', description: 'Allow multiple panels open simultaneously' },
    ],
    slots: [{ name: '', description: 'wu-accordion-item elements' }],
    events: [
      { name: 'wu-change', detail: '{ itemId: string, open: boolean }', description: 'Emitted when a panel opens or closes' },
    ],
    example: '<wu-accordion>\n  <wu-accordion-item label="Section 1">Content 1</wu-accordion-item>\n  <wu-accordion-item label="Section 2">Content 2</wu-accordion-item>\n</wu-accordion>',
  },

  {
    tag: 'wu-breadcrumb',
    class: 'WuBreadcrumb',
    description: 'Navigation breadcrumb with landmark <nav> and aria-label.',
    phase: 3,
    subElements: ['wu-breadcrumb-item'],
    properties: [
      { name: 'label', type: 'string', default: 'Breadcrumb', description: 'aria-label for the nav landmark' },
    ],
    slots: [{ name: '', description: 'wu-breadcrumb-item elements' }],
    events: [],
    example: '<wu-breadcrumb>\n  <wu-breadcrumb-item href="/">Home</wu-breadcrumb-item>\n  <wu-breadcrumb-item href="/products">Products</wu-breadcrumb-item>\n  <wu-breadcrumb-item>Widget</wu-breadcrumb-item>\n</wu-breadcrumb>',
  },

  {
    tag: 'wu-pagination',
    class: 'WuPagination',
    description: 'Page navigation control with page size selector and total display.',
    phase: 3,
    properties: [
      { name: 'page', type: 'number', default: '1', description: 'Current page (1-based)' },
      { name: 'total', type: 'number', default: '0', description: 'Total items count' },
      { name: 'page-size', type: 'number', default: '10', description: 'Items per page' },
      { name: 'page-sizes', type: 'number[]', default: '[10,20,50]', description: 'Page size options' },
      { name: 'sibling-count', type: 'number', default: '1', description: 'Pages shown on each side of current' },
    ],
    slots: [],
    events: [
      { name: 'wu-page-change', detail: '{ page: number, pageSize: number }', description: 'Emitted when page or page size changes' },
    ],
    example: '<wu-pagination page="1" total="200" page-size="10"></wu-pagination>',
  },

  {
    tag: 'wu-table',
    class: 'WuTable',
    description: 'A data table with sortable columns, row selection, and sticky header.',
    phase: 3,
    properties: [
      { name: 'columns', type: 'Array<{key:string,label:string,sortable?:boolean,width?:string}>', description: 'Column definitions (set via JS)' },
      { name: 'rows', type: 'Array<Record<string,unknown>>', description: 'Row data array (set via JS)' },
      { name: 'selectable', type: 'boolean', default: 'false', description: 'Enables row checkboxes' },
      { name: 'sort-key', type: 'string', description: 'Currently sorted column key' },
      { name: 'sort-direction', type: "'asc'|'desc'", default: 'asc', description: 'Sort direction' },
      { name: 'sticky-header', type: 'boolean', default: 'false', description: 'Fixes header on scroll' },
    ],
    slots: [],
    events: [
      { name: 'wu-sort', detail: '{ key: string, direction: string }', description: 'Emitted when column header is clicked' },
      { name: 'wu-row-select', detail: '{ selected: unknown[] }', description: 'Emitted when row selection changes' },
    ],
    example: '<wu-table selectable></wu-table>',
  },

  {
    tag: 'wu-date-picker',
    class: 'WuDatePicker',
    description: 'A locale-aware date picker with min/max constraints.',
    phase: 3,
    properties: [
      { name: 'value', type: 'string', description: 'ISO date string (YYYY-MM-DD)' },
      { name: 'label', type: 'string', description: 'Field label' },
      { name: 'min', type: 'string', description: 'Minimum ISO date string' },
      { name: 'max', type: 'string', description: 'Maximum ISO date string' },
      { name: 'locale', type: 'string', default: 'navigator.language', description: 'BCP 47 locale tag' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Required field' },
    ],
    slots: [],
    events: [
      { name: 'wu-change', detail: '{ value: string }', description: 'Emitted when date is selected' },
    ],
    example: '<wu-date-picker label="Start date" min="2024-01-01"></wu-date-picker>',
  },

  {
    tag: 'wu-file-upload',
    class: 'WuFileUpload',
    description: 'A drag-and-drop file upload area with progress and type validation.',
    phase: 3,
    properties: [
      { name: 'accept', type: 'string', description: 'Accepted MIME types or extensions (e.g. "image/*,.pdf")' },
      { name: 'multiple', type: 'boolean', default: 'false', description: 'Allow multiple files' },
      { name: 'max-size', type: 'number', description: 'Max file size in bytes' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
    ],
    slots: [{ name: '', description: 'Custom drop zone content' }],
    events: [
      { name: 'wu-files-selected', detail: '{ files: File[] }', description: 'Emitted when files are selected' },
      { name: 'wu-error', detail: '{ message: string }', description: 'Emitted on validation error' },
    ],
    example: '<wu-file-upload accept="image/*" multiple></wu-file-upload>',
  },

  {
    tag: 'wu-stepper',
    class: 'WuStepper',
    description: 'A multi-step wizard indicator supporting linear and non-linear flows.',
    phase: 3,
    subElements: ['wu-step'],
    properties: [
      { name: 'active-step', type: 'number', default: '0', description: 'Index of the active step' },
      { name: 'orientation', type: "'horizontal'|'vertical'", default: 'horizontal', description: 'Layout direction' },
      { name: 'linear', type: 'boolean', default: 'true', description: 'Prevents skipping steps' },
    ],
    slots: [{ name: '', description: 'wu-step elements' }],
    events: [
      { name: 'wu-step-change', detail: '{ step: number }', description: 'Emitted when step changes' },
    ],
    example: '<wu-stepper active-step="1">\n  <wu-step label="Account" completed></wu-step>\n  <wu-step label="Profile"></wu-step>\n  <wu-step label="Review"></wu-step>\n</wu-stepper>',
  },

  {
    tag: 'wu-command',
    class: 'WuCommand',
    description: 'A command palette with fuzzy search, keyboard shortcuts, and grouped results.',
    phase: 3,
    properties: [
      { name: 'open', type: 'boolean', default: 'false', description: 'Visibility' },
      { name: 'placeholder', type: 'string', default: 'Search commands…', description: 'Search input placeholder' },
    ],
    slots: [{ name: '', description: 'wu-command-group or wu-command-item elements' }],
    events: [
      { name: 'wu-select', detail: '{ value: string }', description: 'Emitted when an item is selected' },
      { name: 'wu-close', description: 'Emitted when palette closes' },
    ],
    example: '<wu-command open placeholder="Search…"></wu-command>',
  },

  {
    tag: 'wu-data-grid',
    class: 'WuDataGrid',
    description: 'A high-performance data grid with virtual scrolling, inline editing, and column resize.',
    phase: 3,
    properties: [
      { name: 'columns', type: 'Array<{key:string,label:string,editable?:boolean,width?:number}>', description: 'Column definitions (set via JS)' },
      { name: 'rows', type: 'Array<Record<string,unknown>>', description: 'Row data (set via JS)' },
      { name: 'row-height', type: 'number', default: '40', description: 'Row height in pixels for virtual scroll' },
    ],
    slots: [],
    events: [
      { name: 'wu-cell-edit', detail: '{ rowIndex: number, key: string, value: unknown }', description: 'Emitted after inline cell edit' },
    ],
    example: '<wu-data-grid></wu-data-grid>',
  },

  // ── Phase 4: Compound ────────────────────────────────────────────────────

  {
    tag: 'wu-navbar',
    class: 'WuNavbar',
    description: 'A top navigation bar with logo, nav links, and actions slots.',
    phase: 4,
    properties: [
      { name: 'sticky', type: 'boolean', default: 'false', description: 'Sticky positioning at the top' },
      { name: 'transparent', type: 'boolean', default: 'false', description: 'Transparent background (for hero overlays)' },
    ],
    slots: [
      { name: 'logo', description: 'Brand logo / wordmark' },
      { name: '', description: 'Navigation links' },
      { name: 'actions', description: 'Right-side action buttons (login, avatar)' },
    ],
    events: [
      { name: 'wu-mobile-open', description: 'Emitted when mobile menu opens' },
      { name: 'wu-mobile-close', description: 'Emitted when mobile menu closes' },
    ],
    example: '<wu-navbar sticky>\n  <img slot="logo" src="/logo.svg" alt="Acme" />\n  <a href="/">Home</a>\n  <wu-button slot="actions" variant="primary">Sign in</wu-button>\n</wu-navbar>',
  },

  {
    tag: 'wu-sidebar',
    class: 'WuSidebar',
    description: 'A collapsible navigation sidebar with icon-only mode and nested items.',
    phase: 4,
    subElements: ['wu-sidebar-item'],
    properties: [
      { name: 'collapsed', type: 'boolean', default: 'false', description: 'Collapsed to icon-only mode' },
      { name: 'collapsible', type: 'boolean', default: 'true', description: 'Shows collapse toggle button' },
      { name: 'width', type: 'string', default: '240px', description: 'Expanded width' },
    ],
    slots: [
      { name: '', description: 'wu-sidebar-item elements' },
      { name: 'header', description: 'Logo / branding above the nav' },
      { name: 'footer', description: 'User profile / settings at the bottom' },
    ],
    events: [
      { name: 'wu-collapse', detail: '{ collapsed: boolean }', description: 'Emitted when collapsed state changes' },
    ],
    example: '<wu-sidebar>\n  <wu-sidebar-item icon="home" href="/">Dashboard</wu-sidebar-item>\n  <wu-sidebar-item icon="users" href="/users">Users</wu-sidebar-item>\n</wu-sidebar>',
  },

  {
    tag: 'wu-form',
    class: 'WuForm',
    description: 'A form wrapper that emits typed events and manages loading/error state.',
    phase: 4,
    properties: [
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows loading state on submit button' },
      { name: 'novalidate', type: 'boolean', default: 'false', description: 'Disables native browser validation' },
    ],
    slots: [
      { name: '', description: 'Form fields and submit button' },
    ],
    events: [
      { name: 'wu-submit', detail: '{ data: FormData }', description: 'Emitted on valid form submit' },
      { name: 'wu-invalid', detail: '{ errors: string[] }', description: 'Emitted when form is invalid' },
    ],
    example: '<wu-form>\n  <wu-input label="Name" name="name" required></wu-input>\n  <wu-button type="submit">Submit</wu-button>\n</wu-form>',
  },

  {
    tag: 'wu-dashboard',
    class: 'WuDashboard',
    description: 'Full shell layout combining a navbar, sidebar, and main content area.',
    phase: 4,
    properties: [
      { name: 'sidebar-collapsed', type: 'boolean', default: 'false', description: 'Initial sidebar collapsed state' },
    ],
    slots: [
      { name: 'navbar', description: 'wu-navbar element' },
      { name: 'sidebar', description: 'wu-sidebar element' },
      { name: '', description: 'Main page content' },
    ],
    events: [],
    example: '<wu-dashboard>\n  <wu-navbar slot="navbar" sticky></wu-navbar>\n  <wu-sidebar slot="sidebar"></wu-sidebar>\n  <main>Page content</main>\n</wu-dashboard>',
  },

  {
    tag: 'wu-empty-state',
    class: 'WuEmptyState',
    description: 'A placeholder shown when a view has no content.',
    phase: 4,
    properties: [
      { name: 'title', type: 'string', description: 'Primary heading' },
      { name: 'description', type: 'string', description: 'Supporting text' },
    ],
    slots: [
      { name: 'icon', description: 'Illustration or icon' },
      { name: '', description: 'Action buttons' },
    ],
    events: [],
    example: '<wu-empty-state title="No results" description="Try adjusting your filters.">\n  <wu-button variant="primary">Clear filters</wu-button>\n</wu-empty-state>',
  },

  {
    tag: 'wu-error-page',
    class: 'WuErrorPage',
    description: 'Branded error page supporting 400/401/403/404/408/500/502/503/504 codes.',
    phase: 4,
    properties: [
      { name: 'code', type: '400|401|403|404|408|500|502|503|504', default: '404', description: 'HTTP status code' },
      { name: 'title', type: 'string', description: 'Override default error title' },
      { name: 'description', type: 'string', description: 'Override default description' },
    ],
    slots: [
      { name: '', description: 'Action buttons (e.g. go home)' },
    ],
    events: [],
    example: '<wu-error-page code="404">\n  <wu-button variant="primary" onclick="history.back()">Go back</wu-button>\n</wu-error-page>',
  },

  {
    tag: 'wu-search',
    class: 'WuSearch',
    description: 'A debounced search input with clear button and loading indicator.',
    phase: 4,
    properties: [
      { name: 'value', type: 'string', default: '', description: 'Current search value' },
      { name: 'placeholder', type: 'string', default: 'Search…', description: 'Placeholder text' },
      { name: 'debounce', type: 'number', default: '300', description: 'Debounce delay in ms' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows spinner (for async search)' },
      { name: 'clearable', type: 'boolean', default: 'true', description: 'Shows clear button when value is non-empty' },
    ],
    slots: [],
    events: [
      { name: 'wu-search', detail: '{ value: string }', description: 'Emitted after debounce delay' },
      { name: 'wu-clear', description: 'Emitted when the clear button is clicked' },
    ],
    example: '<wu-search placeholder="Search users…" debounce="300"></wu-search>',
  },

  {
    tag: 'wu-data-table',
    class: 'WuDataTable',
    description: 'A full-featured data table for server-side data: sorting, pagination, row selection, and inline search.',
    phase: 4,
    properties: [
      { name: 'columns', type: 'Array<{key:string,label:string,sortable?:boolean}>', description: 'Column definitions (set via JS)' },
      { name: 'rows', type: 'Array<Record<string,unknown>>', description: 'Current page rows (set via JS)' },
      { name: 'total', type: 'number', default: '0', description: 'Total item count (for pagination)' },
      { name: 'page', type: 'number', default: '1', description: 'Current page' },
      { name: 'page-size', type: 'number', default: '10', description: 'Items per page' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows loading overlay' },
      { name: 'selectable', type: 'boolean', default: 'false', description: 'Enables row checkboxes' },
      { name: 'searchable', type: 'boolean', default: 'false', description: 'Shows search toolbar' },
      { name: 'sort-key', type: 'string', description: 'Currently sorted column key' },
      { name: 'sort-direction', type: "'asc'|'desc'", default: 'asc', description: 'Sort direction' },
    ],
    slots: [],
    events: [
      { name: 'wu-sort', detail: '{ key: string, direction: string }', description: 'Emitted when sorting changes' },
      { name: 'wu-page-change', detail: '{ page: number, pageSize: number }', description: 'Emitted when page changes' },
      { name: 'wu-row-select', detail: '{ selected: unknown[] }', description: 'Emitted when row selection changes' },
      { name: 'wu-search', detail: '{ value: string }', description: 'Emitted when search input changes' },
    ],
    example: '<wu-data-table searchable selectable></wu-data-table>',
  },

  // ── Phase 5: Form Primitives ─────────────────────────────────────────────

  { tag: 'wu-radio-group', class: 'WuRadioGroup', description: 'A radio group container managing mutual exclusion.', phase: 5 as any,
    properties: [{ name: 'value', type: 'string', description: 'Selected radio value' }, { name: 'name', type: 'string', description: 'Name attribute for all radios' }, { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables all radios' }],
    slots: [{ name: '', description: 'wu-radio elements' }], events: [{ name: 'wu-change', detail: '{ value: string }', description: 'Fires when selection changes' }],
    example: '<wu-radio-group name="g"><wu-radio value="a">Option A</wu-radio><wu-radio value="b">Option B</wu-radio></wu-radio-group>' },

  { tag: 'wu-slider', class: 'WuSlider', description: 'A range slider input with optional labels.', phase: 5 as any,
    properties: [{ name: 'min', type: 'number', default: '0', description: 'Minimum value' }, { name: 'max', type: 'number', default: '100', description: 'Maximum value' }, { name: 'step', type: 'number', default: '1', description: 'Step increment' }, { name: 'value', type: 'number', default: '0', description: 'Current value' }, { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' }],
    slots: [], events: [{ name: 'wu-change', detail: '{ value: number }', description: 'Fires when value changes' }],
    example: '<wu-slider min="0" max="100" value="50"></wu-slider>' },

  { tag: 'wu-rating', class: 'WuRating', description: 'A star-rating input.', phase: 5 as any,
    properties: [{ name: 'value', type: 'number', default: '0', description: 'Current rating' }, { name: 'max', type: 'number', default: '5', description: 'Maximum stars' }, { name: 'readonly', type: 'boolean', default: 'false', description: 'Read-only star display' }],
    slots: [], events: [{ name: 'wu-change', detail: '{ value: number }', description: 'Fires when rating changes' }],
    example: '<wu-rating value="3" max="5"></wu-rating>' },

  { tag: 'wu-color-picker', class: 'WuColorPicker', description: 'Inline hex color picker with swatch preview.', phase: 5 as any,
    properties: [{ name: 'value', type: 'string', default: '#000000', description: 'Current hex color' }, { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' }],
    slots: [], events: [{ name: 'wu-change', detail: '{ value: string }', description: 'Fires when color changes' }],
    example: '<wu-color-picker value="#3b82f6"></wu-color-picker>' },

  { tag: 'wu-switch', class: 'WuSwitch', description: 'An accessible on/off toggle switch (ARIA role=switch).', phase: 5 as any,
    properties: [{ name: 'checked', type: 'boolean', default: 'false', description: 'Checked state' }, { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' }, { name: 'label', type: 'string', description: 'Visible label text' }],
    slots: [], events: [{ name: 'wu-change', detail: '{ checked: boolean }', description: 'Fires when toggled' }],
    example: '<wu-switch label="Dark mode" checked></wu-switch>' },

  { tag: 'wu-pin-input', class: 'WuPinInput', description: 'A PIN/OTP input with N separate digit cells.', phase: 5 as any,
    properties: [{ name: 'length', type: 'number', default: '4', description: 'Number of digit cells' }, { name: 'type', type: "'number'|'text'", default: 'number', description: 'Input type' }, { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' }],
    slots: [], events: [{ name: 'wu-complete', detail: '{ value: string }', description: 'Fires when all cells are filled' }, { name: 'wu-change', detail: '{ value: string }', description: 'Fires on each keystroke' }],
    example: '<wu-pin-input length="6"></wu-pin-input>' },

  { tag: 'wu-combobox', class: 'WuCombobox', description: 'An autocomplete combobox with filtered dropdown.', phase: 5 as any,
    properties: [{ name: 'options', type: 'ComboboxOption[]', description: 'Array of {value, label} options (JS property)' }, { name: 'value', type: 'string', description: 'Selected value' }, { name: 'placeholder', type: 'string', description: 'Input placeholder' }],
    slots: [], events: [{ name: 'wu-change', detail: '{ value: string, label: string }', description: 'Fires when option selected' }],
    example: '<wu-combobox placeholder="Search countries…"></wu-combobox>' },

  { tag: 'wu-tag-input', class: 'WuTagInput', description: 'A multi-value tag/chip input.', phase: 5 as any,
    properties: [{ name: 'tags', type: 'string[]', description: 'Current tags (JS property)' }, { name: 'placeholder', type: 'string', description: 'Placeholder text' }, { name: 'max', type: 'number', description: 'Maximum number of tags' }],
    slots: [], events: [{ name: 'wu-change', detail: '{ tags: string[] }', description: 'Fires when tags change' }],
    example: '<wu-tag-input></wu-tag-input>' },

  { tag: 'wu-number-input', class: 'WuNumberInput', description: 'A number input with increment/decrement stepper buttons.', phase: 5 as any,
    properties: [{ name: 'value', type: 'number', default: '0', description: 'Current value' }, { name: 'min', type: 'number', description: 'Minimum value' }, { name: 'max', type: 'number', description: 'Maximum value' }, { name: 'step', type: 'number', default: '1', description: 'Step increment' }],
    slots: [], events: [{ name: 'wu-change', detail: '{ value: number }', description: 'Fires when value changes' }],
    example: '<wu-number-input value="5" min="0" max="10"></wu-number-input>' },

  { tag: 'wu-multi-select', class: 'WuMultiSelect', description: 'A multi-value select dropdown with tag chips.', phase: 5 as any,
    properties: [{ name: 'options', type: 'MultiSelectOption[]', description: 'Array of {value, label} options' }, { name: 'value', type: 'string[]', description: 'Selected values array' }, { name: 'placeholder', type: 'string', description: 'Placeholder text' }],
    slots: [], events: [{ name: 'wu-change', detail: '{ value: string[] }', description: 'Fires when selection changes' }],
    example: '<wu-multi-select placeholder="Select tags…"></wu-multi-select>' },

  // ── Phase 6: Data Display ────────────────────────────────────────────────

  { tag: 'wu-stat', class: 'WuStat', description: 'A KPI stat card with value, label, trend indicator, and icon slot.', phase: 6 as any,
    properties: [{ name: 'value', type: 'string', description: 'Primary numeric value' }, { name: 'label', type: 'string', description: 'Descriptive label' }, { name: 'delta', type: 'string', description: 'Change value (e.g. "+12%")' }, { name: 'trend', type: "'up'|'down'|'neutral'", description: 'Trend direction' }],
    slots: [{ name: 'icon', description: 'Icon for the stat' }], events: [],
    example: '<wu-stat value="42,000" label="Revenue" delta="+12%" trend="up"></wu-stat>' },

  { tag: 'wu-tag', class: 'WuTag', description: 'A label/chip tag with variant and optional dismiss button.', phase: 6 as any,
    properties: [{ name: 'variant', type: "'default'|'primary'|'success'|'warning'|'danger'", default: 'default', description: 'Color variant' }, { name: 'dismissible', type: 'boolean', default: 'false', description: 'Shows a dismiss × button' }],
    slots: [{ name: '', description: 'Tag label text' }], events: [{ name: 'wu-dismiss', description: 'Fires when dismissible tag is removed' }],
    example: '<wu-tag variant="success">Approved</wu-tag>' },

  { tag: 'wu-code', class: 'WuCode', description: 'A syntax-highlighted inline or block code display.', phase: 6 as any,
    properties: [{ name: 'language', type: 'string', description: 'Language for highlighting hint' }, { name: 'block', type: 'boolean', default: 'false', description: 'Block vs inline display' }],
    slots: [{ name: '', description: 'Code content' }], events: [],
    example: "<wu-code language=\"ts\">const x = 42;</wu-code>" },

  { tag: 'wu-copy-button', class: 'WuCopyButton', description: 'A button that copies text to the clipboard.', phase: 6 as any,
    properties: [{ name: 'value', type: 'string', description: 'Text to copy' }, { name: 'label', type: 'string', default: 'Copy', description: 'Button label' }],
    slots: [], events: [{ name: 'wu-copy', description: 'Fires after successful copy' }],
    example: '<wu-copy-button value="npm install @weldui/core"></wu-copy-button>' },

  { tag: 'wu-carousel', class: 'WuCarousel', description: 'A touch/swipe-enabled image/content carousel.', phase: 6 as any,
    properties: [{ name: 'index', type: 'number', default: '0', description: 'Active slide index' }, { name: 'autoplay', type: 'boolean', default: 'false', description: 'Auto-advance slides' }, { name: 'loop', type: 'boolean', default: 'false', description: 'Loop back to first after last' }],
    slots: [{ name: '', description: 'Slide elements' }], events: [{ name: 'wu-change', detail: '{ index: number }', description: 'Fires when active slide changes' }],
    example: '<wu-carousel><img src="a.jpg"><img src="b.jpg"></wu-carousel>' },

  { tag: 'wu-collapse', class: 'WuCollapse', description: 'An animated expandable/collapsible content region.', phase: 6 as any,
    properties: [{ name: 'open', type: 'boolean', default: 'false', description: 'Expanded state' }, { name: 'label', type: 'string', description: 'Trigger label' }],
    slots: [{ name: '', description: 'Collapsible content' }], events: [{ name: 'wu-toggle', detail: '{ open: boolean }', description: 'Fires when open state changes' }],
    example: '<wu-collapse label="Details"><p>Content here</p></wu-collapse>' },

  // ── Phase 7: Nav & Overlays ──────────────────────────────────────────────

  { tag: 'wu-drawer', class: 'WuDrawer', description: 'A slide-in panel from any edge with focus trap.', phase: 7 as any,
    properties: [{ name: 'open', type: 'boolean', default: 'false', description: 'Open state' }, { name: 'placement', type: "'left'|'right'|'top'|'bottom'", default: 'right', description: 'Slide direction' }, { name: 'size', type: 'string', default: '320px', description: 'Panel size' }],
    slots: [{ name: '', description: 'Drawer content' }, { name: 'header', description: 'Custom header' }, { name: 'footer', description: 'Action buttons' }],
    events: [{ name: 'wu-close', description: 'Fires when drawer closes' }],
    example: '<wu-drawer open placement="right"><p>Content</p></wu-drawer>' },

  { tag: 'wu-dropdown', class: 'WuDropdown', description: 'A trigger-activated dropdown menu with keyboard navigation.', phase: 7 as any,
    properties: [{ name: 'items', type: 'DropdownItem[]', description: 'Menu items array (JS property)' }, { name: 'placement', type: "'bottom-start'|'bottom-end'|'top-start'|'top-end'", default: 'bottom-start', description: 'Dropdown placement' }],
    slots: [{ name: 'trigger', description: 'Trigger element (button, icon, etc.)' }],
    events: [{ name: 'wu-select', detail: '{ value: string }', description: 'Fires when item is selected' }, { name: 'wu-open', description: 'Fires when dropdown opens' }, { name: 'wu-close', description: 'Fires when dropdown closes' }],
    example: '<wu-dropdown><wu-button slot="trigger">Options</wu-button></wu-dropdown>' },

  { tag: 'wu-scroll-area', class: 'WuScrollArea', description: 'A styled scroll container with thin custom scrollbars.', phase: 7 as any,
    properties: [{ name: 'orientation', type: "'vertical'|'horizontal'|'both'", default: 'vertical', description: 'Scroll orientation' }, { name: 'max-height', type: 'string', description: 'Max height CSS value' }, { name: 'max-width', type: 'string', description: 'Max width CSS value' }],
    slots: [{ name: '', description: 'Scrollable content' }], events: [],
    example: '<wu-scroll-area max-height="300px"><p>Long content…</p></wu-scroll-area>' },

  { tag: 'wu-split-pane', class: 'WuSplitPane', description: 'A resizable split panel with draggable divider.', phase: 7 as any,
    properties: [{ name: 'orientation', type: "'horizontal'|'vertical'", default: 'horizontal', description: 'Split direction' }, { name: 'initial-size', type: 'number', default: '50', description: 'Initial primary pane % size' }],
    slots: [{ name: 'primary', description: 'Primary pane content' }, { name: 'secondary', description: 'Secondary pane content' }],
    events: [{ name: 'wu-resize', detail: '{ position: number }', description: 'Fires continuously while dragging' }],
    example: '<wu-split-pane><div slot="primary">Left</div><div slot="secondary">Right</div></wu-split-pane>' },

  { tag: 'wu-speed-dial', class: 'WuSpeedDial', description: 'A floating action button that expands into multiple action buttons.', phase: 7 as any,
    properties: [{ name: 'actions', type: 'SpeedDialAction[]', description: 'Array of {label, value, icon?} actions' }, { name: 'direction', type: "'up'|'left'", default: 'up', description: 'Expansion direction' }, { name: 'icon', type: 'string', default: '+', description: 'FAB icon character' }],
    slots: [], events: [{ name: 'wu-action-click', detail: '{ value: string }', description: 'Fires when an action is clicked' }],
    example: '<wu-speed-dial></wu-speed-dial>' },

  // ── Phase 9: Rich Media ──────────────────────────────────────────────────

  { tag: 'wu-lightbox', class: 'WuLightbox', description: 'A full-screen image viewer with prev/next navigation.', phase: 9 as any,
    properties: [{ name: 'open', type: 'boolean', default: 'false', description: 'Open state' }, { name: 'images', type: 'LightboxImage[]', description: 'Array of {src, alt?, caption?} images' }, { name: 'index', type: 'number', default: '0', description: 'Currently displayed image index' }],
    slots: [], events: [{ name: 'wu-close', description: 'Fires when lightbox closes' }],
    example: '<wu-lightbox open></wu-lightbox>' },

  { tag: 'wu-gallery', class: 'WuGallery', description: 'A responsive CSS-grid photo gallery with click-to-lightbox.', phase: 9 as any,
    properties: [{ name: 'images', type: 'GalleryImage[]', description: 'Array of {src, alt?, caption?} images' }, { name: 'cols', type: 'number', default: '3', description: 'Number of grid columns' }],
    slots: [], events: [{ name: 'wu-image-click', detail: '{ index: number }', description: 'Fires when thumbnail is clicked' }],
    example: '<wu-gallery cols="3"></wu-gallery>' },

  { tag: 'wu-virtual-list', class: 'WuVirtualList', description: 'A virtual/windowed list renderer for large datasets.', phase: 9 as any,
    properties: [{ name: 'items', type: 'unknown[]', description: 'Full data array (JS property)' }, { name: 'item-height', type: 'number', default: '48', description: 'Fixed row height in px' }, { name: 'viewport-height', type: 'number', default: '400', description: 'Visible scroll area height in px' }, { name: 'render-item', type: 'Function', description: 'JS function: (item, index) => TemplateResult' }],
    slots: [], events: [{ name: 'wu-visible-change', detail: '{ start: number, end: number }', description: 'Fires when visible window changes' }],
    example: '<wu-virtual-list></wu-virtual-list>' },

  { tag: 'wu-sortable', class: 'WuSortable', description: 'A drag-and-drop sortable list with HTML5 drag API.', phase: 9 as any,
    properties: [{ name: 'items', type: 'Array<{id:string,label:string}>', description: 'Items array (JS property)' }],
    slots: [], events: [{ name: 'wu-sort', detail: '{ items: array, from: number, to: number }', description: 'Fires after successful reorder' }],
    example: '<wu-sortable></wu-sortable>' },

  { tag: 'wu-kanban', class: 'WuKanban', description: 'A kanban board container for wu-kanban-column elements.', phase: 9 as any,
    subElements: ['wu-kanban-column'],
    properties: [], slots: [{ name: '', description: 'wu-kanban-column elements' }], events: [],
    example: '<wu-kanban><wu-kanban-column column-id="todo" label="To Do"></wu-kanban-column></wu-kanban>' },

  { tag: 'wu-mention', class: 'WuMention', description: 'A text input with @ mention detection and user autocomplete.', phase: 9 as any,
    properties: [{ name: 'users', type: 'MentionUser[]', description: 'Array of {id, name, avatar?} users' }, { name: 'multiline', type: 'boolean', default: 'false', description: 'Use textarea instead of input' }, { name: 'placeholder', type: 'string', description: 'Placeholder text' }],
    slots: [], events: [{ name: 'wu-mention', detail: '{ user: MentionUser }', description: 'Fires when user is selected' }, { name: 'wu-change', detail: '{ value: string }', description: 'Fires on input change' }],
    example: '<wu-mention placeholder="Write something, use @ to mention…"></wu-mention>' },

  { tag: 'wu-qr-code', class: 'WuQrCode', description: 'Renders a QR code as inline SVG.', phase: 9 as any,
    properties: [{ name: 'value', type: 'string', description: 'Text/URL to encode' }, { name: 'size', type: 'number', default: '200', description: 'SVG pixel size' }, { name: 'color', type: 'string', default: '#000000', description: 'Module fill color' }, { name: 'background', type: 'string', default: '#ffffff', description: 'Background fill color' }],
    slots: [], events: [],
    example: '<wu-qr-code value="https://weldui.dev" size="200"></wu-qr-code>' },

  { tag: 'wu-video', class: 'WuVideo', description: 'An HTML5 video player with custom overlay controls.', phase: 9 as any,
    properties: [{ name: 'src', type: 'string', description: 'Video source URL' }, { name: 'poster', type: 'string', description: 'Poster image URL' }, { name: 'autoplay', type: 'boolean', default: 'false', description: 'Auto-play on load' }, { name: 'muted', type: 'boolean', default: 'false', description: 'Start muted' }, { name: 'loop', type: 'boolean', default: 'false', description: 'Loop playback' }],
    slots: [], events: [{ name: 'wu-play', description: 'Fires when video starts' }, { name: 'wu-pause', description: 'Fires when video pauses' }, { name: 'wu-ended', description: 'Fires when video ends' }],
    example: '<wu-video src="/video.mp4" poster="/thumb.jpg"></wu-video>' },
];

/** Lookup a component by tag name (e.g. "wu-button"). */
export function getComponent(tag: string): ComponentSpec | undefined {
  return COMPONENTS.find(
    (c) => c.tag === tag || c.subElements?.includes(tag),
  );
}

/** Semantic token names available for get_theme_tokens. */
export const SEMANTIC_TOKENS: Record<string, string[]> = {
  color: [
    '--wu-color-background', '--wu-color-surface', '--wu-color-surface-raised', '--wu-color-surface-overlay',
    '--wu-color-primary', '--wu-color-primary-hover', '--wu-color-primary-subtle', '--wu-color-primary-fg',
    '--wu-color-text', '--wu-color-text-secondary', '--wu-color-text-disabled', '--wu-color-text-inverse',
    '--wu-color-border', '--wu-color-border-strong', '--wu-color-border-focus',
    '--wu-color-success', '--wu-color-success-subtle',
    '--wu-color-warning', '--wu-color-warning-subtle',
    '--wu-color-danger', '--wu-color-danger-subtle',
    '--wu-color-info', '--wu-color-info-subtle',
  ],
  spacing: ['--wu-space-0', '--wu-space-1', '--wu-space-2', '--wu-space-3', '--wu-space-4', '--wu-space-5', '--wu-space-6', '--wu-space-8', '--wu-space-10', '--wu-space-12', '--wu-space-16'],
  radius: ['--wu-radius-none', '--wu-radius-sm', '--wu-radius-md', '--wu-radius-lg', '--wu-radius-xl', '--wu-radius-2xl', '--wu-radius-full'],
  typography: ['--wu-font-sans', '--wu-font-mono', '--wu-text-xs', '--wu-text-sm', '--wu-text-base', '--wu-text-lg', '--wu-text-xl', '--wu-text-2xl', '--wu-font-normal', '--wu-font-medium', '--wu-font-semibold', '--wu-font-bold'],
  shadow: ['--wu-shadow-sm', '--wu-shadow-md', '--wu-shadow-lg', '--wu-shadow-xl'],
  focus: ['--wu-focus-ring'],
  transition: ['--wu-duration-fast', '--wu-duration-normal', '--wu-duration-slow', '--wu-ease-default'],
};

/** Available theme names. */
export const THEMES = ['light', 'dark', 'ocean', 'forest', 'midnight', 'sunset', 'fintech', 'healthcare', 'government', 'startup', 'editorial', 'high-contrast'] as const;
export type ThemeName = typeof THEMES[number];
