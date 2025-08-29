document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll("#nav-menu a");
  const hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("translate-x-0");
    navMenu.classList.toggle("-translate-x-full");
    
    hamburger.classList.toggle("ri-menu-4-line");
    hamburger.classList.toggle("ri-close-line");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        navMenu.classList.add("-translate-x-full");
        navMenu.classList.remove("translate-x-0");
        hamburger.classList.add("ri-menu-4-line");
        hamburger.classList.remove("ri-close-line");
      }
    });
  });
});
