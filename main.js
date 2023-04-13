// Active Menu Switcher

const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => {
  const navLink = e.target.parentElement;

  if (navLink.classList.contains("link")) {
    navList.querySelector(".active").classList.remove("active");
    navLink.classList.add("active");
  }
});

// STICKY HEADER
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 0)
})

// RESPONSIVE MOBILE MENU
// 1)variables
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menuWrapper = document.querySelector(".nav-wrapper");
const resume = document.querySelector(".resume");

// 3)create functions
function showMenu() {
    hamburger.style.display = "none";
    resume.style.display = "none";
    menuWrapper.style.transform = "translateX(100%)";

}

function hideMenu() {

}




// 2)Event Listener
hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);
