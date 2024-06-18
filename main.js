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

// Setup Currency field in Donate Section
function setupCurrencyInputField() {
  const currencyInput = document.querySelector("input[data-type='currency']");
  if (!currencyInput) {
    console.error("Not found");
    return;
  }

  currencyInput.addEventListener("keyup", () => formatCurrency(currencyInput));
  currencyInput.addEventListener("blur", () =>
    formatCurrency(currencyInput, "blur")
  );
}

// setupCurrencyInputField helper methods
const formatNumber = (number) =>
  number.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function formatCurrency(input, blur) {
  let inputValue = input.value;

  if (inputValue === "") return;

  const originalLength = inputValue.length;
  let caretPosition = input.selectionStart;

  if (inputValue.indexOf(".") >= 0) {
    const decimalPosition = inputValue.indexOf(".");
    let leftSide = inputValue.substring(0, decimalPosition);
    let rightSide = inputValue.substring(decimalPosition);

    leftSide = formatNumber(leftSide);
    rightSide = formatNumber(rightSide);

    if (blur === "blur") {
      rightSide += "00";
    }

    rightSide = rightSide.substring(0, 2);
    inputValue = `£${leftSide}.${rightSide}`;
  } else {
    inputValue = `£${formatNumber(inputValue)}`;

    if (blur === "blur") {
      inputValue += ".00";
    }
  }

  input.value = inputValue;

  const updatedLength = inputValue.length;
  caretPosition = updatedLength - originalLength + caretPosition;
  input.setSelectionRange(caretPosition, caretPosition);
}

// setup donation form
function setupDonationForm() {
  const donateButtons = document.querySelectorAll(".donate-button");
  const customAmountButton = document.querySelector(".custom-amount");
  const customAmountInput = document.getElementById("donate-input");
  const checkoutButton = document.getElementById("checkout");
  const activeClass = "donate-button--active";

  if (
    donateButtons.length === 0 ||
    customAmountButton === null ||
    customAmountInput === null ||
    checkoutButton === null
  ) {
    console.error("No donation elements found");
    return;
  }

  donateButtons.forEach((button) => {
    button.addEventListener("click", function () {
      checkoutButton.disabled = false;

      // Remove the active class from all buttons
      donateButtons.forEach((btn) => btn.classList.remove(activeClass));

      // Toggle the active class on the clicked button
      button.classList.add(activeClass);
      // Show or hide the custom amount input based on the custom amount button's active status
      if (button === customAmountButton) {
        checkoutButton.disabled =
          customAmountInput.value === "£" || customAmountInput.value === "";
        console.log(customAmountInput.value);
        customAmountInput.hidden = !button.classList.contains(activeClass);
      } else {
        customAmountInput.hidden = true;
      }
    });
  });

  customAmountInput.addEventListener(
    "input",
    () =>
      (checkoutButton.disabled =
        customAmountInput.value === "£" || customAmountInput.value === "")
  );
}

// Single DOMContentLoaded event listener to initialize DOMContentLoaded functions
document.addEventListener("DOMContentLoaded", function () {
  setupSmoothScrollLinks();
  setupNavbarLinkActivation();
  setupCurrencyInputField();
  setupDonationForm();
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

  // Regular expression to check if the email is anything@anything.anything
  function validateEmail(){
    var re = /\S+@\S+\.\S+/;
    if ( re.test(email) == false){
      alert('Please enter a valid email address');
      return false;
    }
    return true;
  }
  
  // Regular expression to check if the phone number starts with 0 and is 11 digits long
  function validatePhoneNumber(phone) {
    const phoneRegex = /^0\d{10}$/;
    if ( phoneRegex.test(phone) == false){
      alert('Please enter a valid phone number');
      return false;
    }
    return true;
}

  // Validate email
  function checkMatchingEmails(email, confirmEmail) {
      if (email !== confirmEmail) {
          alert('Emails do not match. Please confirm your email.');
          return false;
      }
      return true;
  }


  if (validateEmail(email) && validatePhoneNumber(phone) && checkMatchingEmails(email, confirmEmail)) {
      // Display summary 
      const fullName = firstName + " " + lastName;
      const summaryMessage = `To darussalammasjiddarlaston@gmail.com \nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nContact Preference: ${contactPreference}\nSubject: ${subject}\nMessage: ${message}`;
      const confirmation = confirm(`${summaryMessage}\nPress OK to confirm.`);
      // Show confirmation of email sent
      if (confirmation) {
        // Construct the mailto link
        const mailtoLink = `mailto:darussalammasjiddarlaston@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\nFrom " + fullName )}`;
        
        // Open the mail client with prefilled details
        window.location.href = mailtoLink;
      }
  }
}

