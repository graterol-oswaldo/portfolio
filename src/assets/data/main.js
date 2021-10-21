//Init tooltips
tippy(".link", {
  placement: "bottom",
});

//Toggle mode
const toggle = document.querySelector(".js-change-theme");
const navbar = document.getElementById("navbar");
const navbarItem = document
  .getElementById("navbar-item")
  .getElementsByTagName("a");
const body = document.querySelector("body");
const profile = document.getElementById("profile");
const studies = document.getElementById("studies");
const skill = document.getElementById("skill");

toggle.addEventListener("click", () => {
  if (body.classList.contains("text-gray-900")) {
    toggle.innerHTML = "☀️";
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-gray-900");
    body.classList.remove("text-gray-900");
    body.classList.add("text-gray-100");
    profile.classList.remove("bg-white");
    profile.classList.add("bg-gray-900");
    studies.classList.remove("bg-white");
    studies.classList.add("bg-gray-900");
    skill.classList.remove("bg-white");
    skill.classList.add("bg-gray-900");

    for (let index = 0; index < navbarItem.length; index++) {
      navbarItem[index].classList.remove("text-gray-900");
      navbarItem[index].classList.add("text-gray-100");
    }
  } else {
    toggle.innerHTML = "🌙";
    navbar.classList.remove("bg-gray-900");
    navbar.classList.add("bg-white");
    navbarItem[0].classList.remove("text-gray-100");
    navbarItem[0].classList.add("text-gray-900");
    body.classList.remove("text-gray-100");
    body.classList.add("text-gray-900");
    profile.classList.remove("bg-gray-900");
    profile.classList.add("bg-white");
    studies.classList.remove("bg-gray-900");
    studies.classList.add("bg-white");
    skill.classList.remove("bg-gray-900");
    skill.classList.add("bg-white");

    for (let index = 0; index < navbarItem.length; index++) {
      navbarItem[index].classList.remove("text-gray-100");
      navbarItem[index].classList.add("text-gray-900");
    }
  }
});

function mobileMenuToggle() {
  var navMenuMobile = document.getElementById("navMobileMenu");

  navMenuMobile.classList.toggle("hidden");
}
