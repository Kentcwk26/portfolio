const typingEffect = () => {
    const text = "Hi, this is Kent";
    const typingElement = document.querySelector(".typing-effect");
    let index = 0;

    const type = () => {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Typing speed
        } else {
            setTimeout(() => {
                typingElement.textContent = ""; // Clear text
                index = 0; // Reset index
                type(); // Restart typing
            }, 2000); // Delay before restarting
        }
    };

    // Start the typing effect
    type();
};

window.onload = () => {
    typingEffect();
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Remove class when out of view
            }
        });
    }, { threshold: 0.1 }); // Trigger animation when 30% of the section is visible

    sections.forEach(section => {
        observer.observe(section);
    });
});