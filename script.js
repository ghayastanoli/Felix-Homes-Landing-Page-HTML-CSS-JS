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


/// hamburger

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-btn');

function toggleMenu() {
  mobileNav.classList.toggle('active');
}

mobileMenuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    mobileNav.classList.remove('active');
  }
});


/*---------------------------------*/
