document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.querySelector('.nav-container');
    const leftNavImage = document.querySelector('.left-nav img');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navContainer.classList.remove('transparent');
            navContainer.classList.add('scrolled');
            leftNavImage.src = "https://www.felixhomes.com/images/logo_black.svg";
        } else {
            navContainer.classList.remove('scrolled');
            navContainer.classList.add('transparent');
            leftNavImage.src = "https://www.felixhomes.com/images/logo_white.svg";
        }
    });

    // Initialize as transparent
    navContainer.classList.add('transparent');
});


/// hiding text lines
