class MegaplohContact extends HTMLElement{
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
                    <link rel="stylesheet" href="${pathPrefix}css/for-imports/megaploh-contact.css">
                    <div class="info__contact__container">
                        <p class="info__text">
                            <strong>${this.getAttribute("name")}: </strong> ${this.textContent}
                        </p>
                    </div>
        `
    }
}

window.customElements.define("megaploh-contact", MegaplohContact)