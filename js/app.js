const nav = document.getElementById("navigation");
const button = document.getElementById("bnt");

function openNav() {
    nav.classList.add("-active");
    button.classList.add("-active");
}

function closeNav() {
    nav.classList.remove("-active");
    button.classList.remove("-active");
}