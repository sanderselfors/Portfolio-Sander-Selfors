const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

var navbar = document.querySelector(".navbar");

var mainSection = document.querySelector("#home");

var observer = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

observer.observe(mainSection);

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

var sections = document.querySelectorAll("section");
var divs = document.querySelectorAll("div");
var paragraphs = document.querySelectorAll("p");
var buttons = document.querySelectorAll("a");
var images = document.querySelectorAll("img");

sections.forEach(function (section, index) {
  section.classList.add("animated-section");
  if (index % 2 === 0) {
    section.classList.add("right");
  }
  observer.observe(section);
});

divs.forEach(function (div, index) {
  div.classList.add("animated-div");
  if (index % 2 === 0) {
    div.classList.add("right");
  }
  observer.observe(div);
});

paragraphs.forEach(function (p, index) {
  p.classList.add("animated-p");
  if (index % 2 === 0) {
    p.classList.add("right");
  }
  observer.observe(p);
});

buttons.forEach(function (a, index) {
  a.classList.add("animated-a");
  if (index % 2 === 0) {
    a.classList.add("right");
  }
  observer.observe(a);
});

images.forEach(function (img, index) {
  img.classList.add("animated-img");
  if (index % 2 === 0) {
    img.classList.add("right");
  }
  observer.observe(img);
});
