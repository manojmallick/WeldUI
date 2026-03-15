import{s as a}from"./chunk-L4EGOTBX-SsB2KAsS.js";import"./entry-preview-LV2BkctA.js";import{b as s}from"./lit-element-CWHijwDH.js";import"./index-BM5e8oBU.js";import"./index-DrFu-skq.js";const o="1.0.0",i="",r=[{kind:"javascript-module",path:"src/components/accordion/wu-accordion.ts",declarations:[{kind:"class",description:"An individual accordion item with an animated toggle panel.",name:"WuAccordionItem",cssProperties:[{name:"--wu-accordion-header-bg",description:"Header background colour"},{name:"--wu-accordion-header-bg-hover",description:"Header background on hover"},{name:"--wu-accordion-header-color",description:"Header text colour"},{name:"--wu-accordion-padding-x",description:"Horizontal padding"},{name:"--wu-accordion-padding-y",description:"Vertical padding"},{name:"--wu-accordion-content-color",description:"Body text colour"}],cssParts:[{name:"header",description:"The trigger button"},{name:"panel",description:"The collapsible content panel"}],slots:[{name:"",description:"Accordion item body content"},{name:"summary",description:"The clickable header text"}],members:[],events:[{name:"wu-toggle",description:"Emitted when the item is opened or closed. Detail: `{ open: boolean }`",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-accordion-item",customElement:!0}],exports:[{kind:"js",name:"WuAccordionItem",declaration:{name:"WuAccordionItem",module:"src/components/accordion/wu-accordion.ts"}},{kind:"custom-element-definition",name:"wu-accordion-item",declaration:{name:"WuAccordionItem",module:"src/components/accordion/wu-accordion.ts"}}]},{kind:"javascript-module",path:"src/components/accordion/wu-accordion.ts",declarations:[{kind:"class",description:"An accordion container that groups `<wu-accordion-item>` elements. Add the `single` attribute to restrict to one open item at a time.",name:"WuAccordion",cssProperties:[{name:"--wu-accordion-border",description:"Border colour around the group"},{name:"--wu-accordion-radius",description:"Border radius of the group"}],cssParts:[],slots:[{name:"",description:"Place `<wu-accordion-item>` elements here"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-accordion",customElement:!0}],exports:[{kind:"js",name:"WuAccordion",declaration:{name:"WuAccordion",module:"src/components/accordion/wu-accordion.ts"}},{kind:"custom-element-definition",name:"wu-accordion",declaration:{name:"WuAccordion",module:"src/components/accordion/wu-accordion.ts"}}]},{kind:"javascript-module",path:"src/components/alert/wu-alert.ts",declarations:[{kind:"class",description:"An alert component for inline status messages.",name:"WuAlert",cssProperties:[{name:"--wu-alert-bg",description:"Alert background colour"},{name:"--wu-alert-border",description:"Alert border / accent colour"},{name:"--wu-alert-color",description:"Text and icon colour"}],cssParts:[{name:"base",description:"The alert container"},{name:"icon",description:"The icon area"},{name:"content",description:"The text content area"}],slots:[{name:"",description:"Alert body/description text"},{name:"title",description:"Bold title at the top of the alert"},{name:"icon",description:"Custom icon (replaces default variant icon)"}],members:[{kind:"field",name:"variant",description:"Visual severity variant",type:{text:"'info' | 'success' | 'warning' | 'danger' | 'neutral'"},default:"info",attribute:"variant",reflects:!0}],events:[{name:"wu-dismiss",description:"Emitted when the dismiss button is clicked",type:{text:"CustomEvent"}}],attributes:[{name:"variant",description:"Visual severity variant",type:{text:"'info' | 'success' | 'warning' | 'danger' | 'neutral'"},default:"info",fieldName:"variant"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-alert",customElement:!0}],exports:[{kind:"js",name:"WuAlert",declaration:{name:"WuAlert",module:"src/components/alert/wu-alert.ts"}},{kind:"custom-element-definition",name:"wu-alert",declaration:{name:"WuAlert",module:"src/components/alert/wu-alert.ts"}}]},{kind:"javascript-module",path:"src/components/avatar/wu-avatar.ts",declarations:[{kind:"class",description:"An avatar component that displays a user image or initials fallback.",name:"WuAvatar",cssProperties:[{name:"--wu-avatar-size",description:"Width and height of the avatar"},{name:"--wu-avatar-radius",description:"Border radius"},{name:"--wu-avatar-bg",description:"Background colour (shown when no image)"},{name:"--wu-avatar-color",description:"Text colour for initials"}],cssParts:[{name:"base",description:"The avatar container element"}],slots:[],members:[{kind:"field",name:"size",description:`Image source URL */
  @property()
  src?: string;

  /** Alt text for the image */
  @property()
  alt?: string;

  /** Initials to display when no image is available */
  @property()
  initials?: string;

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg' | 'xl'"},default:"md",attribute:"size",reflects:!0}],events:[],attributes:[{name:"size",description:`Image source URL */
  @property()
  src?: string;

  /** Alt text for the image */
  @property()
  alt?: string;

  /** Initials to display when no image is available */
  @property()
  initials?: string;

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg' | 'xl'"},default:"md",fieldName:"size"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-avatar",customElement:!0}],exports:[{kind:"js",name:"WuAvatar",declaration:{name:"WuAvatar",module:"src/components/avatar/wu-avatar.ts"}},{kind:"custom-element-definition",name:"wu-avatar",declaration:{name:"WuAvatar",module:"src/components/avatar/wu-avatar.ts"}}]},{kind:"javascript-module",path:"src/components/avatar-group/wu-avatar-group.ts",declarations:[{kind:"class",description:"Stacks avatar components with an overflow count badge.",name:"WuAvatarGroup",cssProperties:[],cssParts:[],slots:[{name:"",description:"wu-avatar elements"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-avatar-group",customElement:!0}],exports:[{kind:"js",name:"WuAvatarGroup",declaration:{name:"WuAvatarGroup",module:"src/components/avatar-group/wu-avatar-group.ts"}},{kind:"custom-element-definition",name:"wu-avatar-group",declaration:{name:"WuAvatarGroup",module:"src/components/avatar-group/wu-avatar-group.ts"}}]},{kind:"javascript-module",path:"src/components/badge/wu-badge.ts",declarations:[{kind:"class",description:"A small status/label indicator component.",name:"WuBadge",cssProperties:[{name:"--wu-badge-bg",description:"Background colour"},{name:"--wu-badge-color",description:"Text colour"},{name:"--wu-badge-border",description:"Border colour"}],cssParts:[{name:"base",description:"The badge container element"}],slots:[{name:"",description:"Badge label text"}],members:[{kind:"field",name:"variant",description:"Visual style variant",type:{text:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline'"},default:"default",attribute:"variant",reflects:!0}],events:[],attributes:[{name:"variant",description:"Visual style variant",type:{text:"'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline'"},default:"default",fieldName:"variant"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-badge",customElement:!0}],exports:[{kind:"js",name:"WuBadge",declaration:{name:"WuBadge",module:"src/components/badge/wu-badge.ts"}},{kind:"custom-element-definition",name:"wu-badge",declaration:{name:"WuBadge",module:"src/components/badge/wu-badge.ts"}}]},{kind:"javascript-module",path:"src/components/bottom-nav/wu-bottom-nav.ts",declarations:[{kind:"class",description:"Mobile bottom navigation bar.",name:"WuBottomNav",cssProperties:[],cssParts:[],slots:[{name:"",description:"wu-bottom-nav-item children"}],members:[],events:[{name:"wu-change",description:"Fires on item activate, detail: { value: string }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-bottom-nav",customElement:!0}],exports:[{kind:"js",name:"WuBottomNav",declaration:{name:"WuBottomNav",module:"src/components/bottom-nav/wu-bottom-nav.ts"}},{kind:"custom-element-definition",name:"wu-bottom-nav",declaration:{name:"WuBottomNav",module:"src/components/bottom-nav/wu-bottom-nav.ts"}}]},{kind:"javascript-module",path:"src/components/bottom-nav/wu-bottom-nav.ts",declarations:[{kind:"class",description:"An item inside wu-bottom-nav.",name:"WuBottomNavItem",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-bottom-nav-item",customElement:!0}],exports:[{kind:"js",name:"WuBottomNavItem",declaration:{name:"WuBottomNavItem",module:"src/components/bottom-nav/wu-bottom-nav.ts"}},{kind:"custom-element-definition",name:"wu-bottom-nav-item",declaration:{name:"WuBottomNavItem",module:"src/components/bottom-nav/wu-bottom-nav.ts"}}]},{kind:"javascript-module",path:"src/components/breadcrumb/wu-breadcrumb.ts",declarations:[{kind:"class",description:"A breadcrumb navigation component with structured data markup.",name:"WuBreadcrumb",cssProperties:[{name:"--wu-breadcrumb-color",description:"Item link colour"},{name:"--wu-breadcrumb-color-active",description:"Current page colour"},{name:"--wu-breadcrumb-color-hover",description:"Hover colour"}],cssParts:[],slots:[{name:"",description:"Place `<a>` or `<span>` elements for each breadcrumb item"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-breadcrumb",customElement:!0}],exports:[{kind:"js",name:"WuBreadcrumb",declaration:{name:"WuBreadcrumb",module:"src/components/breadcrumb/wu-breadcrumb.ts"}},{kind:"custom-element-definition",name:"wu-breadcrumb",declaration:{name:"WuBreadcrumb",module:"src/components/breadcrumb/wu-breadcrumb.ts"}}]},{kind:"javascript-module",path:"src/components/button/wu-button.ts",declarations:[{kind:"class",description:"",name:"WuButton",cssProperties:[],cssParts:[],slots:[],members:[{kind:"field",name:"variant",description:"Visual style variant",type:{text:"'primary' | 'secondary' | 'ghost' | 'danger' | 'success'"},default:"primary",attribute:"variant",reflects:!0},{kind:"field",name:"size",description:`Visual style variant */
  @property({ reflect: true })
  variant: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' = 'primary';

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",attribute:"size",reflects:!0},{kind:"field",name:"type",description:`Visual style variant */
  @property({ reflect: true })
  variant: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' = 'primary';

  /** Size variant */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  /** Disabled state — prevents interaction */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Loading state — shows spinner and prevents interaction */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /** Native button type attribute`,type:{text:"'button' | 'submit' | 'reset'"},default:"button",attribute:"type",reflects:!1}],events:[],attributes:[{name:"variant",description:"Visual style variant",type:{text:"'primary' | 'secondary' | 'ghost' | 'danger' | 'success'"},default:"primary",fieldName:"variant"},{name:"size",description:`Visual style variant */
  @property({ reflect: true })
  variant: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' = 'primary';

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",fieldName:"size"},{name:"type",description:`Visual style variant */
  @property({ reflect: true })
  variant: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' = 'primary';

  /** Size variant */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  /** Disabled state — prevents interaction */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Loading state — shows spinner and prevents interaction */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /** Native button type attribute`,type:{text:"'button' | 'submit' | 'reset'"},default:"button",fieldName:"type"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-button",customElement:!0}],exports:[{kind:"js",name:"WuButton",declaration:{name:"WuButton",module:"src/components/button/wu-button.ts"}},{kind:"custom-element-definition",name:"wu-button",declaration:{name:"WuButton",module:"src/components/button/wu-button.ts"}}]},{kind:"javascript-module",path:"src/components/calendar/wu-calendar.ts",declarations:[{kind:"class",description:"A standalone calendar for date selection.",name:"WuCalendar",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-change",description:"Fires on date select, detail: { value: string (ISO date) }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-calendar",customElement:!0}],exports:[{kind:"js",name:"WuCalendar",declaration:{name:"WuCalendar",module:"src/components/calendar/wu-calendar.ts"}},{kind:"custom-element-definition",name:"wu-calendar",declaration:{name:"WuCalendar",module:"src/components/calendar/wu-calendar.ts"}}]},{kind:"javascript-module",path:"src/components/callout/wu-callout.ts",declarations:[{kind:"class",description:"A callout box for drawing attention to important content. Less urgent than `<wu-alert>` — no dismiss action.",name:"WuCallout",cssProperties:[{name:"--wu-callout-bg",description:"Background colour"},{name:"--wu-callout-border",description:"Left accent border colour"},{name:"--wu-callout-color",description:"Icon and title colour"}],cssParts:[],slots:[{name:"",description:"Callout body content"}],members:[{kind:"field",name:"variant",description:"Visual variant",type:{text:"'info' | 'success' | 'warning' | 'danger'"},default:"info",attribute:"variant",reflects:!0}],events:[],attributes:[{name:"variant",description:"Visual variant",type:{text:"'info' | 'success' | 'warning' | 'danger'"},default:"info",fieldName:"variant"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-callout",customElement:!0}],exports:[{kind:"js",name:"WuCallout",declaration:{name:"WuCallout",module:"src/components/callout/wu-callout.ts"}},{kind:"custom-element-definition",name:"wu-callout",declaration:{name:"WuCallout",module:"src/components/callout/wu-callout.ts"}}]},{kind:"javascript-module",path:"src/components/card/wu-card.ts",declarations:[{kind:"class",description:"",name:"WuCard",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-card",customElement:!0}],exports:[{kind:"js",name:"WuCard",declaration:{name:"WuCard",module:"src/components/card/wu-card.ts"}},{kind:"custom-element-definition",name:"wu-card",declaration:{name:"WuCard",module:"src/components/card/wu-card.ts"}}]},{kind:"javascript-module",path:"src/components/carousel/wu-carousel.ts",declarations:[{kind:"class",description:"A carousel/slider component.",name:"WuCarousel",cssProperties:[],cssParts:[],slots:[{name:"",description:"Slide content (any elements)"}],members:[],events:[{name:"wu-slide-change",description:"Fires on slide change, detail: { index: number }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-carousel",customElement:!0}],exports:[{kind:"js",name:"WuCarousel",declaration:{name:"WuCarousel",module:"src/components/carousel/wu-carousel.ts"}},{kind:"custom-element-definition",name:"wu-carousel",declaration:{name:"WuCarousel",module:"src/components/carousel/wu-carousel.ts"}}]},{kind:"javascript-module",path:"src/components/checkbox/wu-checkbox.ts",declarations:[{kind:"class",description:"A checkbox component with checked, indeterminate, and disabled states.",name:"WuCheckbox",cssProperties:[{name:"--wu-checkbox-size",description:"Width and height of the checkbox"},{name:"--wu-checkbox-checked-bg",description:"Background when checked"},{name:"--wu-checkbox-border",description:"Default border colour"}],cssParts:[{name:"base",description:"The outer wrapper"},{name:"input",description:"The native checkbox input"},{name:"label",description:"The label element"}],slots:[],members:[],events:[{name:"wu-change",description:"Emitted when the checked state changes",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-checkbox",customElement:!0}],exports:[{kind:"js",name:"WuCheckbox",declaration:{name:"WuCheckbox",module:"src/components/checkbox/wu-checkbox.ts"}},{kind:"custom-element-definition",name:"wu-checkbox",declaration:{name:"WuCheckbox",module:"src/components/checkbox/wu-checkbox.ts"}}]},{kind:"javascript-module",path:"src/components/code/wu-code.ts",declarations:[{kind:"class",description:"Inline code snippet. For multi-line syntax-highlighted blocks use `<wu-code-block>`.",name:"WuCode",cssProperties:[],cssParts:[],slots:[{name:"",description:"The code string to display inline"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-code",customElement:!0}],exports:[{kind:"js",name:"WuCode",declaration:{name:"WuCode",module:"src/components/code/wu-code.ts"}},{kind:"custom-element-definition",name:"wu-code",declaration:{name:"WuCode",module:"src/components/code/wu-code.ts"}}]},{kind:"javascript-module",path:"src/components/code-block/wu-code-block.ts",declarations:[{kind:"class",description:"A syntax-highlighted code display block with copy button.",name:"WuCodeBlock",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-code-block",customElement:!0}],exports:[{kind:"js",name:"WuCodeBlock",declaration:{name:"WuCodeBlock",module:"src/components/code-block/wu-code-block.ts"}},{kind:"custom-element-definition",name:"wu-code-block",declaration:{name:"WuCodeBlock",module:"src/components/code-block/wu-code-block.ts"}}]},{kind:"javascript-module",path:"src/components/collapse/wu-collapse.ts",declarations:[{kind:"class",description:"A single collapsible panel with a toggle trigger. For multi-panel grouped accordions use `<wu-accordion>`.",name:"WuCollapse",cssProperties:[],cssParts:[],slots:[{name:"",description:"The content to show/hide"},{name:"trigger",description:"Custom trigger content (defaults to the `label` property)"}],members:[],events:[{name:"wu-open",description:"Emitted when the panel opens",type:{text:"CustomEvent"}},{name:"wu-close",description:"Emitted when the panel closes",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-collapse",customElement:!0}],exports:[{kind:"js",name:"WuCollapse",declaration:{name:"WuCollapse",module:"src/components/collapse/wu-collapse.ts"}},{kind:"custom-element-definition",name:"wu-collapse",declaration:{name:"WuCollapse",module:"src/components/collapse/wu-collapse.ts"}}]},{kind:"javascript-module",path:"src/components/color-picker/wu-color-picker.ts",declarations:[{kind:"class",description:"Utility: hsl → hex */ function hslToHex(h: number, s: number, l: number): string { s /= 100; l /= 100; const a = s * Math.min(l, 1 - l); const f = (n: number) => { const k = (n + h / 30) % 12; const c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); return Math.round(255 * c).toString(16).padStart(2, '0'); }; return `#${f(0)}${f(8)}${f(4)}`; } /** A canvas-based colour picker with hue slider and hex input.",name:"WuColorPicker",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-change",description:"Fires on colour change, detail: { value: string (hex) }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-color-picker",customElement:!0}],exports:[{kind:"js",name:"WuColorPicker",declaration:{name:"WuColorPicker",module:"src/components/color-picker/wu-color-picker.ts"}},{kind:"custom-element-definition",name:"wu-color-picker",declaration:{name:"WuColorPicker",module:"src/components/color-picker/wu-color-picker.ts"}}]},{kind:"javascript-module",path:"src/components/combobox/wu-combobox.ts",declarations:[{kind:"class",description:"An autocomplete / combobox input with dropdown suggestions. Supports static options or async loading.",name:"WuCombobox",cssProperties:[{name:"--wu-cmb-height",description:"Input height"}],cssParts:[{name:"base",description:"The text input element"},{name:"dropdown",description:"The suggestions list"}],slots:[],members:[{kind:"field",name:"options",description:`Input label */
  @property()
  label = '';

  /** Placeholder text */
  @property()
  placeholder = 'Search…';

  /** Currently selected value */
  @property()
  value = '';

  /** Static options array`,type:{text:"ComboboxOption[]"},default:"[]",attribute:"options",reflects:!1}],events:[{name:"wu-change",description:"Emitted when a value is selected. Detail: { value: string, label: string }",type:{text:"CustomEvent"}},{name:"wu-input",description:"Emitted on every keystroke. Detail: { query: string }",type:{text:"CustomEvent"}},{name:"wu-clear",description:"Emitted when the value is cleared.",type:{text:"CustomEvent"}}],attributes:[{name:"options",description:`Input label */
  @property()
  label = '';

  /** Placeholder text */
  @property()
  placeholder = 'Search…';

  /** Currently selected value */
  @property()
  value = '';

  /** Static options array`,type:{text:"ComboboxOption[]"},default:"[]",fieldName:"options"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-combobox",customElement:!0}],exports:[{kind:"js",name:"WuCombobox",declaration:{name:"WuCombobox",module:"src/components/combobox/wu-combobox.ts"}},{kind:"custom-element-definition",name:"wu-combobox",declaration:{name:"WuCombobox",module:"src/components/combobox/wu-combobox.ts"}}]},{kind:"javascript-module",path:"src/components/command/wu-command.ts",declarations:[{kind:"class",description:"A command palette component with fuzzy search, grouped results, and keyboard navigation.",name:"WuCommand",cssProperties:[{name:"--wu-cmd-bg",description:"Panel background color"},{name:"--wu-cmd-shadow",description:"Panel shadow"},{name:"--wu-cmd-max-height",description:"Max height of the results list"}],cssParts:[{name:"backdrop",description:"The modal backdrop"},{name:"panel",description:"The command panel"}],slots:[],members:[{kind:"field",name:"items",description:`Whether the palette is open */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** Command items to display`,type:{text:"WuCommandItem[]"},default:"[]",attribute:"items",reflects:!1}],events:[{name:"wu-select",description:"Emitted when a command is selected. Detail: `{ item: WuCommandItem }`",type:{text:"CustomEvent"}},{name:"wu-close",description:"Emitted when the palette is closed.",type:{text:"CustomEvent"}}],attributes:[{name:"items",description:`Whether the palette is open */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** Command items to display`,type:{text:"WuCommandItem[]"},default:"[]",fieldName:"items"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-command",customElement:!0}],exports:[{kind:"js",name:"WuCommand",declaration:{name:"WuCommand",module:"src/components/command/wu-command.ts"}},{kind:"custom-element-definition",name:"wu-command",declaration:{name:"WuCommand",module:"src/components/command/wu-command.ts"}}]},{kind:"javascript-module",path:"src/components/context-menu/wu-context-menu.ts",declarations:[{kind:"class",description:"A right-click context menu component.",name:"WuContextMenu",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-select",description:"Fires when item selected, detail: { value: string }",type:{text:"CustomEvent"}},{name:"wu-close",description:"Fires when menu is closed",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-context-menu",customElement:!0}],exports:[{kind:"js",name:"WuContextMenu",declaration:{name:"WuContextMenu",module:"src/components/context-menu/wu-context-menu.ts"}},{kind:"custom-element-definition",name:"wu-context-menu",declaration:{name:"WuContextMenu",module:"src/components/context-menu/wu-context-menu.ts"}}]},{kind:"javascript-module",path:"src/components/copy-button/wu-copy-button.ts",declarations:[{kind:"class",description:"A button that copies the given text to the clipboard.",name:"WuCopyButton",cssProperties:[{name:"--wu-copy-button-*",description:"Inherits from button styles"}],cssParts:[],slots:[],members:[],events:[{name:"wu-copy",description:"Emitted after a successful copy. Detail: `{ value: string }`",type:{text:"CustomEvent"}},{name:"wu-error",description:"Emitted when the clipboard API fails.",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-copy-button",customElement:!0}],exports:[{kind:"js",name:"WuCopyButton",declaration:{name:"WuCopyButton",module:"src/components/copy-button/wu-copy-button.ts"}},{kind:"custom-element-definition",name:"wu-copy-button",declaration:{name:"WuCopyButton",module:"src/components/copy-button/wu-copy-button.ts"}}]},{kind:"javascript-module",path:"src/components/countdown/wu-countdown.ts",declarations:[{kind:"class",description:"A countdown timer that counts down to a target ISO date/time.",name:"WuCountdown",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-expire",description:"Fires when countdown reaches zero",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-countdown",customElement:!0}],exports:[{kind:"js",name:"WuCountdown",declaration:{name:"WuCountdown",module:"src/components/countdown/wu-countdown.ts"}},{kind:"custom-element-definition",name:"wu-countdown",declaration:{name:"WuCountdown",module:"src/components/countdown/wu-countdown.ts"}}]},{kind:"javascript-module",path:"src/components/dashboard/wu-dashboard.ts",declarations:[{kind:"class",description:"",name:"WuDashboard",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-dashboard",customElement:!0}],exports:[{kind:"js",name:"WuDashboard",declaration:{name:"WuDashboard",module:"src/components/dashboard/wu-dashboard.ts"}},{kind:"custom-element-definition",name:"wu-dashboard",declaration:{name:"WuDashboard",module:"src/components/dashboard/wu-dashboard.ts"}}]},{kind:"javascript-module",path:"src/components/data-grid/wu-data-grid.ts",declarations:[{kind:"class",description:"A data grid component with filtering, sorting, and server-side pagination.",name:"WuDataGrid",cssProperties:[{name:"--wu-dg-border",description:"Border color"},{name:"--wu-dg-header-bg",description:"Header background"},{name:"--wu-dg-row-hover",description:"Row hover background"},{name:"--wu-dg-row-height",description:"Row height"}],cssParts:[{name:"grid",description:"Root grid container"}],slots:[],members:[{kind:"field",name:"columns",description:"Column definitions",type:{text:"WuDataGridColumn[]"},default:"[]",attribute:"columns",reflects:!1},{kind:"field",name:"data",description:`Column definitions */
  @property({ type: Array })
  columns: WuDataGridColumn[] = [];

  /** Row data — each item should have an \`id\` field`,type:{text:"Record<string, unknown>[]"},default:"[]",attribute:"data",reflects:!1}],events:[{name:"wu-sort-change",description:"Emitted when sort changes. Detail: `{ key, direction }`",type:{text:"CustomEvent"}},{name:"wu-filter-change",description:"Emitted when global filter changes. Detail: `{ query }`",type:{text:"CustomEvent"}},{name:"wu-page-change",description:"Emitted when page changes. Detail: `{ page, pageSize }`",type:{text:"CustomEvent"}}],attributes:[{name:"columns",description:"Column definitions",type:{text:"WuDataGridColumn[]"},default:"[]",fieldName:"columns"},{name:"data",description:`Column definitions */
  @property({ type: Array })
  columns: WuDataGridColumn[] = [];

  /** Row data — each item should have an \`id\` field`,type:{text:"Record<string, unknown>[]"},default:"[]",fieldName:"data"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-data-grid",customElement:!0}],exports:[{kind:"js",name:"WuDataGrid",declaration:{name:"WuDataGrid",module:"src/components/data-grid/wu-data-grid.ts"}},{kind:"custom-element-definition",name:"wu-data-grid",declaration:{name:"WuDataGrid",module:"src/components/data-grid/wu-data-grid.ts"}}]},{kind:"javascript-module",path:"src/components/data-table/wu-data-table.ts",declarations:[{kind:"class",description:"",name:"WuDataTable",cssProperties:[],cssParts:[],slots:[],members:[{kind:"field",name:"columns",description:"Column definitions",type:{text:"WuDataTableColumn[]"},default:"[]",attribute:"columns",reflects:!1},{kind:"field",name:"rows",description:`Column definitions */
  @property({ type: Array })
  columns: WuDataTableColumn[] = [];

  /** Row data — plain objects whose keys match \`column.key\` values`,type:{text:"Record<string, unknown>[]"},default:"[]",attribute:"rows",reflects:!1}],events:[],attributes:[{name:"columns",description:"Column definitions",type:{text:"WuDataTableColumn[]"},default:"[]",fieldName:"columns"},{name:"rows",description:`Column definitions */
  @property({ type: Array })
  columns: WuDataTableColumn[] = [];

  /** Row data — plain objects whose keys match \`column.key\` values`,type:{text:"Record<string, unknown>[]"},default:"[]",fieldName:"rows"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-data-table",customElement:!0}],exports:[{kind:"js",name:"WuDataTable",declaration:{name:"WuDataTable",module:"src/components/data-table/wu-data-table.ts"}},{kind:"custom-element-definition",name:"wu-data-table",declaration:{name:"WuDataTable",module:"src/components/data-table/wu-data-table.ts"}}]},{kind:"javascript-module",path:"src/components/date-picker/wu-date-picker.ts",declarations:[{kind:"class",description:"A date picker component with a calendar grid and keyboard navigation.",name:"WuDatePicker",cssProperties:[{name:"--wu-dp-border",description:"Border color"},{name:"--wu-dp-bg",description:"Calendar background"},{name:"--wu-dp-shadow",description:"Calendar shadow"},{name:"--wu-dp-cell-size",description:"Size of each day cell"}],cssParts:[{name:"trigger",description:"The trigger button"},{name:"calendar",description:"The calendar popup"}],slots:[],members:[],events:[{name:"wu-date-change",description:"Emitted when the user selects a date. Detail: `{ value: string }` (ISO YYYY-MM-DD)",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-date-picker",customElement:!0}],exports:[{kind:"js",name:"WuDatePicker",declaration:{name:"WuDatePicker",module:"src/components/date-picker/wu-date-picker.ts"}},{kind:"custom-element-definition",name:"wu-date-picker",declaration:{name:"WuDatePicker",module:"src/components/date-picker/wu-date-picker.ts"}}]},{kind:"javascript-module",path:"src/components/date-range-picker/wu-date-range-picker.ts",declarations:[{kind:"class",description:"A two-calendar date range picker.",name:"WuDateRangePicker",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-change",description:"Fires on range confirmed, detail: { start: string, end: string }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-date-range-picker",customElement:!0}],exports:[{kind:"js",name:"WuDateRangePicker",declaration:{name:"WuDateRangePicker",module:"src/components/date-range-picker/wu-date-range-picker.ts"}},{kind:"custom-element-definition",name:"wu-date-range-picker",declaration:{name:"WuDateRangePicker",module:"src/components/date-range-picker/wu-date-range-picker.ts"}}]},{kind:"javascript-module",path:"src/components/description-list/wu-dl.ts",declarations:[{kind:"class",description:"Description list container.",name:"WuDl",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-dl",customElement:!0}],exports:[{kind:"js",name:"WuDl",declaration:{name:"WuDl",module:"src/components/description-list/wu-dl.ts"}},{kind:"custom-element-definition",name:"wu-dl",declaration:{name:"WuDl",module:"src/components/description-list/wu-dl.ts"}}]},{kind:"javascript-module",path:"src/components/description-list/wu-dl.ts",declarations:[{kind:"class",description:"Description list container.",name:"WuDt",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-dt",customElement:!0}],exports:[{kind:"js",name:"WuDt",declaration:{name:"WuDt",module:"src/components/description-list/wu-dl.ts"}},{kind:"custom-element-definition",name:"wu-dt",declaration:{name:"WuDt",module:"src/components/description-list/wu-dl.ts"}}]},{kind:"javascript-module",path:"src/components/description-list/wu-dl.ts",declarations:[{kind:"class",description:"Description list container.",name:"WuDd",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-dd",customElement:!0}],exports:[{kind:"js",name:"WuDd",declaration:{name:"WuDd",module:"src/components/description-list/wu-dl.ts"}},{kind:"custom-element-definition",name:"wu-dd",declaration:{name:"WuDd",module:"src/components/description-list/wu-dl.ts"}}]},{kind:"javascript-module",path:"src/components/divider/wu-divider.ts",declarations:[{kind:"class",description:"A horizontal or vertical divider line with an optional label.",name:"WuDivider",cssProperties:[{name:"--wu-divider-color",description:"Line colour"},{name:"--wu-divider-thickness",description:"Line thickness"},{name:"--wu-divider-spacing",description:"Margin around the divider"}],cssParts:[],slots:[{name:"",description:"Optional label content displayed in the centre of the divider"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-divider",customElement:!0}],exports:[{kind:"js",name:"WuDivider",declaration:{name:"WuDivider",module:"src/components/divider/wu-divider.ts"}},{kind:"custom-element-definition",name:"wu-divider",declaration:{name:"WuDivider",module:"src/components/divider/wu-divider.ts"}}]},{kind:"javascript-module",path:"src/components/drawer/wu-drawer.ts",declarations:[{kind:"class",description:"A sliding drawer/panel component with backdrop.",name:"WuDrawer",cssProperties:[],cssParts:[],slots:[{name:"",description:"Drawer body content"},{name:"footer",description:"Footer actions"}],members:[],events:[{name:"wu-close",description:"Fires when drawer requests close",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-drawer",customElement:!0}],exports:[{kind:"js",name:"WuDrawer",declaration:{name:"WuDrawer",module:"src/components/drawer/wu-drawer.ts"}},{kind:"custom-element-definition",name:"wu-drawer",declaration:{name:"WuDrawer",module:"src/components/drawer/wu-drawer.ts"}}]},{kind:"javascript-module",path:"src/components/dropdown/wu-dropdown.ts",declarations:[{kind:"class",description:"A dropdown menu triggered by a slotted element.",name:"WuDropdown",cssProperties:[],cssParts:[],slots:[{name:"trigger",description:"The element that triggers the dropdown"},{name:"",description:"Custom menu content (use .item class for styling)"}],members:[],events:[{name:"wu-select",description:"Fires on item select, detail: { value: string }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-dropdown",customElement:!0}],exports:[{kind:"js",name:"WuDropdown",declaration:{name:"WuDropdown",module:"src/components/dropdown/wu-dropdown.ts"}},{kind:"custom-element-definition",name:"wu-dropdown",declaration:{name:"WuDropdown",module:"src/components/dropdown/wu-dropdown.ts"}}]},{kind:"javascript-module",path:"src/components/empty-state/wu-empty-state.ts",declarations:[{kind:"class",description:"",name:"WuEmptyState",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-empty-state",customElement:!0}],exports:[{kind:"js",name:"WuEmptyState",declaration:{name:"WuEmptyState",module:"src/components/empty-state/wu-empty-state.ts"}},{kind:"custom-element-definition",name:"wu-empty-state",declaration:{name:"WuEmptyState",module:"src/components/empty-state/wu-empty-state.ts"}}]},{kind:"javascript-module",path:"src/components/error-page/wu-error-page.ts",declarations:[{kind:"class",description:"",name:"WuErrorPage",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-error-page",customElement:!0}],exports:[{kind:"js",name:"WuErrorPage",declaration:{name:"WuErrorPage",module:"src/components/error-page/wu-error-page.ts"}},{kind:"custom-element-definition",name:"wu-error-page",declaration:{name:"WuErrorPage",module:"src/components/error-page/wu-error-page.ts"}}]},{kind:"javascript-module",path:"src/components/file-upload/wu-file-upload.ts",declarations:[{kind:"class",description:"A file upload component with drag-and-drop support, file list, and validation.",name:"WuFileUpload",cssProperties:[{name:"--wu-fu-border",description:"Default border color"},{name:"--wu-fu-border-active",description:"Active/hover border color"},{name:"--wu-fu-bg",description:"Background color"}],cssParts:[{name:"drop-zone",description:"The drop/click target area"},{name:"file-list",description:"The list of selected files"}],slots:[],members:[],events:[{name:"wu-file-select",description:"Emitted when files are selected. Detail: `{ files: File[] }`",type:{text:"CustomEvent"}},{name:"wu-file-remove",description:"Emitted when a file is removed. Detail: `{ file: File }`",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-file-upload",customElement:!0}],exports:[{kind:"js",name:"WuFileUpload",declaration:{name:"WuFileUpload",module:"src/components/file-upload/wu-file-upload.ts"}},{kind:"custom-element-definition",name:"wu-file-upload",declaration:{name:"WuFileUpload",module:"src/components/file-upload/wu-file-upload.ts"}}]},{kind:"javascript-module",path:"src/components/form/wu-form.ts",declarations:[{kind:"class",description:"",name:"WuForm",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-form",customElement:!0}],exports:[{kind:"js",name:"WuForm",declaration:{name:"WuForm",module:"src/components/form/wu-form.ts"}},{kind:"custom-element-definition",name:"wu-form",declaration:{name:"WuForm",module:"src/components/form/wu-form.ts"}}]},{kind:"javascript-module",path:"src/components/gallery/wu-gallery.ts",declarations:[{kind:"class",description:"Image gallery grid with optional lightbox integration.",name:"WuGallery",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-image-click",description:"Fires on thumbnail click, detail: { index: number }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-gallery",customElement:!0}],exports:[{kind:"js",name:"WuGallery",declaration:{name:"WuGallery",module:"src/components/gallery/wu-gallery.ts"}},{kind:"custom-element-definition",name:"wu-gallery",declaration:{name:"WuGallery",module:"src/components/gallery/wu-gallery.ts"}}]},{kind:"javascript-module",path:"src/components/image/wu-image.ts",declarations:[{kind:"class",description:"An image component with fallback placeholder and lazy loading.",name:"WuImage",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-image",customElement:!0}],exports:[{kind:"js",name:"WuImage",declaration:{name:"WuImage",module:"src/components/image/wu-image.ts"}},{kind:"custom-element-definition",name:"wu-image",declaration:{name:"WuImage",module:"src/components/image/wu-image.ts"}}]},{kind:"javascript-module",path:"src/components/input/wu-input.ts",declarations:[{kind:"class",description:"A text input component with label, hint, and error support.",name:"WuInput",cssProperties:[{name:"--wu-input-bg",description:"Background colour"},{name:"--wu-input-border",description:"Border colour"},{name:"--wu-input-border-focus",description:"Border colour when focused"},{name:"--wu-input-radius",description:"Border radius"}],cssParts:[{name:"base",description:"The outer wrapper"},{name:"input",description:"The native input element"}],slots:[],members:[{kind:"field",name:"type",description:"Input type",type:{text:"'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url'"},default:"text",attribute:"type",reflects:!1},{kind:"field",name:"size",description:`Current value */
  @property()
  value = '';

  /** Placeholder text */
  @property()
  placeholder?: string;

  /** Visible label */
  @property()
  label?: string;

  /** Hint text shown below the input */
  @property()
  hint?: string;

  /** Error message — also sets invalid state */
  @property()
  error?: string;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Required field */
  @property({ type: Boolean })
  required = false;

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",attribute:"size",reflects:!0}],events:[{name:"wu-change",description:"Emitted when the value changes (on input)",type:{text:"CustomEvent"}},{name:"wu-blur",description:"Emitted when the input loses focus",type:{text:"CustomEvent"}}],attributes:[{name:"type",description:"Input type",type:{text:"'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url'"},default:"text",fieldName:"type"},{name:"size",description:`Current value */
  @property()
  value = '';

  /** Placeholder text */
  @property()
  placeholder?: string;

  /** Visible label */
  @property()
  label?: string;

  /** Hint text shown below the input */
  @property()
  hint?: string;

  /** Error message — also sets invalid state */
  @property()
  error?: string;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Required field */
  @property({ type: Boolean })
  required = false;

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",fieldName:"size"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-input",customElement:!0}],exports:[{kind:"js",name:"WuInput",declaration:{name:"WuInput",module:"src/components/input/wu-input.ts"}},{kind:"custom-element-definition",name:"wu-input",declaration:{name:"WuInput",module:"src/components/input/wu-input.ts"}}]},{kind:"javascript-module",path:"src/components/kanban/wu-kanban.ts",declarations:[{kind:"class",description:"Kanban board container.",name:"WuKanban",cssProperties:[],cssParts:[],slots:[{name:"",description:"wu-kanban-column children"}],members:[],events:[{name:"wu-card-move",description:"Card moved, detail: { cardId, fromColumn, toColumn }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-kanban",customElement:!0}],exports:[{kind:"js",name:"WuKanban",declaration:{name:"WuKanban",module:"src/components/kanban/wu-kanban.ts"}},{kind:"custom-element-definition",name:"wu-kanban",declaration:{name:"WuKanban",module:"src/components/kanban/wu-kanban.ts"}}]},{kind:"javascript-module",path:"src/components/kanban/wu-kanban.ts",declarations:[{kind:"class",description:"Kanban board container.",name:"WuKanbanColumn",cssProperties:[],cssParts:[],slots:[{name:"",description:"wu-kanban-column children"}],members:[],events:[{name:"wu-card-move",description:"Card moved, detail: { cardId, fromColumn, toColumn }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-kanban-column",customElement:!0}],exports:[{kind:"js",name:"WuKanbanColumn",declaration:{name:"WuKanbanColumn",module:"src/components/kanban/wu-kanban.ts"}},{kind:"custom-element-definition",name:"wu-kanban-column",declaration:{name:"WuKanbanColumn",module:"src/components/kanban/wu-kanban.ts"}}]},{kind:"javascript-module",path:"src/components/kbd/wu-kbd.ts",declarations:[{kind:"class",description:"Renders a keyboard shortcut or key name with platform-native styling.",name:"WuKbd",cssProperties:[],cssParts:[],slots:[{name:"",description:'The key name (e.g., "Ctrl", "⌘", "Enter")'}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-kbd",customElement:!0}],exports:[{kind:"js",name:"WuKbd",declaration:{name:"WuKbd",module:"src/components/kbd/wu-kbd.ts"}},{kind:"custom-element-definition",name:"wu-kbd",declaration:{name:"WuKbd",module:"src/components/kbd/wu-kbd.ts"}}]},{kind:"javascript-module",path:"src/components/lightbox/wu-lightbox.ts",declarations:[{kind:"class",description:"Fullscreen image lightbox with navigation.",name:"WuLightbox",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-close",description:"Fires when the lightbox closes",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-lightbox",customElement:!0}],exports:[{kind:"js",name:"WuLightbox",declaration:{name:"WuLightbox",module:"src/components/lightbox/wu-lightbox.ts"}},{kind:"custom-element-definition",name:"wu-lightbox",declaration:{name:"WuLightbox",module:"src/components/lightbox/wu-lightbox.ts"}}]},{kind:"javascript-module",path:"src/components/list/wu-list.ts",declarations:[{kind:"class",description:"A semantic list container. Pair with `<wu-list-item>` for each item.",name:"WuList",cssProperties:[{name:"--wu-list-*",description:"Inherits font tokens"}],cssParts:[],slots:[{name:"",description:"One or more `<wu-list-item>` elements"}],members:[{kind:"field",name:"type",description:"List style type",type:{text:"'unordered' | 'ordered' | 'none'"},default:"unordered",attribute:"type",reflects:!0}],events:[],attributes:[{name:"type",description:"List style type",type:{text:"'unordered' | 'ordered' | 'none'"},default:"unordered",fieldName:"type"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-list",customElement:!0}],exports:[{kind:"js",name:"WuList",declaration:{name:"WuList",module:"src/components/list/wu-list.ts"}},{kind:"custom-element-definition",name:"wu-list",declaration:{name:"WuList",module:"src/components/list/wu-list.ts"}}]},{kind:"javascript-module",path:"src/components/list/wu-list.ts",declarations:[{kind:"class",description:"List style type */",name:"WuListItem",cssProperties:[],cssParts:[],slots:[{name:"",description:"Item content"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-list-item",customElement:!0}],exports:[{kind:"js",name:"WuListItem",declaration:{name:"WuListItem",module:"src/components/list/wu-list.ts"}},{kind:"custom-element-definition",name:"wu-list-item",declaration:{name:"WuListItem",module:"src/components/list/wu-list.ts"}}]},{kind:"javascript-module",path:"src/components/mega-menu/wu-mega-menu.ts",declarations:[{kind:"class",description:"A multi-column flyout menu for navigation.",name:"WuMegaMenu",cssProperties:[],cssParts:[],slots:[{name:"trigger",description:"The element that opens the menu"},{name:"",description:"Column content"}],members:[],events:[{name:"wu-open",description:"Fires when the menu opens",type:{text:"CustomEvent"}},{name:"wu-close",description:"Fires when the menu closes",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-mega-menu",customElement:!0}],exports:[{kind:"js",name:"WuMegaMenu",declaration:{name:"WuMegaMenu",module:"src/components/mega-menu/wu-mega-menu.ts"}},{kind:"custom-element-definition",name:"wu-mega-menu",declaration:{name:"WuMegaMenu",module:"src/components/mega-menu/wu-mega-menu.ts"}}]},{kind:"javascript-module",path:"src/components/mention/wu-mention.ts",declarations:[{kind:"class",description:"Text input with @ mention autocomplete.",name:"WuMention",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-mention",description:"Fires when user is mentioned, detail: { user: MentionUser }",type:{text:"CustomEvent"}},{name:"wu-change",description:"Fires on input change, detail: { value: string }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-mention",customElement:!0}],exports:[{kind:"js",name:"WuMention",declaration:{name:"WuMention",module:"src/components/mention/wu-mention.ts"}},{kind:"custom-element-definition",name:"wu-mention",declaration:{name:"WuMention",module:"src/components/mention/wu-mention.ts"}}]},{kind:"javascript-module",path:"src/components/meter/wu-meter.ts",declarations:[{kind:"class",description:"A measurement bar (like the native `<meter>` element) with a label and value display.",name:"WuMeter",cssProperties:[{name:"--wu-meter-fill-bg",description:"Fill colour (overridden by variant)"},{name:"--wu-meter-track-bg",description:"Track background colour"},{name:"--wu-meter-height",description:"Bar height"}],cssParts:[],slots:[],members:[{kind:"field",name:"variant",description:`Current value */
  @property({ type: Number })
  value = 0;

  /** Maximum value */
  @property({ type: Number })
  max = 100;

  /** Minimum value */
  @property({ type: Number })
  min = 0;

  /** Label text */
  @property()
  label?: string;

  /** Unit suffix (e.g. '%', 'GB') */
  @property()
  unit = '';

  /** Visual variant`,type:{text:"'default' | 'success' | 'warning' | 'danger'"},default:"default",attribute:"variant",reflects:!0}],events:[],attributes:[{name:"variant",description:`Current value */
  @property({ type: Number })
  value = 0;

  /** Maximum value */
  @property({ type: Number })
  max = 100;

  /** Minimum value */
  @property({ type: Number })
  min = 0;

  /** Label text */
  @property()
  label?: string;

  /** Unit suffix (e.g. '%', 'GB') */
  @property()
  unit = '';

  /** Visual variant`,type:{text:"'default' | 'success' | 'warning' | 'danger'"},default:"default",fieldName:"variant"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-meter",customElement:!0}],exports:[{kind:"js",name:"WuMeter",declaration:{name:"WuMeter",module:"src/components/meter/wu-meter.ts"}},{kind:"custom-element-definition",name:"wu-meter",declaration:{name:"WuMeter",module:"src/components/meter/wu-meter.ts"}}]},{kind:"javascript-module",path:"src/components/modal/wu-modal.ts",declarations:[{kind:"class",description:"A modal dialog built on the native HTML `<dialog>` element with focus trap and scroll lock.",name:"WuModal",cssProperties:[{name:"--wu-modal-bg",description:"Modal background colour"},{name:"--wu-modal-width",description:"Modal max width"},{name:"--wu-modal-radius",description:"Modal border radius"},{name:"--wu-modal-backdrop",description:"Backdrop overlay colour"}],cssParts:[{name:"base",description:"The native dialog element"},{name:"header",description:"The modal header section"},{name:"body",description:"The modal body section"},{name:"footer",description:"The modal footer section"}],slots:[{name:"",description:"Default slot for modal body content"},{name:"footer",description:"Action buttons or custom footer content"}],members:[],events:[{name:"wu-open",description:"Emitted when the modal opens",type:{text:"CustomEvent"}},{name:"wu-close",description:"Emitted when the modal closes (reason: 'escape' | 'backdrop' | 'button' | 'api')",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-modal",customElement:!0}],exports:[{kind:"js",name:"WuModal",declaration:{name:"WuModal",module:"src/components/modal/wu-modal.ts"}},{kind:"custom-element-definition",name:"wu-modal",declaration:{name:"WuModal",module:"src/components/modal/wu-modal.ts"}}]},{kind:"javascript-module",path:"src/components/multi-select/wu-multi-select.ts",declarations:[{kind:"class",description:"A multi-selection dropdown with chip display, search, and select-all.",name:"WuMultiSelect",cssProperties:[{name:"--wu-ms-height",description:"Minimum input height"}],cssParts:[{name:"chips-input",description:"The chips + search input container"},{name:"dropdown",description:"The options list"}],slots:[],members:[],events:[{name:"wu-change",description:"Emitted when selection changes. Detail: { values: string[] }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-multi-select",customElement:!0}],exports:[{kind:"js",name:"WuMultiSelect",declaration:{name:"WuMultiSelect",module:"src/components/multi-select/wu-multi-select.ts"}},{kind:"custom-element-definition",name:"wu-multi-select",declaration:{name:"WuMultiSelect",module:"src/components/multi-select/wu-multi-select.ts"}}]},{kind:"javascript-module",path:"src/components/navbar/wu-navbar.ts",declarations:[{kind:"class",description:"",name:"WuNavbar",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-navbar",customElement:!0}],exports:[{kind:"js",name:"WuNavbar",declaration:{name:"WuNavbar",module:"src/components/navbar/wu-navbar.ts"}},{kind:"custom-element-definition",name:"wu-navbar",declaration:{name:"WuNavbar",module:"src/components/navbar/wu-navbar.ts"}}]},{kind:"javascript-module",path:"src/components/notification-center/wu-notification-center.ts",declarations:[{kind:"class",description:"Notification center with bell icon.",name:"WuNotificationCenter",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-notification-click",description:"Fires on notification click, detail: { id: string }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-notification-center",customElement:!0}],exports:[{kind:"js",name:"WuNotificationCenter",declaration:{name:"WuNotificationCenter",module:"src/components/notification-center/wu-notification-center.ts"}},{kind:"custom-element-definition",name:"wu-notification-center",declaration:{name:"WuNotificationCenter",module:"src/components/notification-center/wu-notification-center.ts"}}]},{kind:"javascript-module",path:"src/components/number/wu-number.ts",declarations:[{kind:"class",description:"Formats a number with locale-aware formatting (currency, percentage, decimal).",name:"WuNumber",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-number",customElement:!0}],exports:[{kind:"js",name:"WuNumber",declaration:{name:"WuNumber",module:"src/components/number/wu-number.ts"}},{kind:"custom-element-definition",name:"wu-number",declaration:{name:"WuNumber",module:"src/components/number/wu-number.ts"}}]},{kind:"javascript-module",path:"src/components/pagination/wu-pagination.ts",declarations:[{kind:"class",description:"A pagination control for navigating paged data.",name:"WuPagination",cssProperties:[{name:"--wu-pagination-bg-active",description:"Active page button background"},{name:"--wu-pagination-btn-size",description:"Page button size"}],cssParts:[],slots:[],members:[],events:[{name:"wu-page-change",description:"Emitted when the page changes ({ page: number })",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-pagination",customElement:!0}],exports:[{kind:"js",name:"WuPagination",declaration:{name:"WuPagination",module:"src/components/pagination/wu-pagination.ts"}},{kind:"custom-element-definition",name:"wu-pagination",declaration:{name:"WuPagination",module:"src/components/pagination/wu-pagination.ts"}}]},{kind:"javascript-module",path:"src/components/pin-input/wu-pin-input.ts",declarations:[{kind:"class",description:"OTP / verification code input — splits into individual digit fields.",name:"WuPinInput",cssProperties:[{name:"-",description:"inherited from input styling"}],cssParts:[],slots:[],members:[],events:[{name:"wu-change",description:"Emitted when a digit changes. Detail: { value: string, complete: boolean }",type:{text:"CustomEvent"}},{name:"wu-complete",description:"Emitted when all digits are filled. Detail: { value: string }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-pin-input",customElement:!0}],exports:[{kind:"js",name:"WuPinInput",declaration:{name:"WuPinInput",module:"src/components/pin-input/wu-pin-input.ts"}},{kind:"custom-element-definition",name:"wu-pin-input",declaration:{name:"WuPinInput",module:"src/components/pin-input/wu-pin-input.ts"}}]},{kind:"javascript-module",path:"src/components/popover/wu-popover.ts",declarations:[{kind:"class",description:"A floating popover panel with a trigger slot and content slot.",name:"WuPopover",cssProperties:[{name:"--wu-popover-bg",description:"Popover background colour"},{name:"--wu-popover-shadow",description:"Popover shadow"},{name:"--wu-popover-width",description:"Popover width"}],cssParts:[],slots:[{name:"trigger",description:"The element that toggles the popover"},{name:"",description:"Default slot for popover content"}],members:[{kind:"field",name:"placement",description:`Whether the popover is open */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** Placement relative to trigger`,type:{text:"'top' | 'bottom'"},default:"bottom",attribute:"placement",reflects:!0}],events:[{name:"wu-open",description:"Emitted when the popover opens",type:{text:"CustomEvent"}},{name:"wu-close",description:"Emitted when the popover closes",type:{text:"CustomEvent"}}],attributes:[{name:"placement",description:`Whether the popover is open */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** Placement relative to trigger`,type:{text:"'top' | 'bottom'"},default:"bottom",fieldName:"placement"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-popover",customElement:!0}],exports:[{kind:"js",name:"WuPopover",declaration:{name:"WuPopover",module:"src/components/popover/wu-popover.ts"}},{kind:"custom-element-definition",name:"wu-popover",declaration:{name:"WuPopover",module:"src/components/popover/wu-popover.ts"}}]},{kind:"javascript-module",path:"src/components/progress/wu-progress.ts",declarations:[{kind:"class",description:"A progress bar for determinate or indeterminate loading states.",name:"WuProgress",cssProperties:[{name:"--wu-progress-height",description:"Bar height"},{name:"--wu-progress-track",description:"Track background colour"},{name:"--wu-progress-fill",description:"Fill/active colour"}],cssParts:[],slots:[],members:[{kind:"field",name:"size",description:`Current value (0–100) */
  @property({ type: Number })
  value = 0;

  /** Minimum value */
  @property({ type: Number })
  min = 0;

  /** Maximum value */
  @property({ type: Number })
  max = 100;

  /** Indeterminate state — animates continuously */
  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  /** Show percentage label */
  @property({ type: Boolean })
  showLabel = false;

  /** Visual size`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",attribute:"size",reflects:!0}],events:[],attributes:[{name:"size",description:`Current value (0–100) */
  @property({ type: Number })
  value = 0;

  /** Minimum value */
  @property({ type: Number })
  min = 0;

  /** Maximum value */
  @property({ type: Number })
  max = 100;

  /** Indeterminate state — animates continuously */
  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  /** Show percentage label */
  @property({ type: Boolean })
  showLabel = false;

  /** Visual size`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",fieldName:"size"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-progress",customElement:!0}],exports:[{kind:"js",name:"WuProgress",declaration:{name:"WuProgress",module:"src/components/progress/wu-progress.ts"}},{kind:"custom-element-definition",name:"wu-progress",declaration:{name:"WuProgress",module:"src/components/progress/wu-progress.ts"}}]},{kind:"javascript-module",path:"src/components/qr-code/wu-qr-code.ts",declarations:[{kind:"class",description:"QR code generator using pure SVG path encoding. Uses a compact Reed-Solomon QR implementation for short strings. For production use, swap _encode() with a full QR library.",name:"WuQrCode",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-qr-code",customElement:!0}],exports:[{kind:"js",name:"WuQrCode",declaration:{name:"WuQrCode",module:"src/components/qr-code/wu-qr-code.ts"}},{kind:"custom-element-definition",name:"wu-qr-code",declaration:{name:"WuQrCode",module:"src/components/qr-code/wu-qr-code.ts"}}]},{kind:"javascript-module",path:"src/components/radio/wu-radio.ts",declarations:[{kind:"class",description:"A single radio button within a radio group.",name:"WuRadio",cssProperties:[{name:"--wu-radio-size",description:"Size of the radio circle (default 18px)"},{name:"--wu-radio-color",description:"Selected state colour"},{name:"--wu-radio-border",description:"Unselected border colour"}],cssParts:[{name:"base",description:"Host input element wrapper"}],slots:[{name:"",description:"Label text for the radio button"}],members:[],events:[{name:"wu-change",description:"Emitted when this radio is selected",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-radio",customElement:!0}],exports:[{kind:"js",name:"WuRadio",declaration:{name:"WuRadio",module:"src/components/radio/wu-radio.ts"}},{kind:"custom-element-definition",name:"wu-radio",declaration:{name:"WuRadio",module:"src/components/radio/wu-radio.ts"}}]},{kind:"javascript-module",path:"src/components/radio/wu-radio.ts",declarations:[{kind:"class",description:"A group of radio buttons — manages selection state and keyboard navigation.",name:"WuRadioGroup",cssProperties:[{name:"--wu-radio-group-gap",description:"Gap between radio items"}],cssParts:[{name:"group",description:"The flex container holding radio items"}],slots:[{name:"",description:"wu-radio elements"}],members:[{kind:"field",name:"orientation",description:`The name attribute applied to all child wu-radio elements */
  @property()
  name = '';

  /** Currently selected value */
  @property()
  value = '';

  /** Legend / label for the group */
  @property()
  label = '';

  /** Layout direction`,type:{text:"'vertical' | 'horizontal'"},default:"vertical",attribute:"orientation",reflects:!0}],events:[{name:"wu-change",description:"Emits when selected value changes. Detail: { value: string }",type:{text:"CustomEvent"}}],attributes:[{name:"orientation",description:`The name attribute applied to all child wu-radio elements */
  @property()
  name = '';

  /** Currently selected value */
  @property()
  value = '';

  /** Legend / label for the group */
  @property()
  label = '';

  /** Layout direction`,type:{text:"'vertical' | 'horizontal'"},default:"vertical",fieldName:"orientation"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-radio-group",customElement:!0}],exports:[{kind:"js",name:"WuRadioGroup",declaration:{name:"WuRadioGroup",module:"src/components/radio/wu-radio.ts"}},{kind:"custom-element-definition",name:"wu-radio-group",declaration:{name:"WuRadioGroup",module:"src/components/radio/wu-radio.ts"}}]},{kind:"javascript-module",path:"src/components/rating/wu-rating.ts",declarations:[{kind:"class",description:"A star rating input/display component.",name:"WuRating",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-change",description:"Fires on rating change, detail: { value: number }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-rating",customElement:!0}],exports:[{kind:"js",name:"WuRating",declaration:{name:"WuRating",module:"src/components/rating/wu-rating.ts"}},{kind:"custom-element-definition",name:"wu-rating",declaration:{name:"WuRating",module:"src/components/rating/wu-rating.ts"}}]},{kind:"javascript-module",path:"src/components/rich-text/wu-rich-text.ts",declarations:[{kind:"class",description:"A contenteditable rich text editor with a formatting toolbar.",name:"WuRichText",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-change",description:"Fires on content change, detail: { value: string (HTML), text: string (plain) }",type:{text:"CustomEvent"}},{name:"wu-focus",description:"Fires when editor gains focus",type:{text:"CustomEvent"}},{name:"wu-blur",description:"Fires when editor loses focus",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-rich-text",customElement:!0}],exports:[{kind:"js",name:"WuRichText",declaration:{name:"WuRichText",module:"src/components/rich-text/wu-rich-text.ts"}},{kind:"custom-element-definition",name:"wu-rich-text",declaration:{name:"WuRichText",module:"src/components/rich-text/wu-rich-text.ts"}}]},{kind:"javascript-module",path:"src/components/scroll-area/wu-scroll-area.ts",declarations:[{kind:"class",description:"A scroll container with styled custom scrollbars.",name:"WuScrollArea",cssProperties:[],cssParts:[],slots:[{name:"",description:"Scrollable content"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-scroll-area",customElement:!0}],exports:[{kind:"js",name:"WuScrollArea",declaration:{name:"WuScrollArea",module:"src/components/scroll-area/wu-scroll-area.ts"}},{kind:"custom-element-definition",name:"wu-scroll-area",declaration:{name:"WuScrollArea",module:"src/components/scroll-area/wu-scroll-area.ts"}}]},{kind:"javascript-module",path:"src/components/search/wu-search.ts",declarations:[{kind:"class",description:"",name:"WuSearch",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-search",customElement:!0}],exports:[{kind:"js",name:"WuSearch",declaration:{name:"WuSearch",module:"src/components/search/wu-search.ts"}},{kind:"custom-element-definition",name:"wu-search",declaration:{name:"WuSearch",module:"src/components/search/wu-search.ts"}}]},{kind:"javascript-module",path:"src/components/select/wu-select.ts",declarations:[{kind:"class",description:"A single-select dropdown component.",name:"WuSelect",cssProperties:[{name:"--wu-select-bg",description:"Background colour"},{name:"--wu-select-border",description:"Border colour"},{name:"--wu-select-border-focus",description:"Border colour when focused"}],cssParts:[{name:"base",description:"The outer wrapper"},{name:"select",description:"The native select element"}],slots:[],members:[{kind:"field",name:"options",description:`Currently selected value */
  @property()
  value = '';

  /** Array of options to render`,type:{text:"SelectOption[]"},default:"[]",attribute:"options",reflects:!1},{kind:"field",name:"size",description:`Array of options to render */
  @property({ type: Array })
  options: SelectOption[] = [];

  /** Placeholder option shown when no value is selected */
  @property()
  placeholder?: string;

  /** Visible label */
  @property()
  label?: string;

  /** Hint text */
  @property()
  hint?: string;

  /** Error message */
  @property()
  error?: string;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Required field */
  @property({ type: Boolean })
  required = false;

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",attribute:"size",reflects:!0}],events:[{name:"wu-change",description:"Emitted when the selected value changes",type:{text:"CustomEvent"}}],attributes:[{name:"options",description:`Currently selected value */
  @property()
  value = '';

  /** Array of options to render`,type:{text:"SelectOption[]"},default:"[]",fieldName:"options"},{name:"size",description:`Array of options to render */
  @property({ type: Array })
  options: SelectOption[] = [];

  /** Placeholder option shown when no value is selected */
  @property()
  placeholder?: string;

  /** Visible label */
  @property()
  label?: string;

  /** Hint text */
  @property()
  hint?: string;

  /** Error message */
  @property()
  error?: string;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Required field */
  @property({ type: Boolean })
  required = false;

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",fieldName:"size"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-select",customElement:!0}],exports:[{kind:"js",name:"WuSelect",declaration:{name:"WuSelect",module:"src/components/select/wu-select.ts"}},{kind:"custom-element-definition",name:"wu-select",declaration:{name:"WuSelect",module:"src/components/select/wu-select.ts"}}]},{kind:"javascript-module",path:"src/components/sidebar/wu-sidebar.ts",declarations:[{kind:"class",description:"A single navigation item inside `<wu-sidebar>`.",name:"WuSidebarItem",cssProperties:[{name:"--wu-sidebar-item-bg-active",description:"Background when active"},{name:"--wu-sidebar-item-color-active",description:"Text/icon colour when active"}],cssParts:[],slots:[{name:"icon",description:"Icon (SVG or img, 20×20)"},{name:"",description:"Item label text"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-sidebar-item",customElement:!0}],exports:[{kind:"js",name:"WuSidebarItem",declaration:{name:"WuSidebarItem",module:"src/components/sidebar/wu-sidebar.ts"}},{kind:"custom-element-definition",name:"wu-sidebar-item",declaration:{name:"WuSidebarItem",module:"src/components/sidebar/wu-sidebar.ts"}}]},{kind:"javascript-module",path:"src/components/sidebar/wu-sidebar.ts",declarations:[{kind:"class",description:"",name:"WuSidebar",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-sidebar",customElement:!0}],exports:[{kind:"js",name:"WuSidebar",declaration:{name:"WuSidebar",module:"src/components/sidebar/wu-sidebar.ts"}},{kind:"custom-element-definition",name:"wu-sidebar",declaration:{name:"WuSidebar",module:"src/components/sidebar/wu-sidebar.ts"}}]},{kind:"javascript-module",path:"src/components/skeleton/wu-skeleton.ts",declarations:[{kind:"class",description:"A skeleton placeholder for loading states.",name:"WuSkeleton",cssProperties:[{name:"--wu-skeleton-color",description:"Base skeleton colour"},{name:"--wu-skeleton-shimmer",description:"Shimmer highlight colour"},{name:"--wu-skeleton-speed",description:"Animation duration"}],cssParts:[],slots:[],members:[{kind:"field",name:"variant",description:"Shape variant",type:{text:"'text' | 'circle' | 'rect'"},default:"text",attribute:"variant",reflects:!0}],events:[],attributes:[{name:"variant",description:"Shape variant",type:{text:"'text' | 'circle' | 'rect'"},default:"text",fieldName:"variant"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-skeleton",customElement:!0}],exports:[{kind:"js",name:"WuSkeleton",declaration:{name:"WuSkeleton",module:"src/components/skeleton/wu-skeleton.ts"}},{kind:"custom-element-definition",name:"wu-skeleton",declaration:{name:"WuSkeleton",module:"src/components/skeleton/wu-skeleton.ts"}}]},{kind:"javascript-module",path:"src/components/slider/wu-slider.ts",declarations:[{kind:"class",description:"A range slider for selecting numeric values.",name:"WuSlider",cssProperties:[{name:"--wu-slider-track-height",description:"Height of the track"},{name:"--wu-slider-thumb-size",description:"Size of the thumb"},{name:"--wu-slider-thumb-color",description:"Colour of the thumb"},{name:"--wu-slider-track-color",description:"Colour of the unfilled track"},{name:"--wu-slider-fill-color",description:"Colour of the filled track"}],cssParts:[{name:"base",description:"The input range element"}],slots:[],members:[{kind:"field",name:"ticks",description:`Slider label */
  @property()
  label = '';

  /** Current value */
  @property({ type: Number })
  value = 0;

  /** Minimum value */
  @property({ type: Number })
  min = 0;

  /** Maximum value */
  @property({ type: Number })
  max = 100;

  /** Step increment */
  @property({ type: Number })
  step = 1;

  /** Show current value next to label */
  @property({ type: Boolean, attribute: 'show-value' })
  showValue = false;

  /** Hint text below the slider */
  @property()
  hint = '';

  /** Show tick marks at min/max (and intermediate marks if ticks provided)`,type:{text:"number[]"},default:"[]",attribute:"ticks",reflects:!1}],events:[{name:"wu-change",description:"Emitted on value change. Detail: { value: number }",type:{text:"CustomEvent"}},{name:"wu-input",description:"Emitted on every input (during drag). Detail: { value: number }",type:{text:"CustomEvent"}}],attributes:[{name:"ticks",description:`Slider label */
  @property()
  label = '';

  /** Current value */
  @property({ type: Number })
  value = 0;

  /** Minimum value */
  @property({ type: Number })
  min = 0;

  /** Maximum value */
  @property({ type: Number })
  max = 100;

  /** Step increment */
  @property({ type: Number })
  step = 1;

  /** Show current value next to label */
  @property({ type: Boolean, attribute: 'show-value' })
  showValue = false;

  /** Hint text below the slider */
  @property()
  hint = '';

  /** Show tick marks at min/max (and intermediate marks if ticks provided)`,type:{text:"number[]"},default:"[]",fieldName:"ticks"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-slider",customElement:!0}],exports:[{kind:"js",name:"WuSlider",declaration:{name:"WuSlider",module:"src/components/slider/wu-slider.ts"}},{kind:"custom-element-definition",name:"wu-slider",declaration:{name:"WuSlider",module:"src/components/slider/wu-slider.ts"}}]},{kind:"javascript-module",path:"src/components/sortable/wu-sortable.ts",declarations:[{kind:"class",description:"Drag-and-drop sortable list.",name:"WuSortable",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-sort",description:"Fires after reorder, detail: { items: unknown[], from: number, to: number }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-sortable",customElement:!0}],exports:[{kind:"js",name:"WuSortable",declaration:{name:"WuSortable",module:"src/components/sortable/wu-sortable.ts"}},{kind:"custom-element-definition",name:"wu-sortable",declaration:{name:"WuSortable",module:"src/components/sortable/wu-sortable.ts"}}]},{kind:"javascript-module",path:"src/components/speed-dial/wu-speed-dial.ts",declarations:[{kind:"class",description:"A FAB with expanding action buttons (speed dial).",name:"WuSpeedDial",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-action-click",description:"Fires on action click, detail: { value: string }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-speed-dial",customElement:!0}],exports:[{kind:"js",name:"WuSpeedDial",declaration:{name:"WuSpeedDial",module:"src/components/speed-dial/wu-speed-dial.ts"}},{kind:"custom-element-definition",name:"wu-speed-dial",declaration:{name:"WuSpeedDial",module:"src/components/speed-dial/wu-speed-dial.ts"}}]},{kind:"javascript-module",path:"src/components/spinner/wu-spinner.ts",declarations:[{kind:"class",description:"An animated loading spinner.",name:"WuSpinner",cssProperties:[{name:"--wu-spinner-size",description:"Spinner diameter"},{name:"--wu-spinner-color",description:"Active arc colour"},{name:"--wu-spinner-track",description:"Track ring colour"},{name:"--wu-spinner-thickness",description:"Border/arc thickness"},{name:"--wu-spinner-speed",description:"Animation duration"}],cssParts:[],slots:[],members:[{kind:"field",name:"size",description:"Size variant",type:{text:"'sm' | 'md' | 'lg'"},default:"md",attribute:"size",reflects:!0}],events:[],attributes:[{name:"size",description:"Size variant",type:{text:"'sm' | 'md' | 'lg'"},default:"md",fieldName:"size"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-spinner",customElement:!0}],exports:[{kind:"js",name:"WuSpinner",declaration:{name:"WuSpinner",module:"src/components/spinner/wu-spinner.ts"}},{kind:"custom-element-definition",name:"wu-spinner",declaration:{name:"WuSpinner",module:"src/components/spinner/wu-spinner.ts"}}]},{kind:"javascript-module",path:"src/components/split-pane/wu-split-pane.ts",declarations:[{kind:"class",description:"A resizable split panel layout.",name:"WuSplitPane",cssProperties:[],cssParts:[],slots:[{name:"primary",description:"Primary (fixed) panel"},{name:"secondary",description:"Secondary (flex) panel"}],members:[],events:[{name:"wu-resize",description:"Fires during drag, detail: { position: number }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-split-pane",customElement:!0}],exports:[{kind:"js",name:"WuSplitPane",declaration:{name:"WuSplitPane",module:"src/components/split-pane/wu-split-pane.ts"}},{kind:"custom-element-definition",name:"wu-split-pane",declaration:{name:"WuSplitPane",module:"src/components/split-pane/wu-split-pane.ts"}}]},{kind:"javascript-module",path:"src/components/stat/wu-stat.ts",declarations:[{kind:"class",description:"A metric/KPI display card.",name:"WuStat",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-stat",customElement:!0}],exports:[{kind:"js",name:"WuStat",declaration:{name:"WuStat",module:"src/components/stat/wu-stat.ts"}},{kind:"custom-element-definition",name:"wu-stat",declaration:{name:"WuStat",module:"src/components/stat/wu-stat.ts"}}]},{kind:"javascript-module",path:"src/components/stepper/wu-stepper.ts",declarations:[{kind:"class",description:"An individual step within a wu-stepper.",name:"WuStep",cssProperties:[{name:"--wu-stepper-indicator-size",description:"Size of the step indicator circle"}],cssParts:[],slots:[],members:[{kind:"field",name:"status",description:`Step label */
  @property()
  label = '';

  /** Optional description text */
  @property()
  description = '';

  /** Step status`,type:{text:"'pending' | 'active' | 'complete' | 'error'"},default:"pending",attribute:"status",reflects:!0}],events:[],attributes:[{name:"status",description:`Step label */
  @property()
  label = '';

  /** Optional description text */
  @property()
  description = '';

  /** Step status`,type:{text:"'pending' | 'active' | 'complete' | 'error'"},default:"pending",fieldName:"status"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-step",customElement:!0}],exports:[{kind:"js",name:"WuStep",declaration:{name:"WuStep",module:"src/components/stepper/wu-stepper.ts"}},{kind:"custom-element-definition",name:"wu-step",declaration:{name:"WuStep",module:"src/components/stepper/wu-stepper.ts"}}]},{kind:"javascript-module",path:"src/components/stepper/wu-stepper.ts",declarations:[{kind:"class",description:"A stepper component for multi-step processes.",name:"WuStepper",cssProperties:[{name:"--wu-stepper-connector-color",description:"Connector line color"},{name:"--wu-stepper-connector-active",description:"Active connector color"}],cssParts:[],slots:[{name:"",description:"wu-step elements"}],members:[],events:[{name:"wu-step-change",description:"Emitted when the active step changes. Detail: `{ step: number }`",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-stepper",customElement:!0}],exports:[{kind:"js",name:"WuStepper",declaration:{name:"WuStepper",module:"src/components/stepper/wu-stepper.ts"}},{kind:"custom-element-definition",name:"wu-stepper",declaration:{name:"WuStepper",module:"src/components/stepper/wu-stepper.ts"}}]},{kind:"javascript-module",path:"src/components/switch/wu-switch.ts",declarations:[{kind:"class",description:"",name:"WuSwitch",cssProperties:[],cssParts:[],slots:[],members:[{kind:"field",name:"labelPosition",description:`Whether the switch is on */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Label text */
  @property()
  label?: string;

  /** Label position relative to the track`,type:{text:"'start' | 'end'"},default:"end",attribute:"label-position",reflects:!1},{kind:"field",name:"size",description:`Whether the switch is on */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Label text */
  @property()
  label?: string;

  /** Label position relative to the track */
  @property({ attribute: 'label-position' })
  labelPosition: 'start' | 'end' = 'end';

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",attribute:"size",reflects:!0}],events:[],attributes:[{name:"label-position",description:`Whether the switch is on */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Label text */
  @property()
  label?: string;

  /** Label position relative to the track`,type:{text:"'start' | 'end'"},default:"end",fieldName:"labelPosition"},{name:"size",description:`Whether the switch is on */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Label text */
  @property()
  label?: string;

  /** Label position relative to the track */
  @property({ attribute: 'label-position' })
  labelPosition: 'start' | 'end' = 'end';

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",fieldName:"size"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-switch",customElement:!0}],exports:[{kind:"js",name:"WuSwitch",declaration:{name:"WuSwitch",module:"src/components/switch/wu-switch.ts"}},{kind:"custom-element-definition",name:"wu-switch",declaration:{name:"WuSwitch",module:"src/components/switch/wu-switch.ts"}}]},{kind:"javascript-module",path:"src/components/table/wu-table.ts",declarations:[{kind:"class",description:"A data table component with sortable columns, row selection, and sticky header.",name:"WuTable",cssProperties:[{name:"--wu-table-border",description:"Border color"},{name:"--wu-table-header-bg",description:"Header background color"},{name:"--wu-table-row-hover-bg",description:"Row hover background"},{name:"--wu-table-row-selected-bg",description:"Selected row background"}],cssParts:[{name:"base",description:"The scrollable wrapper"},{name:"table",description:"The table element"}],slots:[],members:[{kind:"field",name:"columns",description:"Column definitions",type:{text:"WuTableColumn[]"},default:"[]",attribute:"columns",reflects:!1},{kind:"field",name:"data",description:`Column definitions */
  @property({ type: Array })
  columns: WuTableColumn[] = [];

  /** Row data — each item must have a unique \`id\` field`,type:{text:"Record<string, unknown>[]"},default:"[]",attribute:"data",reflects:!1},{kind:"field",name:"sortDirection",description:`Column definitions */
  @property({ type: Array })
  columns: WuTableColumn[] = [];

  /** Row data — each item must have a unique \`id\` field */
  @property({ type: Array })
  data: Record<string, unknown>[] = [];

  /** Allow row selection via checkboxes */
  @property({ type: Boolean, attribute: 'selectable' })
  selectable = false;

  /** Currently sorted column key */
  @property({ attribute: 'sort-key' })
  sortKey = '';

  /** Current sort direction`,type:{text:"'asc' | 'desc'"},default:"asc",attribute:"sort-direction",reflects:!1}],events:[{name:"wu-sort",description:"Emitted when a sortable column header is clicked. Detail: `{ key, direction }`",type:{text:"CustomEvent"}},{name:"wu-select",description:"Emitted when row selection changes. Detail: `{ selected: string[] }`",type:{text:"CustomEvent"}}],attributes:[{name:"columns",description:"Column definitions",type:{text:"WuTableColumn[]"},default:"[]",fieldName:"columns"},{name:"data",description:`Column definitions */
  @property({ type: Array })
  columns: WuTableColumn[] = [];

  /** Row data — each item must have a unique \`id\` field`,type:{text:"Record<string, unknown>[]"},default:"[]",fieldName:"data"},{name:"sort-direction",description:`Column definitions */
  @property({ type: Array })
  columns: WuTableColumn[] = [];

  /** Row data — each item must have a unique \`id\` field */
  @property({ type: Array })
  data: Record<string, unknown>[] = [];

  /** Allow row selection via checkboxes */
  @property({ type: Boolean, attribute: 'selectable' })
  selectable = false;

  /** Currently sorted column key */
  @property({ attribute: 'sort-key' })
  sortKey = '';

  /** Current sort direction`,type:{text:"'asc' | 'desc'"},default:"asc",fieldName:"sortDirection"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-table",customElement:!0}],exports:[{kind:"js",name:"WuTable",declaration:{name:"WuTable",module:"src/components/table/wu-table.ts"}},{kind:"custom-element-definition",name:"wu-table",declaration:{name:"WuTable",module:"src/components/table/wu-table.ts"}}]},{kind:"javascript-module",path:"src/components/tabs/wu-tabs.ts",declarations:[{kind:"class",description:"A single tab button inside `<wu-tabs>`.",name:"WuTab",cssProperties:[{name:"--wu-tab-color",description:"Tab text colour"},{name:"--wu-tab-color-active",description:"Active tab colour"}],cssParts:[],slots:[{name:"",description:"Tab label"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-tab",customElement:!0}],exports:[{kind:"js",name:"WuTab",declaration:{name:"WuTab",module:"src/components/tabs/wu-tabs.ts"}},{kind:"custom-element-definition",name:"wu-tab",declaration:{name:"WuTab",module:"src/components/tabs/wu-tabs.ts"}}]},{kind:"javascript-module",path:"src/components/tabs/wu-tabs.ts",declarations:[{kind:"class",description:"Disabled state */",name:"WuTabPanel",cssProperties:[],cssParts:[],slots:[{name:"",description:"Panel content"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-tab-panel",customElement:!0}],exports:[{kind:"js",name:"WuTabPanel",declaration:{name:"WuTabPanel",module:"src/components/tabs/wu-tabs.ts"}},{kind:"custom-element-definition",name:"wu-tab-panel",declaration:{name:"WuTabPanel",module:"src/components/tabs/wu-tabs.ts"}}]},{kind:"javascript-module",path:"src/components/tabs/wu-tabs.ts",declarations:[{kind:"class",description:"ID matching the `panel` attribute on `<wu-tab>` */",name:"WuTabs",cssProperties:[{name:"--wu-tabs-border",description:"Tab list border colour"},{name:"--wu-tab-indicator",description:"Active tab indicator colour"}],cssParts:[],slots:[{name:"",description:"Place `<wu-tab>` and `<wu-tab-panel>` elements here"}],members:[{kind:"field",name:"orientation",description:"Orientation of the tab list",type:{text:"'horizontal' | 'vertical'"},default:"horizontal",attribute:"orientation",reflects:!0}],events:[{name:"wu-tab-change",description:"Emitted when the active tab changes ({ panel: string })",type:{text:"CustomEvent"}}],attributes:[{name:"orientation",description:"Orientation of the tab list",type:{text:"'horizontal' | 'vertical'"},default:"horizontal",fieldName:"orientation"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-tabs",customElement:!0}],exports:[{kind:"js",name:"WuTabs",declaration:{name:"WuTabs",module:"src/components/tabs/wu-tabs.ts"}},{kind:"custom-element-definition",name:"wu-tabs",declaration:{name:"WuTabs",module:"src/components/tabs/wu-tabs.ts"}}]},{kind:"javascript-module",path:"src/components/tag/wu-tag.ts",declarations:[{kind:"class",description:"A dismissible tag/chip for labelling.",name:"WuTag",cssProperties:[],cssParts:[],slots:[{name:"",description:"Tag label content"}],members:[],events:[{name:"wu-dismiss",description:"Fires when dismiss button clicked",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-tag",customElement:!0}],exports:[{kind:"js",name:"WuTag",declaration:{name:"WuTag",module:"src/components/tag/wu-tag.ts"}},{kind:"custom-element-definition",name:"wu-tag",declaration:{name:"WuTag",module:"src/components/tag/wu-tag.ts"}}]},{kind:"javascript-module",path:"src/components/tag-input/wu-tag-input.ts",declarations:[{kind:"class",description:"A tag/chip input field that allows creating tags by pressing Enter or comma.",name:"WuTagInput",cssProperties:[{name:"--wu-tag-input-bg",description:"Container background"}],cssParts:[],slots:[],members:[],events:[{name:"wu-change",description:"Fires when tags change, detail: { values: string[] }",type:{text:"CustomEvent"}},{name:"wu-add",description:"Fires when a tag is added, detail: { value: string }",type:{text:"CustomEvent"}},{name:"wu-remove",description:"Fires when a tag is removed, detail: { value: string }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-tag-input",customElement:!0}],exports:[{kind:"js",name:"WuTagInput",declaration:{name:"WuTagInput",module:"src/components/tag-input/wu-tag-input.ts"}},{kind:"custom-element-definition",name:"wu-tag-input",declaration:{name:"WuTagInput",module:"src/components/tag-input/wu-tag-input.ts"}}]},{kind:"javascript-module",path:"src/components/textarea/wu-textarea.ts",declarations:[{kind:"class",description:"A multi-line text input component.",name:"WuTextarea",cssProperties:[{name:"--wu-textarea-bg",description:"Background colour"},{name:"--wu-textarea-border",description:"Border colour"},{name:"--wu-textarea-border-focus",description:"Border colour when focused"},{name:"--wu-textarea-min-height",description:"Minimum height"}],cssParts:[{name:"base",description:"The outer wrapper"},{name:"textarea",description:"The native textarea element"}],slots:[],members:[],events:[{name:"wu-change",description:"Emitted when the value changes",type:{text:"CustomEvent"}},{name:"wu-blur",description:"Emitted when the textarea loses focus",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-textarea",customElement:!0}],exports:[{kind:"js",name:"WuTextarea",declaration:{name:"WuTextarea",module:"src/components/textarea/wu-textarea.ts"}},{kind:"custom-element-definition",name:"wu-textarea",declaration:{name:"WuTextarea",module:"src/components/textarea/wu-textarea.ts"}}]},{kind:"javascript-module",path:"src/components/time-picker/wu-time-picker.ts",declarations:[{kind:"class",description:"A time picker with hour/minute dropdowns and optional AM/PM.",name:"WuTimePicker",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-change",description:"Fires on time change, detail: { value: string (HH:MM) }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-time-picker",customElement:!0}],exports:[{kind:"js",name:"WuTimePicker",declaration:{name:"WuTimePicker",module:"src/components/time-picker/wu-time-picker.ts"}},{kind:"custom-element-definition",name:"wu-time-picker",declaration:{name:"WuTimePicker",module:"src/components/time-picker/wu-time-picker.ts"}}]},{kind:"javascript-module",path:"src/components/timeline/wu-timeline.ts",declarations:[{kind:"class",description:"Timeline container.",name:"WuTimeline",cssProperties:[],cssParts:[],slots:[{name:"",description:"wu-timeline-item elements"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-timeline",customElement:!0}],exports:[{kind:"js",name:"WuTimeline",declaration:{name:"WuTimeline",module:"src/components/timeline/wu-timeline.ts"}},{kind:"custom-element-definition",name:"wu-timeline",declaration:{name:"WuTimeline",module:"src/components/timeline/wu-timeline.ts"}}]},{kind:"javascript-module",path:"src/components/timeline/wu-timeline.ts",declarations:[{kind:"class",description:"Timeline container.",name:"WuTimelineItem",cssProperties:[],cssParts:[],slots:[{name:"",description:"wu-timeline-item elements"},{name:"",description:"Body content"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-timeline-item",customElement:!0}],exports:[{kind:"js",name:"WuTimelineItem",declaration:{name:"WuTimelineItem",module:"src/components/timeline/wu-timeline.ts"}},{kind:"custom-element-definition",name:"wu-timeline-item",declaration:{name:"WuTimelineItem",module:"src/components/timeline/wu-timeline.ts"}}]},{kind:"javascript-module",path:"src/components/toast/wu-toast.ts",declarations:[{kind:"class",description:"A single toast notification.",name:"WuToast",cssProperties:[{name:"--wu-toast-bg",description:"Toast background colour"},{name:"--wu-toast-min-width",description:"Minimum toast width"}],cssParts:[],slots:[{name:"",description:"Toast message content"},{name:"action",description:"Optional action button/link"}],members:[{kind:"field",name:"variant",description:"Visual severity variant",type:{text:"'default' | 'info' | 'success' | 'warning' | 'danger'"},default:"default",attribute:"variant",reflects:!0}],events:[{name:"wu-close",description:"Emitted when the toast is dismissed",type:{text:"CustomEvent"}}],attributes:[{name:"variant",description:"Visual severity variant",type:{text:"'default' | 'info' | 'success' | 'warning' | 'danger'"},default:"default",fieldName:"variant"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-toast",customElement:!0}],exports:[{kind:"js",name:"WuToast",declaration:{name:"WuToast",module:"src/components/toast/wu-toast.ts"}},{kind:"custom-element-definition",name:"wu-toast",declaration:{name:"WuToast",module:"src/components/toast/wu-toast.ts"}}]},{kind:"javascript-module",path:"src/components/toast/wu-toast.ts",declarations:[{kind:"class",description:"A container that manages toast stack position and dismissal.",name:"WuToastProvider",cssProperties:[],cssParts:[],slots:[],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-toast-provider",customElement:!0}],exports:[{kind:"js",name:"WuToastProvider",declaration:{name:"WuToastProvider",module:"src/components/toast/wu-toast.ts"}},{kind:"custom-element-definition",name:"wu-toast-provider",declaration:{name:"WuToastProvider",module:"src/components/toast/wu-toast.ts"}}]},{kind:"javascript-module",path:"src/components/toggle/wu-toggle.ts",declarations:[{kind:"class",description:"A toggle switch component for boolean on/off states.",name:"WuToggle",cssProperties:[{name:"--wu-toggle-width",description:"Track width"},{name:"--wu-toggle-height",description:"Track height"},{name:"--wu-toggle-on-bg",description:"Track colour when on"},{name:"--wu-toggle-off-bg",description:"Track colour when off"},{name:"--wu-toggle-thumb-size",description:"Thumb diameter"}],cssParts:[{name:"base",description:"The outer wrapper"},{name:"track",description:"The toggle track element"},{name:"thumb",description:"The toggle thumb (knob)"},{name:"label",description:"The label element"}],slots:[],members:[{kind:"field",name:"labelPosition",description:`Whether the toggle is on */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Label text */
  @property()
  label?: string;

  /** Label position`,type:{text:"'start' | 'end'"},default:"end",attribute:"label-position",reflects:!1},{kind:"field",name:"size",description:`Whether the toggle is on */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Label text */
  @property()
  label?: string;

  /** Label position */
  @property({ attribute: 'label-position' })
  labelPosition: 'start' | 'end' = 'end';

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",attribute:"size",reflects:!0}],events:[{name:"wu-change",description:"Emitted when the toggle state changes",type:{text:"CustomEvent"}}],attributes:[{name:"label-position",description:`Whether the toggle is on */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Label text */
  @property()
  label?: string;

  /** Label position`,type:{text:"'start' | 'end'"},default:"end",fieldName:"labelPosition"},{name:"size",description:`Whether the toggle is on */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Label text */
  @property()
  label?: string;

  /** Label position */
  @property({ attribute: 'label-position' })
  labelPosition: 'start' | 'end' = 'end';

  /** Size variant`,type:{text:"'sm' | 'md' | 'lg'"},default:"md",fieldName:"size"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-toggle",customElement:!0}],exports:[{kind:"js",name:"WuToggle",declaration:{name:"WuToggle",module:"src/components/toggle/wu-toggle.ts"}},{kind:"custom-element-definition",name:"wu-toggle",declaration:{name:"WuToggle",module:"src/components/toggle/wu-toggle.ts"}}]},{kind:"javascript-module",path:"src/components/tooltip/wu-tooltip.ts",declarations:[{kind:"class",description:"A tooltip that displays contextual text on hover or focus.",name:"WuTooltip",cssProperties:[{name:"--wu-tooltip-bg",description:"Tooltip background colour"},{name:"--wu-tooltip-color",description:"Tooltip text colour"},{name:"--wu-tooltip-delay",description:"Opening delay"},{name:"--wu-tooltip-max-width",description:"Max tooltip width"}],cssParts:[],slots:[{name:"",description:"The trigger element that activates the tooltip"}],members:[{kind:"field",name:"placement",description:`Tooltip text content */
  @property()
  content = '';

  /** Placement relative to trigger`,type:{text:"'top' | 'bottom' | 'left' | 'right'"},default:"top",attribute:"placement",reflects:!0}],events:[],attributes:[{name:"placement",description:`Tooltip text content */
  @property()
  content = '';

  /** Placement relative to trigger`,type:{text:"'top' | 'bottom' | 'left' | 'right'"},default:"top",fieldName:"placement"}],superclass:{name:"LitElement",package:"lit"},tagName:"wu-tooltip",customElement:!0}],exports:[{kind:"js",name:"WuTooltip",declaration:{name:"WuTooltip",module:"src/components/tooltip/wu-tooltip.ts"}},{kind:"custom-element-definition",name:"wu-tooltip",declaration:{name:"WuTooltip",module:"src/components/tooltip/wu-tooltip.ts"}}]},{kind:"javascript-module",path:"src/components/tree/wu-tree.ts",declarations:[{kind:"class",description:"Tree container component.",name:"WuTree",cssProperties:[],cssParts:[],slots:[{name:"",description:"wu-tree-item children"}],members:[],events:[],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-tree",customElement:!0}],exports:[{kind:"js",name:"WuTree",declaration:{name:"WuTree",module:"src/components/tree/wu-tree.ts"}},{kind:"custom-element-definition",name:"wu-tree",declaration:{name:"WuTree",module:"src/components/tree/wu-tree.ts"}}]},{kind:"javascript-module",path:"src/components/tree/wu-tree.ts",declarations:[{kind:"class",description:"Tree container component.",name:"WuTreeItem",cssProperties:[],cssParts:[],slots:[{name:"",description:"wu-tree-item children"},{name:"",description:"Child wu-tree-item elements"}],members:[],events:[{name:"wu-select",description:"Fires when selected, detail: { label: string }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-tree-item",customElement:!0}],exports:[{kind:"js",name:"WuTreeItem",declaration:{name:"WuTreeItem",module:"src/components/tree/wu-tree.ts"}},{kind:"custom-element-definition",name:"wu-tree-item",declaration:{name:"WuTreeItem",module:"src/components/tree/wu-tree.ts"}}]},{kind:"javascript-module",path:"src/components/video/wu-video.ts",declarations:[{kind:"class",description:"Video player with custom controls.",name:"WuVideo",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-play",description:"Fires when video starts playing",type:{text:"CustomEvent"}},{name:"wu-pause",description:"Fires when video pauses",type:{text:"CustomEvent"}},{name:"wu-ended",description:"Fires when video ends",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-video",customElement:!0}],exports:[{kind:"js",name:"WuVideo",declaration:{name:"WuVideo",module:"src/components/video/wu-video.ts"}},{kind:"custom-element-definition",name:"wu-video",declaration:{name:"WuVideo",module:"src/components/video/wu-video.ts"}}]},{kind:"javascript-module",path:"src/components/virtual-list/wu-virtual-list.ts",declarations:[{kind:"class",description:"Virtual scrolling list — only renders visible items.",name:"WuVirtualList",cssProperties:[],cssParts:[],slots:[],members:[],events:[{name:"wu-visible-change",description:"Fires when visible range changes, detail: { start: number, end: number }",type:{text:"CustomEvent"}}],attributes:[],superclass:{name:"LitElement",package:"lit"},tagName:"wu-virtual-list",customElement:!0}],exports:[{kind:"js",name:"WuVirtualList",declaration:{name:"WuVirtualList",module:"src/components/virtual-list/wu-virtual-list.ts"}},{kind:"custom-element-definition",name:"wu-virtual-list",declaration:{name:"WuVirtualList",module:"src/components/virtual-list/wu-virtual-list.ts"}}]}],c={schemaVersion:o,readme:i,modules:r};a(c);const b={parameters:{backgrounds:{disable:!0},controls:{matchers:{color:/^(?!--).*?(background|[Cc]olor)$/,date:/Date$/i}},docs:{story:{inline:!0}},a11y:{element:"#storybook-root",config:{},options:{},manual:!1}},globalTypes:{theme:{name:"Theme",description:"WeldUI theme",defaultValue:"default",toolbar:{icon:"paintbrush",items:[{value:"default",title:"Default Light"},{value:"default-dark",title:"Default Dark"},{value:"ocean",title:"Ocean"},{value:"ocean-dark",title:"Ocean Dark"},{value:"forest",title:"Forest"},{value:"midnight",title:"Midnight"}],showName:!0}}},decorators:[(e,t)=>{const n=t.globals.theme||"default";return s`<div data-theme="${n}" style="padding: 1rem; background: var(--wu-color-background); min-height: 100vh;">${e()}</div>`}]};export{b as default};
