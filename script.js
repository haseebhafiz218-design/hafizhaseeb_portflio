// ==========================
// LOADER
// ==========================

window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("main").style.display = "block";
    }, 3000);
});

// ==========================
// TYPING EFFECT
// ==========================

const words = [
    "Full Stack Web Developer",
    "React Developer",
    "Node.js Developer",
    "WordPress Expert"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);
}

typeEffect();

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll(".skill,.project,.about-box").forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = "all .8s ease";

    observer.observe(el);

});

// EmailJS Contact Form

emailjs.init("4fS1fCS9CFTI3XFna");

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
        "service_v27dda3",
        "tamplate_9i07qce",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        this.reset();
    })
    .catch((error) => {
        alert("Message failed!");
        console.log(error);
    });
});