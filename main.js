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

// Function to get current day of the year
function getDayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Function to check if it's a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Function to update progress values dynamically
function updateProgressValues() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    // Get current day of the year
    const currentDayOfYear = getDayOfYear(currentDate);
    
    // Get total days in the year (365 or 366 for leap years)
    const totalDays = isLeapYear(currentYear) ? 366 : 365;
    
    // Calculate the negative countdown (e.g., -365, -364, ..., -1)
    const negativeCountdown = -(totalDays - currentDayOfYear);

    // Update the progress bar values
    document.getElementById("current-day").innerText = currentDayOfYear.toFixed(2);
    document.getElementById("total-days").innerText = negativeCountdown.toFixed(2);
}

// Run function when page loads
document.addEventListener("DOMContentLoaded", updateProgressValues);
