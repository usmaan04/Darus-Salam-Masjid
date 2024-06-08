// Scrolls to Home section
document.addEventListener('DOMContentLoaded', function () {
    var portfolioButton = document.querySelector('[href="#header"]');

    portfolioButton.addEventListener('click', function (event) {
        event.preventDefault();

        var portfolioSection = document.getElementById('header');
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

// Scrolls to Prayer Times section
document.addEventListener('DOMContentLoaded', function () {
    var portfolioButton = document.querySelector('[href="#prayer-times2"]');

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

// Scrolls to About Us section
document.addEventListener('DOMContentLoaded', function () {
    var portfolioButton = document.querySelector('[href="#about-us2"]');

    portfolioButton.addEventListener('click', function (event) {
        event.preventDefault();

        var portfolioSection = document.getElementById('contact-us');
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

// Scrolls to Donate section
document.addEventListener('DOMContentLoaded', function () {
    var portfolioButton = document.querySelector('[href="#donate2"]');

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

// Scrolls to Contact Us section
document.addEventListener('DOMContentLoaded', function () {
    var portfolioButton = document.querySelector('[href="#contact-us2"]');

    portfolioButton.addEventListener('click', function (event) {
        event.preventDefault();

        var portfolioSection = document.getElementById('contact-us');
        var offset = portfolioSection.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar-middle a');
    const sections = document.querySelectorAll('section');
    
    function activateLink() {
        const buffer = 40; 
        
        let index = sections.length;

        while(--index && window.scrollY + buffer < sections[index].offsetTop) {}

        navbarLinks.forEach((link) => link.classList.remove('option-selected'));
        if (index >= 0) {
            const currentSection = sections[index];
            navbarLinks.forEach(link => {
                if (link.getAttribute('href').substring(1) === currentSection.id) {
                    link.classList.add('option-selected');
                }
            });
        }
    }

    activateLink();
    window.addEventListener('scroll', activateLink);
});
