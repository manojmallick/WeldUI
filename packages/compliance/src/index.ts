// Compliance components
export { WuAuditForm } from './components/audit-form/wu-audit-form.js';
export { WuImmutableDisplay } from './components/immutable-display/wu-immutable-display.js';
export { WuConsentBanner } from './components/consent-banner/wu-consent-banner.js';
export type { ConsentChoices } from './components/consent-banner/wu-consent-banner.js';
export { WuDoraIncidentStatus } from './components/dora-incident-status/wu-dora-incident-status.js';
export type { DoraStatus, DoraSeverity, DoraIncidentEntry } from './components/dora-incident-status/wu-dora-incident-status.js';
export { WuSoxEvidenceExport } from './components/sox-evidence-export/wu-sox-evidence-export.js';
export type { SoxAuditEntry } from './components/sox-evidence-export/wu-sox-evidence-export.js';

// Side-effect: register all custom elements
import './components/audit-form/wu-audit-form.js';
import './components/immutable-display/wu-immutable-display.js';
import './components/consent-banner/wu-consent-banner.js';
import './components/dora-incident-status/wu-dora-incident-status.js';
import './components/sox-evidence-export/wu-sox-evidence-export.js';
