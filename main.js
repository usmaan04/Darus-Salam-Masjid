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
        let offset = targetSection.offsetTop;
        // Adjust offset for specific target IDs
        if (targetId === "donate" || targetId === "about-us") {
          offset -= 60;
        }
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
    const buffer = 60;
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

// Toggle the navigation menu for mobile view
function toggleNavMenu() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".navbar-middle a");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });
}

// Single DOMContentLoaded event listener to initialize DOMContentLoaded functions
document.addEventListener("DOMContentLoaded", function () {
  setupSmoothScrollLinks();
  setupNavbarLinkActivation();
  toggleNavMenu();
});

// Function to send emails
function validateForm() {
  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;
  const phone = document.getElementById("phone").value;
  const contactPreference = document.getElementById("contactPreference").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Validate required fields
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    confirmEmail === "" ||
    phone === "" ||
    subject === "" ||
    message === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  // Regular expression to check if the email is anything@anything.anything
  function validateEmail() {
    var re = /\S+@\S+\.\S+/;
    if (re.test(email) == false) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  }

  // Regular expression to check if the phone number starts with 0 and is 11 digits long
  function validatePhoneNumber(phone) {
    const phoneRegex = /^0\d{10}$/;
    if (phoneRegex.test(phone) == false) {
      alert("Please enter a valid phone number");
      return false;
    }
    return true;
  }

  // Validate email
  function checkMatchingEmails(email, confirmEmail) {
    if (email !== confirmEmail) {
      alert("Emails do not match. Please confirm your email.");
      return false;
    }
    return true;
  }

  // Validate contact preference
  function checkPreference(contactPreference) {
    if (contactPreference == "Preference") {
      alert("Please choose your preference for contact");
      return false;
    }
  return true;
  }

  if (
    validateEmail(email) &&
    validatePhoneNumber(phone) &&
    checkMatchingEmails(email, confirmEmail) &&
    checkPreference(contactPreference)
  ) {
    
    // Display summary
    const fullName = firstName + " " + lastName;
    const summaryMessage = `To darussalammasjiddarlaston@gmail.com \nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nContact Preference: ${contactPreference}\nSubject: ${subject}\nMessage: ${message}`;
    const confirmation = confirm(`${summaryMessage}\nPress OK to confirm.`);
    // Show confirmation of email sent
    if (confirmation) {
      // Construct the mailto link
      const mailtoLink = `mailto:darussalammasjiddarlaston@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(message + "\nFrom " + fullName)}`;

      // Open the mail client with prefilled details
      window.location.href = mailtoLink;
    }
  }
}
