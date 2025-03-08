const openMenu = document.querySelector(".right-header i")
const navMenu = document.querySelector(".nav-menu")
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("fixed")
    } else {
        header.classList.remove("fixed")
    }
})

openMenu.addEventListener("click", event => {
    event.stopPropagation()

    if (event.target.classList.contains("fa-bars")) {
        navMenu.style.left = "0"
        event.target.className = "fa fa-close"
    } else if (event.target.classList.contains("fa-close")) {
        navMenu.style.left = "-250px"
        event.target.className = "fa fa-bars"
    }
})

navMenu.addEventListener("click", event => event.stopPropagation())

document.body.addEventListener("click", () => {
    if (openMenu.classList.contains("fa-close")) {
        openMenu.className = "fa fa-bars"
        navMenu.style.left = "-250px"
    }
})
