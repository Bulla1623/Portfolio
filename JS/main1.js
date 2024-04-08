const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");

menuIcon.addEventListener("click", toggleMenu);
window.addEventListener("scroll", highlightSection);

const homeContentConfig = {
    elements: ".home-content, .heading",
    config: { origin: "top", distance: "80px", duration: 2000, delay: 200 },
};

const homeImgConfig = {
    elements: ".home-img, .services-container, .portfolio-box, .contact-form",
    config: { origin: "bottom", distance: "80px", duration: 2000, delay: 200 },
};

const homeContactConfig = {
    elements: ".home-contact h1, .about-img",
    config: { origin: "left", distance: "80px", duration: 2000, delay: 200 },
};

const aboutContentConfig = {
    elements: ".home-contact p, .about-content",
    config: { origin: "right", distance: "80px", duration: 2000, delay: 200 },
};

scrollRevealConfig([homeContentConfig, homeImgConfig, homeContactConfig, aboutContentConfig]);

ScrollReveal().reveal(".contact-form", {
    origin: "bottom",
    distance: "100px",
    duration: 2500,
    delay: 500,
});

const typed = new Typed(".multiple-text", {
    strings: ["Developer", "Artist", "Photolover"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

function toggleMenu() {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
}

function highlightSection() {
    const scrollY = window.scrollY;
    sections.forEach((section) => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach((link) => link.classList.remove("active"));
            document.querySelector(`header nav a[href="#${id}"]`).classList.add("active");
        }
    });

    header.classList.toggle("sticky", window.scrollY > 100);

    if (navbar.classList.contains("active")) {
        menuIcon.classList.remove("fa-xmark");
        navbar.classList.remove("active");
    }
}

function scrollRevealConfig(configs) {
    configs.forEach((config) => ScrollReveal().reveal(config.elements, config.config));
}
