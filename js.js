// Animación de carga inicial
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    body.style.opacity = "0"; // Inicia invisible
    setTimeout(() => {
        body.style.transition = "opacity 1s ease-in-out";
        body.style.opacity = "1"; // Hace fade-in
    }, 100);
});

// Animación de fade-in al hacer scroll
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Efecto hover en los botones
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.3s ease";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

// Efecto hover en los enlaces del menú
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "#fff";
        link.style.transition = "color 0.3s ease";
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "#d4af37";
    });
});
