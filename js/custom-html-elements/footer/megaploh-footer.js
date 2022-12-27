
class MegaplohFooter extends HTMLElement{
    constructor() {
        super();

        this.attachShadow({mode : "open"})
    }

    connectedCallback() {
        let address = document.URL.split("/");
        let page = address[address.length - 1];
        page = page.split("?")[0]
        let pathPrefix = ""
        if (page !== "index.html") {
            pathPrefix = "../"
        }
        this.setAttribute("load-time", "")
        this.className = "info__container"
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="${pathPrefix}css/for-imports/megaploh-footer.css">
            <div class="info">
                <div class="info__contacts">
                    <megaploh-contact name="Telegram">@Yetixd</megaploh-contact>
                    <megaploh-contact name="Github">ClwnYeti</megaploh-contact>
                    <megaploh-contact name="Discord">ClwnYeti#2648</megaploh-contact>
                </div>
                <div class="info__text__container">
                    <p class="info__text">Время загрузки ${this.getAttribute("load-time")}</p>
                </div>
                <div class="info__quote__container">
                    <megaploh-quote author="Максим Пезин">Я хочу в Питер, чтобы было скибидипапа</megaploh-quote>
                </div>
            </div>
        `
    }
    static get observedAttributes() { return ["load-time"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        let address = document.URL.split("/");
        let page = address[address.length - 1];
        let pathPrefix = ""
        if (page !== "index.html") {
            pathPrefix = "../"
        }
        if (name === "load-time") {
            this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="${pathPrefix}css/for-imports/megaploh-footer.css">
            <div class="info">
                <div class="info__contacts">
                    <megaploh-contact name="Telegram">@Yetixd</megaploh-contact>
                    <megaploh-contact name="Github">ClwnYeti</megaploh-contact>
                    <megaploh-contact name="Discord">ClwnYeti#2648</megaploh-contact>
                </div>
                <div class="info__text__container">
                    <p class="info__text">Время загрузки ${newValue}</p>
                </div>
                <div class="info__quote__container">
                    <megaploh-quote author="Максим Пезин">Я хочу в Питер, чтобы было скибидипапа</megaploh-quote>
                </div>
            </div>
        `
        }
    }
}

window.customElements.define("megaploh-footer", MegaplohFooter)