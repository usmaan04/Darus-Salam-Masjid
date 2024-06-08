// Scrolls to Home section
document.addEventListener('DOMContentLoaded', function () {
    var portfolioButton = document.querySelector('[href="#"]');

    portfolioButton.addEventListener('click', function (event) {
        event.preventDefault();

        var portfolioSection = document.getElementById('#');
        var offset = portfolioSection.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });
});

// Scrolls to Prayer Times section
document.addEventListener('DOMContentLoaded', function () {
    var portfolioButton = document.querySelector('[href="#prayer-times"]');

    portfolioButton.addEventListener('click', function (event) {
        event.preventDefault();

        var portfolioSection = document.getElementById('prayer-times');
        var offset = portfolioSection.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });
});


// Scrolls to About Us section
document.addEventListener('DOMContentLoaded', function () {
    var portfolioButton = document.querySelector('[href="#about-us"]');

    portfolioButton.addEventListener('click', function (event) {
        event.preventDefault();

        var portfolioSection = document.getElementById('about-us');
        var offset = portfolioSection.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });
});

// Scrolls to Donate section
document.addEventListener('DOMContentLoaded', function () {
    var portfolioButton = document.querySelector('[href="#donate"]');

    portfolioButton.addEventListener('click', function (event) {
        event.preventDefault();

        var portfolioSection = document.getElementById('donate');
        var offset = portfolioSection.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });
});

// Scrolls to Contact Us section
document.addEventListener('DOMContentLoaded', function () {
    var portfolioButton = document.querySelector('[href="#contact-us"]');

    portfolioButton.addEventListener('click', function (event) {
        event.preventDefault();

        var portfolioSection = document.getElementById('contact-us');
        var offset = portfolioSection.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });
});
