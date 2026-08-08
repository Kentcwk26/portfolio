const typingEffect = () => {
    const text = "Hi, this is Kent";
    const typingElement = document.querySelector(".typing-effect");
    let index = 0;

    const type = () => {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                typingElement.textContent = "";
                index = 0;
                type();
            }, 2000);
        }
    };

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
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

function getDayOfYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function updateProgressValues() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentDayOfYear = getDayOfYear(currentDate);
    const totalDays = isLeapYear(currentYear) ? 366 : 365;
    const negativeCountdown = -(totalDays - currentDayOfYear);

    document.getElementById("current-day").innerText = currentDayOfYear.toFixed(2);
    document.getElementById("total-days").innerText = negativeCountdown.toFixed(2);

    const progressPercent = (currentDayOfYear / totalDays) * 100;
    document.querySelector(".progress-line").style.width = progressPercent + "%";
}

document.addEventListener("DOMContentLoaded", updateProgressValues);

document.getElementById("year").textContent = new Date().getFullYear();