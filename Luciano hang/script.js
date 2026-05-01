document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(el => observer.observe(el));

    // Irreverent Greeting
    console.log("%cBRASIL ACIMA DE TUDO! 🇧🇷", "color: #009c3b; font-size: 30px; font-weight: bold; text-shadow: 2px 2px #ffdf00;");
    console.log("%cBem-vindo ao site do Luciano Hang. Vamos acelerar!", "color: #002776; font-size: 18px;");

    // Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
