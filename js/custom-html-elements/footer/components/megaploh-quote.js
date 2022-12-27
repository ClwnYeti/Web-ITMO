class MegaplohQuote extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode : "open"})
    }

    connectedCallback() {
        let address = document.URL.split("/");
        let page = address[address.length - 1];
        page = page.split("?")[0]
        let pathPrefix = ""
        page = page.split("?")[0]
        if (page !== "index.html") {
            pathPrefix = "../"
        }
        this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="${pathPrefix}css/for-imports/megaploh-contact.css">
                    <p class="info__text">
                        <q class="info__quote">${this.textContent}</q> <strong>- ${this.getAttribute("author")}</strong>
                    </p>
        `
    }
}

window.customElements.define("megaploh-quote", MegaplohQuote)