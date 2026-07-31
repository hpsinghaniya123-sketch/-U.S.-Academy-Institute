// ========================================
// U.S ACADEMY & INSTITUTE
// Website JavaScript
// ========================================


// ========================================
// CURRENT YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}



// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Stop the page from refreshing
        event.preventDefault();


        // Get form values
        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();



        // Check required fields
        if (name === "" || email === "" || message === "") {

            formMessage.textContent =
                "Please fill in all required fields.";

            formMessage.style.color = "red";

            return;
        }



        // Check email format
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color = "red";

            return;
        }



        // Show success message
        formMessage.textContent =
            "Thank you, " + name +
            "! Your message has been received.";

        formMessage.style.color = "green";


        // Clear the form
        contactForm.reset();

    });

}



// ========================================
// SMOOTH NAVIGATION
// ========================================

const navigationLinks =
    document.querySelectorAll("nav a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});



// ========================================
// SCROLL ANIMATION
// ========================================

const animatedElements =
    document.querySelectorAll(
        ".quick-card, .facility-card, .discipline-card, .why-grid > div"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );



animatedElements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});



// ========================================
// FLOATING CALL BUTTON
// ========================================

const floatingCall =
    document.querySelector(".floating-call");


if (floatingCall) {

    floatingCall.addEventListener("click", function() {

        console.log(
            "Calling U.S ACADEMY & INSTITUTE: 9935650036"
        );

    });

}



// ========================================
// PAGE LOADED MESSAGE
// ========================================

window.addEventListener("load", function() {

    console.log(
        "U.S ACADEMY & INSTITUTE website loaded successfully."
    );

});