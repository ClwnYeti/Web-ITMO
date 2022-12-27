class MegaplohContact extends HTMLElement{
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
                    <link rel="stylesheet" href="https://clwnyeti.github.io/Web-ITMO/css/for-imports/megaploh-contact.css">
                    <div class="info__contact__container">
                        <p class="info__text">
                            <strong>${this.getAttribute("name")}: </strong> ${this.textContent}
                        </p>
                    </div>
        `
    }
}

window.customElements.define("megaploh-contact", MegaplohContact)