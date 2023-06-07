import { LitElement, css, html } from "lit";
import "@lit-labs/ssr-client/lit-element-hydrate-support.js";

import "./ah-button.js";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

/**
 * An ah-bookcase element. A simple button that has a toggleable active state that changes when you click the button.
 */

export class AHBookCase extends LitElement {
  static properties = {
    months: { type: Array },
    years: { type: Array },
    _monthsActive: { state: true },
  };

  constructor() {
    super();

    this._monthsActive = false;
  }

  toggleActive() {
    this._monthsActive = !this._monthsActive;
  }

  render() {
    const filterStart = this._monthsActive ? "MM-YYYY" : "YYYY";
    const filterEnd = this._monthsActive ? "MMMM YYYY" : "YYYY";
    const groups = this._monthsActive ? this.months : this.years;

    return html`
      <div class="bookcase">
        <ah-button @click=${this.toggleActive}>
          ${this._monthsActive ? "Months" : "Years"}
        </ah-button>

        ${groups.map(([group, books]) => {
          const titleFormatted = dayjs(group, filterStart).format(filterEnd);
          return html`<div>
            <h2>${titleFormatted}</h2>
            <ol reversed>
              ${books.map((book) => {
                return html`<li>
                  <span>${book.bookTitle}</span> by
                  <span>${book.bookAuthor}</span>
                </li>`;
              })}
            </ol>
          </div> `;
        })}
      </div>
    `;
  }

  static styles = css``;
}

customElements.define("ah-bookcase", AHBookCase);
