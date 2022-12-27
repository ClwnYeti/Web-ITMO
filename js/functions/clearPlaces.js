function clearPlaces() {
    const list = document.getElementsByClassName("content__places")[0]
    localStorage.removeItem("addedPlaces")
    list.innerHTML = ""
}