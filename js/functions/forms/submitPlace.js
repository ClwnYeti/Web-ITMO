let addedPlaces = []

function Place(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
}

function display(place) {
    const list = document.getElementsByClassName("content__places")[0]
    const placeHtml = document.createElement("megaploh-place")
    placeHtml.setAttribute("name", place.name)
    placeHtml.className = "content__place__container"
    placeHtml.setAttribute("address", place.address)
    list.appendChild(placeHtml)
}

window.addEventListener("load", () => {
    let a = localStorage.getItem("addedPlaces")
    if (a){
        addedPlaces = JSON.parse(localStorage.getItem("addedPlaces"))
        addedPlaces.map(display)
    }
})

function submitPlace() {
    const name = document.getElementsByName("placeNameInput")[0].value
    const address = document.getElementsByName("placeAddressInput")[0].value
    const place = new Place(addedPlaces.length, name, address)
    addedPlaces.push(place)
    localStorage.setItem("addedPlaces", JSON.stringify(addedPlaces))
    display(place)
}