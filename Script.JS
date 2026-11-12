// =========================================
// FITUR 1: DARK MODE TOGGLE
// =========================================

const darkToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "active") {
    body.classList.add("dark-mode");

    if (darkToggle) {
        darkToggle.textContent = "☀️";
    }
}

if (darkToggle) {
    darkToggle.addEventListener("click", function () {

        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            darkToggle.textContent = "☀️";
            localStorage.setItem("darkMode", "active");
        } else {
            darkToggle.textContent = "🌙";
            localStorage.setItem("darkMode", "inactive");
        }

    });
}


// =========================================
// FITUR 2: MOBILE HAMBURGER MENU
// =========================================

const hamburger = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("main-nav");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            hamburger.innerHTML = "✕";
        } else {
            hamburger.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;
        }

    });

    // Tutup menu setelah link diklik
    const navLinks = document.querySelectorAll("#main-nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            hamburger.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;

        });

    });
}


// =========================================
// FITUR 3: CONTACT FORM
// =========================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const nama = document.getElementById("name").value;

        if (formStatus) {

            formStatus.textContent =
                `✅ Terima kasih ${nama}! Pesan Anda telah diterima.`;

            formStatus.style.color = "green";

        }

        contactForm.reset();

        setTimeout(function () {

            if (formStatus) {
                formStatus.textContent = "";
            }

        }, 5000);

    });

}


// =========================================
// FITUR 4: SCROLL REVEAL ANIMATION
// =========================================

const sections = document.querySelectorAll("section");

function revealOnScroll() {

    sections.forEach(function (section) {

        const sectionTop =
            section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

}


// Setup awal
sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================================
// FITUR 5: TYPING EFFECT
// =========================================

const heroTitle = document.querySelector(".hero h2");

if (heroTitle) {

    const text = heroTitle.textContent;

    heroTitle.textContent = "";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            heroTitle.textContent += text.charAt(i);

            i++;

            setTimeout(typeWriter, 80);

        }

    }

    window.addEventListener("load", typeWriter);

}


// =========================================
// WEBSITE SELESAI DIMUAT
// =========================================

console.log(
    "🎉 Website berhasil dimuat!"
);