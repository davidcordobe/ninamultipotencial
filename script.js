const mp = new MercadoPago("APP_USR-6d656134-6424-45a5-b9e6-f4d9f11ccb59", {
    locale: "es-AR",
});

// Botones Mercado Pago
document.querySelectorAll(".mp-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const preferenceId = btn.getAttribute("data-preference");
        mp.checkout({ preference: { id: preferenceId }, autoOpen: true });
    });
});

// Reveal animaciones
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// FAQ toggle
document
    .querySelectorAll(".faq-item")
    .forEach((item) =>
        item.addEventListener("click", () => item.classList.toggle("active"))
    );

// Dynamic text
const dynamicText = document.querySelector(".dynamic-text");
const words = ["Carrera", "Negocio", "Éxito", "Futuro"];
let i = 0;
setInterval(() => {
    dynamicText.textContent = words[i];
    i = (i + 1) % words.length;
}, 2000);

// Progress bar
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    document.getElementById("progress-bar").style.width =
        (scrollTop / docHeight) * 100 + "%";
});

// Cards 3D
document.querySelectorAll(".course-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const dx = (x - cx) / cx;
        const dy = (y - cy) / cy;
        card.style.transform = `rotateY(${dx * 10}deg) rotateX(${-dy * 10}deg)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});

// Particles
tsParticles.load("tsparticles", {
    background: {
        color: { value: "transparent" }
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 }
        }
    },
    particles: {
        color: { value: ["#d8c3a5", "#eae7dc", "#c8ad7f"] }, /* tonos arena/beige */
        links: {
            color: "#d8c3a5",
            distance: 150,
            enable: false,
            opacity: 0.3,
            width: 1
        },
        move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 0.8,
            straight: false
        },
        number: { value: 50, density: { enable: true, area: 800 } },
        opacity: { value: 0.4 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } }
    },
    detectRetina: true
});

// Parallax
window.addEventListener("scroll", () => {
    document.querySelectorAll(".header-bg,.header-layers").forEach((el) => {
        const offset = window.scrollY * 0.3;
        el.style.transform = `translateY(${offset}px)`;
    });
});


document.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add("active");
    });
});




