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

// Function to send emails
function validateForm() {
  // Get form values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const confirmEmail = document.getElementById('confirmEmail').value;
  const phone = document.getElementById('phone').value;
  const contactPreference = document.getElementById('contactPreference').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Validate required fields
  if (firstName === '' || lastName === '' || email === '' || confirmEmail === '' || phone === '' || subject === '' || message === '') {
      alert('Please fill in all required fields.');
      return;
  }

  // Validate email
  function checkEmails(email, confirmEmail) {
      if (email !== confirmEmail) {
          alert('Emails do not match. Please confirm your email.');
          return false;
      }
      return true;
  }

  if (checkEmails(email, confirmEmail)) {
      // Display summary 
      const summaryMessage = `To darussalammasjiddarlaston@gmail.com \nName: ${firstName + lastName}\nEmail: ${email}\nPhone: ${phone}\nContact Preference: ${contactPreference}\nSubject: ${subject}\nMessage: ${message}`;
      const confirmation = confirm(`${summaryMessage}\nPress OK to confirm.`);
      // Show confirmation of email sent
      if (confirmation) {
          alert(`Email sent to: darussalammasjiddarlaston@gmail.com`);
      }
  }
}

