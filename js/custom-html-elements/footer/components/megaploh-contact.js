class MegaplohContact extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode : "open"})
    }

    connectedCallback() {
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