class MegaplohLogo extends HTMLElement{
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
                    <link rel="stylesheet" href="${pathPrefix}css/for-imports/megaploh-logo.css">
                    <button class="nav__logo" onclick="location.href='${this.getAttribute('href')}'">
                        <img src="${this.getAttribute('img')}" alt="Logo">
                    </button>
        `
    }
}

window.customElements.define("megaploh-logo", MegaplohLogo)