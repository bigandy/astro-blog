import { LitElement, html } from "lit";

const tagName = "my-element";

export class MyElement extends LitElement {
  render() {
    return html` <p>Hello world! From my-element</p> `;
  }
}

customElements.define(tagName, MyElement);
