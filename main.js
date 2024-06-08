//Quick Scroll Links
document.addEventListener("DOMContentLoaded", () => {
  var link = document.querySelectorAll('a[href^="#"]');

  link.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      //Remove the "#" from the href
      var targetId = link.getAttribute("href").substring(1);
      var targetSection = document.getElementById(targetId);

      if (targetSection) {
        var offset = targetSection.offsetTop;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    });
  });
});
