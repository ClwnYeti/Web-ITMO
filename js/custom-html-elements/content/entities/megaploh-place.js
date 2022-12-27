class MegaplohPlace extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode : "open"})
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="https://clwnyeti.github.io/Web-ITMO/css/for-imports/megaploh-place.css">
                    <div class="content__place">
                        <div>
                            <p class="content__text">
                                Место:
                            </p>
                        </div>
                        <div>
                            <p class="content__text">
                                Названиe: ${this.getAttribute("name")} <br>
                                Адрес: ${this.getAttribute("address")}
                            </p>
                        </div>
                    </div>
        `
    }
    static get observedAttributes() { return ["name", "address"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="https://clwnyeti.github.io/Web-ITMO/css/for-imports/megaploh-place.css">
                    <div class="content__place">
                        <div>
                            <p class="content__text">
                                Место:
                            </p>
                        </div>
                        <div>
                            <p class="content__text">
                                Названиe: ${this.getAttribute("name")} <br>
                                Адрес: ${this.getAttribute("address")}
                            </p>
                        </div>
                    </div>
        `
    }
}

window.customElements.define("megaploh-place", MegaplohPlace)