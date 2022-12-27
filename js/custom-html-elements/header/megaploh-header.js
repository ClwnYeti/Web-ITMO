class MegaplohHeader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode : "open"})
        const style = document.createElement("style");
        shadow.appendChild(style);
    }

    connectedCallback() {
        let address = document.URL.split("/");
        let page = address[address.length - 1];
        page = page.split("?")[0]
        let imgPath;
        if (page === "index.html") {
            imgPath = "https://clwnyeti.github.io/Web-ITMO/images/logo-alt.png"
        }
        else {
            imgPath = "https://clwnyeti.github.io/Web-ITMO/images/logo.png"
        }
        let pathPrefix = ""
        if (page !== "index.html") {
            pathPrefix = "../"
        }

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://clwnyeti.github.io/Web-ITMO/css/for-imports/megaploh-header.css">
            <div class="nav">
                <megaploh-logo class="nav__logo__container" href="https://clwnyeti.github.io/Web-ITMO/index.html" img=${imgPath}></megaploh-logo>
                <div class="nav__ascii">
                    <pre>___ ___    ___   ____   ____  ____  _       ___   __ __
|   |   |  /  _] /    | /    ||    \\| |     /   \\ |  |  |
| _   _ | /  [_ |   __||  o  ||  o  ) |    |     ||  |  |
|  \\_/  ||    _]|  |  ||     ||   _/| |___ |  O  ||  _  |
|   |   ||   [_ |  |_ ||  _  ||  |  |     ||     ||  |  |
|   |   ||     ||     ||  |  ||  |  |     ||     ||  |  |
|___|___||_____||___,_||__|__||__|  |_____| \\___/ |__|__|</pre>
                </div>
                <div class="nav__buttons">
                    <megaploh-header-button class="nav__button__container" href="https://clwnyeti.github.io/Web-ITMO/Pages/AddPlacePage.html">Add Place</megaploh-header-button>
                    <megaploh-header-button class="nav__button__container" href="https://clwnyeti.github.io/Web-ITMO/Pages/ProfilePage.html">Profile</megaploh-header-button>
                </div>
            </div>
    `
    }
}

window.customElements.define("megaploh-header", MegaplohHeader)