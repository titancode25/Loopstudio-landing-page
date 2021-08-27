// ---- Navbar Logics

let humburger = document.getElementById("menu-humburger");
let closebtn = document.getElementById("menu-close-btn");
let navbar = document.getElementById("ul-nav");
let navhead = document.getElementById("nav-head");
let logo = document.getElementById("ham-logo-hai");



function closemenu() {
    console.log("Menu Closed");
    closebtn.style.display = "none";
    navhead.style.cssText = "background-color: transparent; position: absolute;";
    humburger.style.display = "block";
    navbar.style.right = "100%"

}

function openmenu() {
    humburger.style.display = "none";
    closebtn.style.display = "block";
    navbar.style.right = "0%";
    navhead.style.cssText = "background-color: black; position: fixed; z-index: 10000;";
    console.log("Menu opened");
}
