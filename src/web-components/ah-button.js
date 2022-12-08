import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import "lit/experimental-hydrate-support.js";

/**
 * An ah-button element. A simple button that has a toggleable active state that changes when you click the button.
 * @slot - This element has a slot
 * @csspart after - The after part of the button
 * @csspart before - The before part of the button
 */

export class AHButton extends LitElement {
  static properties = {
    outlined: false,
    fullwidth: false,
    _active: { state: true },
  };

  constructor() {
    super();

    this._active = false;
  }

  toggleActive() {
    console.log("clicking works");
    this._active = !this._active;
  }

  render() {
    return html`
      <button
        class=${classMap({
          outlined: this.outlined,
          fullwidth: this.fullwidth,
          active: this._active,
        })}
        @click=${this.toggleActive}
      >
        <slot
          part="before"
          class="before"
          name="before"
        ></slot>
        <slot></slot>
        <slot
          part="after"
          class="after"
          name="after"
        ></slot>
      </button>
    `;
  }

  static styles = css`
    .after,
    .before {
      display: inline-block;
    }

    button {
      border-radius: calc(
        var(--ah-button-border-radius, 20) * 1px
      );
      border: none;
      padding-inline: var(
        --ah-button-padding-inline,
        1.2em
      );
      padding-block: var(--ah-button-padding-block, 0.6em);
      font-size: 1em;
      background: var(
        --ah-button-background,
        var(--brand, black)
      );
      color: var(--ah-button-color, white);
      cursor: pointer;
      transition: background-color 0.25s;
      border: 1px solid transparent;
    }

    .active {
      font-size: 200%;
    }

    .fullwidth {
      width: 100%;
    }

    .outlined {
      border-color: var(
        --ah-button-background,
        var(--brand)
      );
      color: var(--ah-button-outlined-color, black);
    }

    .outlined:hover,
    .outlined {
      background: unset;
    }

    .outlined:hover {
      border-color: var(
        --ah-button-background-hover,
        var(--brand-hover)
      );
      background-color: lightgray;
    }

    button:hover {
      background-color: var(
        --ah-button-background-hover,
        var(--brand-hover, grey)
      );
    }
  `;
}

customElements.define("ah-button", AHButton);
