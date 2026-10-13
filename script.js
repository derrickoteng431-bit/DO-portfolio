const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    menuButton.textContent = "✕";
  } else {
    menuButton.textContent = "☰";
  }
});

const menuLinks = document.querySelectorAll(".nav-link");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuButton.textContent = "☰";
  });
});

const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinksForScroll = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinksForScroll.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function applySystemTheme() {
  document.documentElement.dataset.theme = systemTheme.matches
    ? "dark"
    : "light";
}

applySystemTheme();
systemTheme.addEventListener("change", applySystemTheme);
