import { LitElement, html } from 'lit';
import { customElement, property } from "lit/decorators.js";

@customElement('ah-web-component-v1')
export class AHElementV1 extends LitElement {
    @property({ type: String, attribute: false })
    name: string = "";

    constructor() {
        super();
        this.name = 'derp';
    }

    // static override properties = { name: { type: String } }
    // accessor name = 'Default';

    override render() {
        return html`<p>Hello world! This is ${this.name}'s Lit component.</p>`;
    }
}

// customElements.define('ah-web-component-v1', AHElementV1);