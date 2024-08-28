/* jshint esversion: 11 */

/* Responsive Website - Burger Menu https://www.youtube.com/watch?v=IXucQAEkIMo&t=358s */
//Burger Menu in mobile
let hamburger = document.querySelector('.hamburger');
let header = document.querySelector('header');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  header.classList.toggle('active');
  myFunction();
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  header.classList.remove("active");
}));

//Toggle between adding and removing the "responsive" class to nav-menu when the user clicks on the icon
function myFunction() {
  var x = document.getElementById("mynav-menu");
  if (x.className === "nav-menu") {
    x.className += "responsive";
  } else {
    x.className = "nav-menu";
  }
} 