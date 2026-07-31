/* =====================================
   SATYAM RAJPUT WEBSITE - SCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       CURRENT YEAR IN FOOTER
    ============================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ==============================
       SMOOTH SCROLLING
    ============================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ==============================
       NAVBAR SHADOW ON SCROLL
    ============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 5px 25px rgba(0, 0, 0, 0.5)";

        } else {

            header.style.boxShadow = "none";

        }

    });


    /* ==============================
       GALLERY HOVER EFFECT
    ============================== */

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    galleryItems.forEach(function (item) {

        item.addEventListener("mouseenter", function () {

            this.style.cursor = "pointer";

        });

    });


    /* ==============================
       BUTTON CLICK EFFECT
    ============================== */

    const buttons =
        document.querySelectorAll(
            ".instagram-button, .about-button, .nav-button"
        );

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.97)";

            setTimeout(() => {

                this.style.transform = "";

            }, 150);

        });

    });


    /* ==============================
       SIMPLE SCROLL REVEAL
    ============================== */

    const revealElements =
        document.querySelectorAll(
            ".feature, .about-box, .gallery-item, .contact-box"
        );

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(element);

    });


    /* ==============================
       INSTAGRAM BUTTON
    ============================== */

    const instagramButtons =
        document.querySelectorAll(
            'a[href*="instagram.com"]'
        );

    instagramButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log(
                "Opening Satyam Rajput Instagram profile..."
            );

        });

    });


    /* ==============================
       WELCOME MESSAGE
    ============================== */

    console.log(
        "Welcome to Satyam Rajput's website! 🚀"
    );

});