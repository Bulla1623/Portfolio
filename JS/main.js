// /*Toggle navbar*/
// let menuIcon = document.querySelector('.menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.addEventListener('click', () => {
//     navbar.classList.toggle('active');
//     menuIcon.classList.toggle('fa-bars');
//     menuIcon.classList.toggle('fa-xmark');
// });

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('.menu-icon');
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
}

/* Scroll Active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });

    /**Sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /**remove toggle icon and navbar*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
});

/**Scroll reveal */

/*
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

*/
ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left', distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right', distance: '80px', duration: 2000, delay: 200 });

/***Typed JS */
const typed = new Typed('.multiple-text', {
    strings: ['Developer', 'Artist', 'Photolover'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
