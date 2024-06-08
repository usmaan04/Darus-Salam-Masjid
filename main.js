// Function to setup smooth scrolling for internal links
function setupSmoothScrollLinks() {
  // Select all anchor links with href starting with #
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1); // Remove the # from the href
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offset = targetSection.offsetTop;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    });
  });
}

// Function to check if a section is in the viewport and activate the corresponding navbar link
function setupNavbarLinkActivation() {
  const navbarLinks = document.querySelectorAll(".navbar-middle a");
  const sections = document.querySelectorAll("section");

  function activateLink() {
    const buffer = 40;
    let index = sections.length;

    while (--index && window.scrollY + buffer < sections[index].offsetTop) {}

    navbarLinks.forEach((link) => link.classList.remove("option-selected"));
    if (index >= 0) {
      const currentSection = sections[index];
      navbarLinks.forEach((link) => {
        if (currentSection.id === "cta" || currentSection.id === "intro") {
          navbarLinks[0].classList.add("option-selected");
        }
        if (link.getAttribute("href").substring(1) === currentSection.id) {
          link.classList.add("option-selected");
        }
      });
    }
  }

  activateLink();
  window.addEventListener("scroll", () => {
    requestAnimationFrame(activateLink);
  });
}

// Single DOMContentLoaded event listener to initialize both functions
document.addEventListener("DOMContentLoaded", function () {
  setupSmoothScrollLinks();
  setupNavbarLinkActivation();
});
