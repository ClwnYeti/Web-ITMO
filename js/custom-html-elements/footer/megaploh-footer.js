
class MegaplohFooter extends HTMLElement{
    constructor() {
        super();

        this.attachShadow({mode : "open"})
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://clwnyeti.github.io/Web-ITMO/css/for-imports/megaploh-footer.css">
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
        if (name === "load-time") {
            this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://clwnyeti.github.io/Web-ITMO/css/for-imports/megaploh-footer.css">
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