
let hamburger = document.querySelector(".hamburger");
let mainBody = document.querySelector(".main");
let navBar = document.querySelector(".nav");
let footer = document.querySelector(".footer");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("change");
    mainBody.classList.toggle("hide");
    navBar.classList.toggle("hide");
    footer.classList.toggle("hide");
})