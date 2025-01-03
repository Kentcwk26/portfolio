// Typing effect
const typingEffect = () => {
    const text = "Hi, this is Kent";
    const typingElement = document.querySelector(".typing-effect");
    let index = 0;

    const type = () => {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    };

    // Clear previous text and start the typing effect
    typingElement.textContent = "";
    type();
};

window.onload = () => {
    typingEffect();
};
