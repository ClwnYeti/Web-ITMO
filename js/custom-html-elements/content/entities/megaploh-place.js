class MegaplohPlace extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode : "open"})
    }

    connectedCallback() {
        let address = document.URL.split("/");
        let page = address[address.length - 1];
        let pathPrefix = ""
        if (page !== "index.html") {
            pathPrefix = "../"
        }
        this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="${pathPrefix}css/for-imports/megaploh-place.css">
                    <div class="content__place__container">
                        <p class="content__text">
                            Названиe: ${this.getAttribute("name")} <br>
                            Адрес: ${this.getAttribute("address")}
                        </p>
                    </div>
        `
    }

    attributeChangedCallback(name, oldValue, newValue) {
        let address = document.URL.split("/");
        let page = address[address.length - 1];
        let pathPrefix = ""
        if (page !== "index.html") {
            pathPrefix = "../"
        }

        this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="${pathPrefix}css/for-imports/megaploh-place.css">
                    <div class="content__place__container">
                        <p class="content__text">
                            Названиe: ${this.getAttribute("name")} <br>
                            Адрес: ${this.getAttribute("address")}
                        </p>
                    </div>
        `
    }
}

window.customElements.define("megaploh-place", MegaplohPlace)