import { watch, SignalWatcher, signal } from '@lit-labs/preact-signals';
import { LitElement, html } from 'lit';
import { customElement } from "lit/decorators.js";
const count = signal(0);


@customElement('ah-web-component-v2')
// export class AHElementV2 extends SignalWatcher(LitElement) {
//     override render() {
//         return html`<button @click=${this._onClick}>${count.value}</button>`;
//     }

//     private _onClick() {
//         count.value = count.value + 1;
//     }
// }

// Alternatively, use the watch specifically where needed
export class AHElementV2 extends LitElement {
    override render() {
        return html`<button @click=${this._onClick}>${watch(count)}</button>`;
    }

    private _onClick() {
        count.value = count.value + 1;
    }
}