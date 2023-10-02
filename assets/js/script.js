'use strict';


/**
 * PRELOADER
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



// add event on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const body = document.querySelector("[data-body]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-navbar-link]");
const section = document.querySelectorAll("[data-section]");
const pageBanner = document.querySelectorAll("[data-page-banner]");

const toggleNavbar = function () {
  body.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElements(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  body.classList.remove("active");
  this.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNavbar);


// active section

let lastActiveSection = document.getElementById("home");
let currentActiveSection = null;

const sectionActive = function () {
  currentActiveSection = document.getElementById(window.location.hash.slice(1)) || lastActiveSection;
  lastActiveSection.classList.remove("active");
  currentActiveSection.classList.add("active");
  lastActiveSection = currentActiveSection;
}

window.addEventListener("hashchange", sectionActive);
window.addEventListener("load", sectionActive);




// header active

const header = document.querySelectorAll("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElemOnScroll);