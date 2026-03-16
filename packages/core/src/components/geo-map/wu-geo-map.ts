import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-geo-map.styles.js';

export interface GeoRegion {
  id: string;
  label: string;
  value?: number;
}

/**
 * Geographic choropleth / regional map (placeholder — integrate your map library).
 * @element wu-geo-map
 * @event wu-region-select - Emitted when a region is selected; detail: { region: GeoRegion }
 */
@customElement('wu-geo-map')
export class WuGeoMap extends LitElement {
  static styles = styles;
  @property() title = '';
  @property({ attribute: false }) regions: GeoRegion[] = [];
  @property() projection = 'mercator';

  private select(region: GeoRegion) {
    this.dispatchEvent(new CustomEvent('wu-region-select', { bubbles: true, composed: true, detail: { region } }));
  }

  render() {
    return html`
      ${this.title ? html`<div class="title">${this.title}</div>` : ''}
      <div class="placeholder" role="figure" aria-label="${this.title || 'Geographic map'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span>Geo map — ${this.projection} projection</span>
        ${this.regions.length ? html`
          <div class="region-list">
            ${this.regions.map(r => html`
              <div class="region" @click=${() => this.select(r)} role="button" tabindex="0"
                   @keydown=${(e: KeyboardEvent) => e.key === 'Enter' && this.select(r)}>
                <span class="region-id">${r.id}</span>
                <span class="region-label">${r.label}</span>
                ${r.value != null ? html`<span class="region-value">${r.value}</span>` : ''}
              </div>`)}
          </div>` : ''}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-geo-map': WuGeoMap; } }
