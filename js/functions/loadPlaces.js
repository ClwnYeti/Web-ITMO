let isGetting = false;
let gottenPlaces = []
const placesCountInDB = 8;

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

function parsePlaces(json, indexes) {
    let parsedPlaces = []
    for (let i = 0; i < indexes.length; i++) {
        parsedPlaces.push(new Place(json[indexes[i]].id, json[indexes[i]].name, json[indexes[i]].address))
    }
    return parsedPlaces
}

async function getPlaces() {
    if (!isGetting) {
        isGetting = true
        const list = document.getElementsByClassName("content__places")[0]
        list.innerHTML = `<img src="images/zxcursed.gif" alt="gif">`
        let indexes = []
        indexes[0] = Math.round(Math.random() * (placesCountInDB - 1))
        do {
            indexes[1] = Math.round(Math.random() * (placesCountInDB - 1))
        } while (indexes[0] === indexes[1])

        do {
            indexes[2] = Math.round(Math.random() * (placesCountInDB - 1))
        } while (indexes[0] === indexes[2] || indexes[1] === indexes[2])

        let savedGottenPlaces = localStorage.getItem("gottenPlaces")
        try {
            if (!savedGottenPlaces) {
                gottenPlaces = []
            } else {
                gottenPlaces = JSON.parse(savedGottenPlaces)
            }
        } catch {
            gottenPlaces = []
        }
        const url = `https://my-json-server.typicode.com/ClwnYeti/Web-ITMO/places/`
        setTimeout(async () => {
            let response = await fetch(url)
            if (!response.ok) {
                console.log(response.statusText)
            } else {
                let result = await response.json()
                gottenPlaces = parsePlaces(result, indexes)
            }
            list.innerHTML = ""
            isGetting = false
            localStorage.setItem("gottenPlaces", gottenPlaces)
            gottenPlaces.map(display)
        }, 1000)

    }
}