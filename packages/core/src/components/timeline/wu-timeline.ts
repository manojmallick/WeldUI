import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { timelineStyles, timelineItemStyles } from './wu-timeline.styles.js';

/**
 * Timeline container.
 * @element wu-timeline
 * @slot - wu-timeline-item elements
 */
@customElement('wu-timeline')
export class WuTimeline extends LitElement {
  static styles = timelineStyles;
  render() { return html`<div class="timeline" role="list"><slot></slot></div>`; }
}

/**
 * A single timeline event item.
 * @element wu-timeline-item
 * @slot - Body content
 */
@customElement('wu-timeline-item')
export class WuTimelineItem extends LitElement {
  static styles = timelineItemStyles;
  @property() title = '';
  @property() meta = '';
  @property({ reflect: true }) status: 'default' | 'success' | 'warning' | 'danger' | 'pending' = 'default';
  render() {
    return html`
      <div class="connector"><div class="dot"></div><div class="line"></div></div>
      <div class="body" role="listitem">
        ${this.title ? html`<div class="title">${this.title}</div>` : ''}
        ${this.meta ? html`<div class="meta">${this.meta}</div>` : ''}
        <div class="content"><slot></slot></div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-timeline': WuTimeline; 'wu-timeline-item': WuTimelineItem; } }
