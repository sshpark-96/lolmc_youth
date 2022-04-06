

const mobile_menu = document.querySelector(".mobile_menu");
const hamburger_icon = document.querySelector(".hamburger_menu")
hamburger_icon.addEventListener("click", ()=>{
    mobile_menu.classList.toggle("open");
})