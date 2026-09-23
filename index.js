// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    section.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {
    observer.observe(section);
});


// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

const navLinks = document.querySelectorAll(".links a");

const pageSections = document.querySelectorAll(
    "#about, #skills, #projects, #experience, #contact"
);


window.addEventListener("scroll", () => {

    let currentSection = "";

    pageSections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.querySelector("#contact form");
const submitButton = contactForm.querySelector("button");
const buttonText = submitButton.querySelector(".button-text");
const loader = submitButton.querySelector(".loader");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    buttonText.textContent = "Sending...";
    loader.style.display = "inline-block";

    submitButton.disabled = true;


    setTimeout(() => {

        buttonText.textContent = "Message Sent ✓";
        loader.style.display = "none";

        contactForm.reset();

        submitButton.disabled = false;

    }, 1500);

});