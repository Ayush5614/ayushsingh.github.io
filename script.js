// ===== RUN AFTER PAGE LOAD =====
document.addEventListener("DOMContentLoaded", function () {

  /* ===== AOS INIT ===== */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  /* ===== TYPING ANIMATION ===== */
  const typedElement = document.getElementById("typed");
  if (typedElement && typeof Typed !== "undefined") {
    new Typed("#typed", {
      strings: [
        "Data Analytics Enthusiast",
        "Web Developer",
        "BCA Student"
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true
    });
  }

  /* ===== NAVBAR ACTIVE LINK ON SCROLL ===== */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.offsetHeight;

      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

});
