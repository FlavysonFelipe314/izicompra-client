let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");
let content = document.querySelector(".content-menu");


openMenu.addEventListener("click", () => {
    content.classList.add("slide-menu");
})

closeMenu.addEventListener("click", () => {
    content.classList.remove("slide-menu");
})