let places = []

function Place(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
}

window.addEventListener("load", () => {
    let a = localStorage.getItem("places")
    if (a){
        places = JSON.parse(localStorage.getItem("places"))
        places.map(display)
    }
})

function display(place) {
    const list = document.getElementsByClassName("content__places")[0]
    const placeHtml = document.createElement("megaploh-place")
    placeHtml.setAttribute("name", place.name)
    placeHtml.className = "content__place__container"
    placeHtml.setAttribute("address", place.address)
    list.appendChild(placeHtml)
}
function submitPlace() {
    const name = document.getElementsByName("placeNameInput")[0].value
    const address = document.getElementsByName("placeAddressInput")[0].value
    const place = new Place(places.length, name, address)
    places.push(place)
    localStorage.setItem("places", JSON.stringify(places))
    display(place)
}