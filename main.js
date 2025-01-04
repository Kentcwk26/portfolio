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
