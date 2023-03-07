// //toogle class active
// const navbarNav = document.querySelector(".navbar-nav");

// //ketika hamburger menu di klik
// document.querySelector("#navbarNav").onclick = () => {
//   navbarNav.classList.toggle("collapse");
// };

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#navbarNav");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.toggle("collapse");
  }
});
