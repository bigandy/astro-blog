import { LitElement, css, html } from "lit";
import "./ah-button.js";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import groupBy from "lodash.groupby";

/**
 * An ah-bookcase element. A simple button that has a toggleable active state that changes when you click the button.
 */

export class AHBookCase extends LitElement {
  static properties = {
    books: { type: Array },
    months: { state: true },
    years: { state: true },
    _monthsActive: { state: true },
  };

  constructor() {
    super();

    this._monthsActive = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  groupedBooks(books, format) {
    let formatString = "";

    switch (format) {
      case "month":
        formatString = "MM-YYYY";
        break;
      case "year":
        formatString = "YYYY";
        break;
      default:
        formatString = "MM-YYYY";
        break;
    }
    const { unfinished, ...group } = groupBy(books, (book) => {
      const finishedDate = dayjs(book.finishedDate);
      return finishedDate.isValid()
        ? finishedDate.format(formatString)
        : "unfinished";
    });

    const groups = Object.entries(group);

    return groups.sort((a, b) => {
      return Number(b[0]) - Number(a[0]);
    });
  }

  toggleActive() {
    this._monthsActive = !this._monthsActive;
  }

  render() {
    // TODO: is it better to do this in the render function or in the constructor?
    const months = this.groupedBooks(this.books, "month");
    const years = this.groupedBooks(this.books, "year");

    const filterStart = this._monthsActive ? "MM-YYYY" : "YYYY";
    const filterEnd = this._monthsActive ? "MMMM YYYY" : "YYYY";
    const groups = this._monthsActive ? months : years;

    return html`
      <div class="bookcase">
        <ah-button @click=${this.toggleActive}>
          ${this._monthsActive ? "Months" : "Years"}
        </ah-button>

        ${Boolean(groups?.length > 0) &&
        groups.map(([group, books]) => {
          const titleFormatted = dayjs(group, filterStart).format(filterEnd);
          const booksLength = books.length;
          return html`<div>
            <h2>${titleFormatted}</h2>
            <ol reversed>
              ${books.map((book, index) => {
                return html`<li>
                  ${booksLength - index}. <span>${book.bookTitle}</span> by
                  <span>${book.bookAuthor}</span>
                </li>`;
              })}
            </ol>
          </div> `;
        })}
      </div>
    `;
  }

  static styles = css`
    ol {
      list-style: none;
      padding-left: 1rem;
    }
  `;
}

customElements.define("ah-bookcase", AHBookCase);
