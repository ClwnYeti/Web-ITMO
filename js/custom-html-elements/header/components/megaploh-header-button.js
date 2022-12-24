class MegaplohHeaderButton extends HTMLElement{
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
        let style = "nav__button"
        let hrefAddress = this.getAttribute('href').split("/")
        let hrefHtml = hrefAddress[hrefAddress.length - 1];
        if (hrefHtml === page) {
            style = "nav__button__selected"
        }
        this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="${pathPrefix}css/for-imports/megaploh-header-button.css">
                    <button class=${style} onclick="location.href='${this.getAttribute('href')}'">
                        ${this.textContent}
                    </button>
        `
    }
}

window.customElements.define("megaploh-header-button", MegaplohHeaderButton)