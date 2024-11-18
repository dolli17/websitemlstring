const menuToggle = document.querySelector('.menu-toggle');
const navLeft = document.querySelector('.nav-left');

menuToggle.addEventListener('click', () => {
    navLeft.classList.toggle('show'); // Zeigt oder versteckt die Navbar
});

document.addEventListener('DOMContentLoaded', () => {
    const text = "String it right.\nAce your game!"; // Text mit Zeilenumbruch
    const typingText = document.getElementById("typing-text");
    const blinkingCursor = document.querySelector(".blinking-cursor");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            const currentChar = text.charAt(index);
            if (currentChar === "\n") {
                typingText.innerHTML += "<br>"; // Zeilenumbruch
            } else {
                typingText.innerHTML += currentChar; // Zeichen schreiben
            }
            index++;
            setTimeout(typeWriter, 200); // Geschwindigkeit des Schreibens
        } else {
            blinkingCursor.style.display = "none"; // Blinker vollständig entfernen
        }
    }

    typeWriter(); // Schreibanimation starten
});

