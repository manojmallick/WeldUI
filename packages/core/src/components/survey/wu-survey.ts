import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-survey.styles.js';

/**
 * Net Promoter Score (NPS) survey widget with optional comment field.
 *
 * @element wu-survey
 * @event wu-submit - Fired on submission, detail: { score: number, comment: string }
 * @csspart base - The survey container
 */
@customElement('wu-survey')
export class WuSurvey extends LitElement {
  static styles = styles;

  /** Main survey question */
  @property() question = 'How likely are you to recommend us to a colleague?';

  /** Show a comment text area */
  @property({ type: Boolean, reflect: true, attribute: 'with-comment' }) withComment = false;

  @state() private score: number | null = null;
  @state() private comment = '';
  @state() private submitted = false;

  private handleSubmit(e: Event) {
    e.preventDefault();
    if (this.score === null) return;
    this.submitted = true;
    this.dispatchEvent(
      new CustomEvent('wu-submit', {
        bubbles: true,
        composed: true,
        detail: { score: this.score, comment: this.comment },
      }),
    );
  }

  override render() {
    if (this.submitted) {
      return html`
        <div part="base" class="survey submitted" role="status">
          <p class="thanks">Thank you for your feedback!</p>
        </div>
      `;
    }
    return html`
      <form part="base" class="survey" @submit=${this.handleSubmit} novalidate>
        <p class="question">${this.question}</p>
        <div class="scale" role="group" aria-label="Score 0 to 10">
          ${Array.from({ length: 11 }, (_, i) => html`
            <button
              type="button"
              class="score-btn ${this.score === i ? 'selected' : ''}"
              aria-label="${i} out of 10"
              aria-pressed=${this.score === i}
              @click=${() => { this.score = i; }}
            >${i}</button>
          `)}
        </div>
        <div class="scale-labels">
          <span>Not at all likely</span>
          <span>Extremely likely</span>
        </div>
        ${this.withComment
          ? html`
              <textarea
                class="comment"
                placeholder="Any additional comments? (optional)"
                rows="3"
                .value=${this.comment}
                @input=${(e: Event) => { this.comment = (e.target as HTMLTextAreaElement).value; }}
              ></textarea>
            `
          : ''}
        <button type="submit" class="submit-btn" ?disabled=${this.score === null}>Submit</button>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-survey': WuSurvey;
  }
}
