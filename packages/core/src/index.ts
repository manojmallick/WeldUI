// Components
export { WuButton } from './components/button/wu-button.js';
export { WuBadge } from './components/badge/wu-badge.js';
export { WuAvatar } from './components/avatar/wu-avatar.js';
export { WuInput } from './components/input/wu-input.js';
export { WuTextarea } from './components/textarea/wu-textarea.js';
export { WuSelect } from './components/select/wu-select.js';
export { WuCheckbox } from './components/checkbox/wu-checkbox.js';
export { WuToggle } from './components/toggle/wu-toggle.js';

// Types
export type * from './types/index.js';

// Side-effect: register all custom elements
import './components/button/wu-button.js';
import './components/badge/wu-badge.js';
import './components/avatar/wu-avatar.js';
import './components/input/wu-input.js';
import './components/textarea/wu-textarea.js';
import './components/select/wu-select.js';
import './components/checkbox/wu-checkbox.js';
import './components/toggle/wu-toggle.js';
