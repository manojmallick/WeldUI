// ── Phase 1: Foundation Components ─────────────────────────────────────────
export { WuButton } from './components/button/wu-button.js';
export { WuBadge } from './components/badge/wu-badge.js';
export { WuAvatar } from './components/avatar/wu-avatar.js';
export { WuInput } from './components/input/wu-input.js';
export { WuTextarea } from './components/textarea/wu-textarea.js';
export { WuSelect } from './components/select/wu-select.js';
export { WuCheckbox } from './components/checkbox/wu-checkbox.js';
export { WuToggle } from './components/toggle/wu-toggle.js';

// ── Phase 3A: Simple Complex Components ────────────────────────────────────
export { WuCard } from './components/card/wu-card.js';
export { WuModal } from './components/modal/wu-modal.js';
export { WuAlert } from './components/alert/wu-alert.js';
export { WuSpinner } from './components/spinner/wu-spinner.js';
export { WuProgress } from './components/progress/wu-progress.js';
export { WuSkeleton } from './components/skeleton/wu-skeleton.js';
export { WuDivider } from './components/divider/wu-divider.js';
export { WuTooltip } from './components/tooltip/wu-tooltip.js';
export { WuPopover } from './components/popover/wu-popover.js';
export { WuToast, WuToastProvider } from './components/toast/wu-toast.js';

// ── Phase 3C: Advanced Complex Components ──────────────────────────────────
export { WuTabs, WuTab, WuTabPanel } from './components/tabs/wu-tabs.js';
export { WuAccordion, WuAccordionItem } from './components/accordion/wu-accordion.js';
export { WuBreadcrumb } from './components/breadcrumb/wu-breadcrumb.js';
export { WuPagination } from './components/pagination/wu-pagination.js';
export { WuTable } from './components/table/wu-table.js';
export type { WuTableColumn } from './components/table/wu-table.js';
export { WuDatePicker } from './components/date-picker/wu-date-picker.js';
export { WuFileUpload } from './components/file-upload/wu-file-upload.js';
export { WuStepper, WuStep } from './components/stepper/wu-stepper.js';
export { WuCommand } from './components/command/wu-command.js';
export type { WuCommandItem } from './components/command/wu-command.js';
export { WuDataGrid } from './components/data-grid/wu-data-grid.js';
export type { WuDataGridColumn } from './components/data-grid/wu-data-grid.js';

// ── Phase 4: Compound Components ────────────────────────────────────────────
export { WuNavbar } from './components/navbar/wu-navbar.js';
export { WuSidebar, WuSidebarItem } from './components/sidebar/wu-sidebar.js';
export { WuForm } from './components/form/wu-form.js';
export { WuDashboard } from './components/dashboard/wu-dashboard.js';
export { WuEmptyState } from './components/empty-state/wu-empty-state.js';
export { WuErrorPage } from './components/error-page/wu-error-page.js';
export { WuSearch } from './components/search/wu-search.js';
export type { SuggestionItem } from './components/search/wu-search.js';
export { WuDataTable } from './components/data-table/wu-data-table.js';
export type { WuDataTableColumn } from './components/data-table/wu-data-table.js';

// Types
export type * from './types/index.js';

// ── Side-effects: register all custom elements ──────────────────────────────
// Phase 1
import './components/button/wu-button.js';
import './components/badge/wu-badge.js';
import './components/avatar/wu-avatar.js';
import './components/input/wu-input.js';
import './components/textarea/wu-textarea.js';
import './components/select/wu-select.js';
import './components/checkbox/wu-checkbox.js';
import './components/toggle/wu-toggle.js';
// Phase 3A
import './components/card/wu-card.js';
import './components/modal/wu-modal.js';
import './components/alert/wu-alert.js';
import './components/spinner/wu-spinner.js';
import './components/progress/wu-progress.js';
import './components/skeleton/wu-skeleton.js';
import './components/divider/wu-divider.js';
import './components/tooltip/wu-tooltip.js';
import './components/popover/wu-popover.js';
import './components/toast/wu-toast.js';
// Phase 3C
import './components/tabs/wu-tabs.js';
import './components/accordion/wu-accordion.js';
import './components/breadcrumb/wu-breadcrumb.js';
import './components/pagination/wu-pagination.js';
import './components/table/wu-table.js';
import './components/date-picker/wu-date-picker.js';
import './components/file-upload/wu-file-upload.js';
import './components/stepper/wu-stepper.js';
import './components/command/wu-command.js';
import './components/data-grid/wu-data-grid.js';
// Phase 4
import './components/navbar/wu-navbar.js';
import './components/sidebar/wu-sidebar.js';
import './components/form/wu-form.js';
import './components/dashboard/wu-dashboard.js';
import './components/empty-state/wu-empty-state.js';
import './components/error-page/wu-error-page.js';
import './components/search/wu-search.js';
import './components/data-table/wu-data-table.js';

// ── Phase 5: Form Primitives ────────────────────────────────────────────────
export { WuRadioGroup, WuRadio } from './components/radio/wu-radio.js';
export { WuSlider } from './components/slider/wu-slider.js';
export { WuColorPicker } from './components/color-picker/wu-color-picker.js';
export { WuRating } from './components/rating/wu-rating.js';
export { WuSwitch } from './components/switch/wu-switch.js';
export { WuPinInput } from './components/pin-input/wu-pin-input.js';
export { WuCombobox } from './components/combobox/wu-combobox.js';
export type { ComboboxOption } from './components/combobox/wu-combobox.js';
export { WuTagInput } from './components/tag-input/wu-tag-input.js';
export { WuNumber as WuNumberInput } from './components/number/wu-number.js';
export { WuMultiSelect } from './components/multi-select/wu-multi-select.js';
export type { MultiSelectOption } from './components/multi-select/wu-multi-select.js';

// ── Phase 6: Data Display ───────────────────────────────────────────────────
export { WuStat } from './components/stat/wu-stat.js';
export { WuTimeline, WuTimelineItem } from './components/timeline/wu-timeline.js';
export { WuTag } from './components/tag/wu-tag.js';
export { WuKbd } from './components/kbd/wu-kbd.js';
export { WuCode } from './components/code/wu-code.js';
export { WuCopyButton } from './components/copy-button/wu-copy-button.js';
export { WuCarousel } from './components/carousel/wu-carousel.js';
export { WuList, WuListItem } from './components/list/wu-list.js';
export { WuDl, WuDt, WuDd } from './components/description-list/wu-dl.js';
export { WuCallout } from './components/callout/wu-callout.js';
export { WuMeter } from './components/meter/wu-meter.js';
export { WuCollapse } from './components/collapse/wu-collapse.js';

// ── Phase 7: Nav & Overlays ─────────────────────────────────────────────────
export { WuDrawer } from './components/drawer/wu-drawer.js';
export { WuContextMenu } from './components/context-menu/wu-context-menu.js';
export type { ContextMenuItem } from './components/context-menu/wu-context-menu.js';
export { WuDropdown } from './components/dropdown/wu-dropdown.js';
export type { DropdownItem } from './components/dropdown/wu-dropdown.js';
export { WuTree, WuTreeItem } from './components/tree/wu-tree.js';
export { WuBottomNav, WuBottomNavItem } from './components/bottom-nav/wu-bottom-nav.js';
export { WuMegaMenu } from './components/mega-menu/wu-mega-menu.js';
export { WuNotificationCenter } from './components/notification-center/wu-notification-center.js';
export type { Notification } from './components/notification-center/wu-notification-center.js';
export { WuScrollArea } from './components/scroll-area/wu-scroll-area.js';
export { WuSplitPane } from './components/split-pane/wu-split-pane.js';
export { WuSpeedDial } from './components/speed-dial/wu-speed-dial.js';
export type { SpeedDialAction } from './components/speed-dial/wu-speed-dial.js';

// ── Phase 9: Rich Media ─────────────────────────────────────────────────────
export { WuLightbox } from './components/lightbox/wu-lightbox.js';
export type { LightboxImage } from './components/lightbox/wu-lightbox.js';
export { WuGallery } from './components/gallery/wu-gallery.js';
export type { GalleryImage } from './components/gallery/wu-gallery.js';
export { WuVirtualList } from './components/virtual-list/wu-virtual-list.js';
export { WuSortable } from './components/sortable/wu-sortable.js';
export { WuKanban, WuKanbanColumn } from './components/kanban/wu-kanban.js';
export type { KanbanCard, KanbanColumnData } from './components/kanban/wu-kanban.js';
export { WuMention } from './components/mention/wu-mention.js';
export type { MentionUser } from './components/mention/wu-mention.js';
export { WuQrCode } from './components/qr-code/wu-qr-code.js';
export { WuVideo } from './components/video/wu-video.js';

// ── v3.0: Layout & Structure (§3.1) ────────────────────────────────────────
export { WuContainer } from './components/container/wu-container.js';
export { WuStack } from './components/stack/wu-stack.js';
export { WuCluster } from './components/cluster/wu-cluster.js';
export { WuGrid } from './components/grid/wu-grid.js';

// Phase 5 side-effects
import './components/radio/wu-radio.js';
import './components/slider/wu-slider.js';
import './components/color-picker/wu-color-picker.js';
import './components/rating/wu-rating.js';
import './components/switch/wu-switch.js';
import './components/pin-input/wu-pin-input.js';
import './components/combobox/wu-combobox.js';
import './components/tag-input/wu-tag-input.js';
import './components/number/wu-number.js';
import './components/multi-select/wu-multi-select.js';
// Phase 6 side-effects
import './components/stat/wu-stat.js';
import './components/timeline/wu-timeline.js';
import './components/tag/wu-tag.js';
import './components/kbd/wu-kbd.js';
import './components/code/wu-code.js';
import './components/copy-button/wu-copy-button.js';
import './components/carousel/wu-carousel.js';
import './components/list/wu-list.js';
import './components/description-list/wu-dl.js';
import './components/callout/wu-callout.js';
import './components/meter/wu-meter.js';
import './components/collapse/wu-collapse.js';
// Phase 7 side-effects
import './components/drawer/wu-drawer.js';
import './components/context-menu/wu-context-menu.js';
import './components/dropdown/wu-dropdown.js';
import './components/tree/wu-tree.js';
import './components/bottom-nav/wu-bottom-nav.js';
import './components/mega-menu/wu-mega-menu.js';
import './components/notification-center/wu-notification-center.js';
import './components/scroll-area/wu-scroll-area.js';
import './components/split-pane/wu-split-pane.js';
import './components/speed-dial/wu-speed-dial.js';
// Phase 9 side-effects
import './components/lightbox/wu-lightbox.js';
import './components/gallery/wu-gallery.js';
import './components/virtual-list/wu-virtual-list.js';
import './components/sortable/wu-sortable.js';
import './components/kanban/wu-kanban.js';
import './components/mention/wu-mention.js';
import './components/qr-code/wu-qr-code.js';
import './components/video/wu-video.js';
// v3.0 Layout side-effects
import './components/container/wu-container.js';
import './components/stack/wu-stack.js';
import './components/cluster/wu-cluster.js';
import './components/grid/wu-grid.js';

// ── v3.0: Layout remaining (§3.1) ─────────────────────────────────────────
export { WuMasonry } from './components/masonry/wu-masonry.js';
export { WuAspectRatio } from './components/aspect-ratio/wu-aspect-ratio.js';
export { WuSticky } from './components/sticky/wu-sticky.js';
export { WuSpacer } from './components/spacer/wu-spacer.js';
export { WuVisuallyHidden } from './components/visually-hidden/wu-visually-hidden.js';
export { WuPrintArea } from './components/print-area/wu-print-area.js';

// ── v3.0: Typography (§3.2) ────────────────────────────────────────────────
export { WuProse } from './components/prose/wu-prose.js';
export { WuHeading } from './components/heading/wu-heading.js';
export { WuText } from './components/text/wu-text.js';
export { WuLabel } from './components/label/wu-label.js';
export { WuLink } from './components/link/wu-link.js';
export { WuMark } from './components/mark/wu-mark.js';
export { WuBlockquote } from './components/blockquote/wu-blockquote.js';
export { WuAbbr } from './components/abbr/wu-abbr.js';

// ── v3.0: Feedback (§3.3) ──────────────────────────────────────────────────
export { WuBanner } from './components/banner/wu-banner.js';
export { WuInlineMessage } from './components/inline-message/wu-inline-message.js';
export { WuValidationSummary } from './components/validation-summary/wu-validation-summary.js';
export { WuProgressSteps } from './components/progress-steps/wu-progress-steps.js';
export { WuFeedback } from './components/feedback/wu-feedback.js';
export { WuSurvey } from './components/survey/wu-survey.js';
export { WuSupportBubble } from './components/support-bubble/wu-support-bubble.js';
export { WuOnboardingChecklist } from './components/onboarding-checklist/wu-onboarding-checklist.js';

// ── v3.0: Auth (§3.4) ──────────────────────────────────────────────────────
export { WuLoginForm } from './components/login-form/wu-login-form.js';
export { WuSignupForm } from './components/signup-form/wu-signup-form.js';
export { WuOtpVerify } from './components/otp-verify/wu-otp-verify.js';
export { WuPasswordStrength } from './components/password-strength/wu-password-strength.js';
export { WuSocialLogin } from './components/social-login/wu-social-login.js';
export { WuApiKeyDisplay } from './components/api-key-display/wu-api-key-display.js';
export { WuSessionTimeout } from './components/session-timeout/wu-session-timeout.js';
export { WuCaptcha } from './components/captcha/wu-captcha.js';

// ── v3.0: E-Commerce (§3.5) ────────────────────────────────────────────────
export { WuPrice } from './components/price/wu-price.js';
export { WuQuantityPicker } from './components/quantity-picker/wu-quantity-picker.js';
export { WuCartIcon } from './components/cart-icon/wu-cart-icon.js';
export { WuProductCard } from './components/product-card/wu-product-card.js';
export { WuProductGallery } from './components/product-gallery/wu-product-gallery.js';
export { WuCartLineItem } from './components/cart-line-item/wu-cart-line-item.js';
export { WuCheckoutSteps } from './components/checkout-steps/wu-checkout-steps.js';
export { WuPaymentForm } from './components/payment-form/wu-payment-form.js';
export { WuOrderStatus } from './components/order-status/wu-order-status.js';
export type { OrderStatusStep } from './components/order-status/wu-order-status.js';
export { WuWishlistButton } from './components/wishlist-button/wu-wishlist-button.js';

// ── v3.0: SaaS/App Shell (§3.6) ────────────────────────────────────────────
export { WuAppShell } from './components/app-shell/wu-app-shell.js';
export { WuAppHeader } from './components/app-header/wu-app-header.js';
export { WuCommandBar } from './components/command-bar/wu-command-bar.js';
export { WuActivityFeed } from './components/activity-feed/wu-activity-feed.js';
export type { ActivityItem } from './components/activity-feed/wu-activity-feed.js';
export { WuMentionInput } from './components/mention-input/wu-mention-input.js';
export { WuReactionBar } from './components/reaction-bar/wu-reaction-bar.js';
export type { Reaction } from './components/reaction-bar/wu-reaction-bar.js';
export { WuRichTextViewer } from './components/rich-text-viewer/wu-rich-text-viewer.js';
export { WuChangelog } from './components/changelog/wu-changelog.js';
export type { ChangelogEntry } from './components/changelog/wu-changelog.js';
export { WuKeyboardShortcuts } from './components/keyboard-shortcuts/wu-keyboard-shortcuts.js';
export type { ShortcutEntry } from './components/keyboard-shortcuts/wu-keyboard-shortcuts.js';
export { WuFeatureFlagBadge } from './components/feature-flag-badge/wu-feature-flag-badge.js';

// ── Phase 10: Enterprise ────────────────────────────────────────────────────
export { WuTour } from './components/tour/wu-tour.js';
export type { TourStep } from './components/tour/wu-tour.js';
export { WuJsonViewer, WuJsonNode } from './components/json-viewer/wu-json-viewer.js';
export { WuLogViewer } from './components/log-viewer/wu-log-viewer.js';
export type { LogLine } from './components/log-viewer/wu-log-viewer.js';
export { WuDiffViewer } from './components/diff-viewer/wu-diff-viewer.js';
export type { DiffLine } from './components/diff-viewer/wu-diff-viewer.js';
export { WuQueryBuilder } from './components/query-builder/wu-query-builder.js';
export type { QueryField, QueryRule } from './components/query-builder/wu-query-builder.js';
export { WuChat, WuChatBubble } from './components/chat/wu-chat.js';
export { WuSignature } from './components/signature/wu-signature.js';
export { WuAudio } from './components/audio/wu-audio.js';
export { WuEventCalendar } from './components/event-calendar/wu-event-calendar.js';
export type { CalendarEvent } from './components/event-calendar/wu-event-calendar.js';
export { WuReportBuilder } from './components/report-builder/wu-report-builder.js';
export type { ReportColumn } from './components/report-builder/wu-report-builder.js';
export { WuEmojiPicker } from './components/emoji-picker/wu-emoji-picker.js';

// v3.0 §3.1 remaining side-effects
import './components/masonry/wu-masonry.js';
import './components/aspect-ratio/wu-aspect-ratio.js';
import './components/sticky/wu-sticky.js';
import './components/spacer/wu-spacer.js';
import './components/visually-hidden/wu-visually-hidden.js';
import './components/print-area/wu-print-area.js';
// v3.0 §3.2 side-effects
import './components/prose/wu-prose.js';
import './components/heading/wu-heading.js';
import './components/text/wu-text.js';
import './components/label/wu-label.js';
import './components/link/wu-link.js';
import './components/mark/wu-mark.js';
import './components/blockquote/wu-blockquote.js';
import './components/abbr/wu-abbr.js';
// v3.0 §3.3 side-effects
import './components/banner/wu-banner.js';
import './components/inline-message/wu-inline-message.js';
import './components/validation-summary/wu-validation-summary.js';
import './components/progress-steps/wu-progress-steps.js';
import './components/feedback/wu-feedback.js';
import './components/survey/wu-survey.js';
import './components/support-bubble/wu-support-bubble.js';
import './components/onboarding-checklist/wu-onboarding-checklist.js';
// v3.0 §3.4 side-effects
import './components/login-form/wu-login-form.js';
import './components/signup-form/wu-signup-form.js';
import './components/otp-verify/wu-otp-verify.js';
import './components/password-strength/wu-password-strength.js';
import './components/social-login/wu-social-login.js';
import './components/api-key-display/wu-api-key-display.js';
import './components/session-timeout/wu-session-timeout.js';
import './components/captcha/wu-captcha.js';
// v3.0 §3.5 side-effects
import './components/price/wu-price.js';
import './components/quantity-picker/wu-quantity-picker.js';
import './components/cart-icon/wu-cart-icon.js';
import './components/product-card/wu-product-card.js';
import './components/product-gallery/wu-product-gallery.js';
import './components/cart-line-item/wu-cart-line-item.js';
import './components/checkout-steps/wu-checkout-steps.js';
import './components/payment-form/wu-payment-form.js';
import './components/order-status/wu-order-status.js';
import './components/wishlist-button/wu-wishlist-button.js';
// v3.0 §3.6 side-effects
import './components/app-shell/wu-app-shell.js';
import './components/app-header/wu-app-header.js';
import './components/command-bar/wu-command-bar.js';
import './components/activity-feed/wu-activity-feed.js';
import './components/mention-input/wu-mention-input.js';
import './components/reaction-bar/wu-reaction-bar.js';
import './components/rich-text-viewer/wu-rich-text-viewer.js';
import './components/changelog/wu-changelog.js';
import './components/keyboard-shortcuts/wu-keyboard-shortcuts.js';
import './components/feature-flag-badge/wu-feature-flag-badge.js';
// Phase 10 Enterprise side-effects
import './components/tour/wu-tour.js';
import './components/json-viewer/wu-json-viewer.js';
import './components/log-viewer/wu-log-viewer.js';
import './components/diff-viewer/wu-diff-viewer.js';
import './components/query-builder/wu-query-builder.js';
import './components/chat/wu-chat.js';
import './components/signature/wu-signature.js';
import './components/audio/wu-audio.js';
import './components/event-calendar/wu-event-calendar.js';
import './components/report-builder/wu-report-builder.js';
import './components/emoji-picker/wu-emoji-picker.js';
