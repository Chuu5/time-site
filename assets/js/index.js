const body = document.body
const menuOpen = document.querySelector(".open-menu")
const menuClose = document.querySelector(".close-menu")

menuOpen.addEventListener("click", () =>openAndCloseMenu("open"))
menuClose.addEventListener("click", () => openAndCloseMenu("close"))

const openAndCloseMenu = (action) => {
    if (action === "open") {
        body.classList.add("menu-expanded")
    } else {
        body.classList.remove("menu-expanded")
    }
}
