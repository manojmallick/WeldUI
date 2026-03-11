const m = JSON.parse(require('fs').readFileSync('packages/core/custom-elements.json','utf8'));
const tags = m.modules.map(function(mod) { return mod.declarations[0].tagName; });
const tagSet = new Set(tags);
const storyTags = ['wu-accordion','wu-alert','wu-avatar','wu-badge','wu-breadcrumb','wu-button','wu-card','wu-checkbox','wu-command','wu-data-grid','wu-date-picker','wu-divider','wu-file-upload','wu-input','wu-modal','wu-pagination','wu-popover','wu-progress','wu-select','wu-skeleton','wu-spinner','wu-stepper','wu-table','wu-tabs','wu-textarea','wu-toast','wu-toggle','wu-tooltip'];
const missing = storyTags.filter(function(t) { return !tagSet.has(t); });
console.log('Total CEM tags:', tags.length);
console.log('Missing story tags:', missing.length === 0 ? 'NONE - all covered!' : missing.join(', '));
