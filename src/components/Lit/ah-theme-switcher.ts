
import { LitElement, css, html } from 'lit';
import { customElement, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
// import {styleMap} from 'lit/directives/style-map.js';

const themes = ['light', 'dark', 'neon', 'system'];
type Theme = typeof themes[number];

const colorSchemeDarkMatchMedia = window.matchMedia('(prefers-color-scheme:dark)');

const storageKey = 'ah-theme';

function getRandomElement<T>(arr: Array<T>): T | undefined {
    return arr[Math.floor(Math.random() * arr.length)];
}

@customElement('ah-theme-switcher')
export class AHThemeSwitcher extends LitElement {
    @state() private _theme: Theme = "light";
    @state() private _userChanged: boolean = false;

    override render() {
        return html`<div class=${this._getClasses()}>
            <ul>
            ${themes.map(theme => {
            const currentlyChecked = this._theme === theme
            return (
                html`<li>
                                <label for=${theme}>${theme}</label>
                                <input id=${theme} type="radio" name="theme" .checked=${currentlyChecked} @change=${() => this._handleCheckbox(theme as Theme)} />
                        </li>`
            )
        })}
            </ul>
            <button @click=${this._randomTheme}>Random Theme</button>
        </div>`;
    }

    // Is this performant? Is there a better way?
    _getClasses = () => classMap({
        container: true,
        dark: this._theme === 'dark',
        light: this._theme === 'light',
        system: this._theme === 'system',
        neon: this._theme === 'neon'
    });

    _randomTheme() {
        const randomTheme = getRandomElement(themes.filter(theme => theme !== this._theme));

        if (randomTheme) {
            this._setTheme(randomTheme);
        }
    }

    _handleCheckbox(theme: Theme) {
        this._userChanged = true;
        this._setTheme(theme);
    }

    static override get styles() {
        return [
            css`
            [popover] {
                border: none;
            }

            .container {
                border: 10px solid;
                padding: 1rem;
                min-width: 400px;
                corner-shape: squircle;
                border-radius: 2rem;
                filter: drop-shadow(-10px 10px 3px var(--shadow-color, red));
            }

            label, input {
                cursor: pointer;
            }

            ul {
                padding: 0;
                margin: 0;
            }

            li {
                display: grid;
                grid-template-columns: 1fr auto;
            }

            @media (prefers-color-scheme:light) {
                :host:has(.system) {
                    --theme: light;
                }
            }

            @media (prefers-color-scheme:dark) {
                :host:has(.system) {
                    --theme: dark;
                }
            }

            :host:has(.dark) {
                --theme: dark;
            }

            :host:has(.light) {
                --theme: light;
            }

            @container style(--theme: dark) {
                .container {
                    background: black;
                    color: white;
                    --shadow-color: yellow;

                }
            }

            @container style(--theme: light) {
                .container {
                    background: white;
                    color: black;

                    --shadow-color: grey;
                }
            }

            .neon {
                --pink: oklch(55% .45 350);
                --orange: oklch(95% .4 95);
                --shadow-color: var(--pink);

                accent-color: var(--pink);

                --hdr-gradient: linear-gradient(
                    to bottom left in oklab,
                    var(--pink) 0%,
                    var(--orange)   100%
                );

                border-color: transparent;

                /* thanks, Kevin!
                *  https://youtu.be/8NfafU1BgaY?si=RoTW_eM4fPoJ9Apc&t=321
                */
                background:
                    linear-gradient(white) padding-box,
                    var(--hdr-gradient) border-box;
                color: black;

                ::marker {
                    // color: white;
                }
            }

      `
        ];
    }

    _getTheme() {
        const localStorageTheme = localStorage.getItem(storageKey);
        return localStorageTheme;
    }

    _setTheme(theme: Theme) {
        this._theme = theme;

        // UPDATE localStorage
        localStorage.setItem(storageKey, theme);
    }

    /* https://davidwalsh.name/detect-system-theme-preference-change-using-javascript#:~:text=To%20detect%20a%20system%20theme,if%20(matches)%20%7B%20console.
    */
    _handleMediaChange = ({ matches }: { matches: boolean }) => {
        if (this._userChanged && this._theme !== 'system') {
            return;
        }

        this._setTheme(matches ? 'dark' : 'light');
    };

    override connectedCallback(): void {
        super.connectedCallback();

        const getTheme = this._getTheme();

        if (getTheme !== '' && getTheme !== null) {
            this._setTheme(getTheme as Theme);
            return;
        }

        // // Set the theme from the current light/dark mode of the Computer
        const checkIsDarkSchemePreferred = () => colorSchemeDarkMatchMedia.matches ?? false;

        colorSchemeDarkMatchMedia
            .addEventListener('change', this._handleMediaChange);

        this._theme = checkIsDarkSchemePreferred() ? "dark" : "light";
        this.requestUpdate();
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();

        colorSchemeDarkMatchMedia
            .removeEventListener('change', this._handleMediaChange);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ah-theme-switcher': AHThemeSwitcher
    }
}