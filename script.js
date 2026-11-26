
// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const allNavLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close menu after clicking a navigation link

allNavLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ==============================
// CURRENT YEAR
// ==============================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "home";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    allNavLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});
