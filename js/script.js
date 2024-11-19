const menuToggle = document.querySelector('.menu-toggle');
const navLeft = document.querySelector('.nav-left');

menuToggle.addEventListener('click', () => {
    navLeft.classList.toggle('show'); // Zeigt oder versteckt die Navbar
});
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Andere offene FAQs schließen
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('open');
                }
            });

            // Aktuelles FAQ umschalten
            item.classList.toggle('open');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const reviews = [
        { name: "Kris N.", text: "Perfekt!", detail: "Fantastischer Service! Meine Schläger fühlen sich wie neu an. Absolut professionell und zuverlässig.", stars: 5 },
        { name: "Verena N..", text: "Sehr zufrieden", detail: "Die Besaitung war einfach perfekt! Ich habe meinen Schläger so noch nie gefühlt. Vielen Dank für die tolle Arbeit.", stars: 5 },
        { name: "Laura K..", text: "Klasse Arbeit", detail: "Das Team hat meinen Schläger genau nach meinen Wünschen bespannt. Ich habe endlich die Kontrolle, die ich gesucht habe.", stars: 5 },
        { name: "Chris F.", text: "Top Qualität", detail: "Ich bin begeistert! Die Besaitung wurde schnell und mit hoher Präzision durchgeführt. Klare Empfehlung!", stars: 5 },
        { name: "Lena N.", text: "Einfach super!", detail: "Die Beratung war sehr freundlich und die Ergebnisse sprechen für sich. Mein Spiel hat sich sofort verbessert.", stars: 5 },
        { name: "Oliver R.", text: "Rundum zufrieden", detail: "Ein großartiger Service, der auf meine individuellen Wünsche eingegangen ist. Immer wieder gerne!", stars: 5 },
        { name: "Adel T.", text: "Hervorragend", detail: "Ich habe selten so einen professionellen Service erlebt. Vielen Dank für die schnelle Bearbeitung!", stars: 5 },
        { name: "Alexander Z.", text: "Toller Service", detail: "Ich fühle mich jedes Mal bestens aufgehoben. Mein Schläger ist immer perfekt bespannt.", stars: 5 },
        { name: "Amar L.", text: "Einfach perfekt", detail: "Ich spiele seit Jahren Tennis, aber diese Besaitung war die beste, die ich je hatte. Danke!", stars: 5 },
        { name: "Tim S.", text: "Beeindruckend", detail: "Hervorragender Service und schnelle Umsetzung. Das Team weiß, was es tut!", stars: 5 },
        { name: "Kresimir S.", text: "Sehr zufrieden", detail: "Von der Beratung bis zur Umsetzung – alles perfekt. Mein Spiel ist deutlich besser geworden.", stars: 5 },
        { name: "Branimir S.", text: "Top Leistung", detail: "Alles lief reibungslos und das Ergebnis ist genau das, was ich erwartet habe. Danke!", stars: 5 },
        { name: "Roland T.", text: "Wunderbar", detail: "Ich bin total begeistert. Mein Schläger fühlt sich jetzt wie neu an. Das war es definitiv wert.", stars: 5 },
        { name: "Afan K.", text: "Einfach klasse!", detail: "Danke für den großartigen Service. Meine Schläger sind immer perfekt bespannt.", stars: 5 },
        { name: "Bryan D.", text: "Beste Besaitung!", detail: "Ich war noch nie so zufrieden mit meinem Schläger. Vielen Dank für die tolle Arbeit.", stars: 5 },
        { name: "Louis C.", text: "Beeindruckend", detail: "Die Qualität ist wirklich hervorragend. Ich werde auf jeden Fall wiederkommen.", stars: 4 },
        { name: "Elias M.", text: "Sehr gut", detail: "Freundlicher Service und eine perfekte Besaitung. Ich bin sehr zufrieden mit dem Ergebnis.", stars: 4 },
        { name: "Patrick S.", text: "Zuverlässig", detail: "Alles wurde genau nach meinen Wünschen umgesetzt. Vielen Dank für die tolle Arbeit!", stars: 4 },
        { name: "Ilona J.", text: "Empfehlenswert", detail: "Der Service hat mich wirklich überzeugt. Mein Schläger fühlt sich jetzt großartig an.", stars: 4 },
        { name: "Isa J.", text: "Tolle Qualität", detail: "Mein Schläger ist perfekt bespannt und fühlt sich großartig an. Ich komme gerne wieder.", stars: 4 },
        { name: "Phillip J.", text: "Guter Service", detail: "Ich bin zufrieden mit der Besaitung und der Beratung. Es war definitiv die richtige Wahl.", stars: 4 },
        { name: "Nils B.", text: "Sehr professionell", detail: "Ich bin begeistert von der Qualität und dem freundlichen Service. Vielen Dank!", stars: 4 },
        { name: "Florian B.", text: "Einfach super", detail: "Alles lief reibungslos und das Ergebnis hat mich überzeugt. Mein Schläger ist perfekt!", stars: 4 }
    ];

    const slider = document.querySelector('.review-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Funktion: Bewertungen dynamisch einfügen
    function renderReviews() {
        slider.innerHTML = reviews
            .map(review => `
                <div class="review-item">
                    <p class="review-text"><strong>${review.text}</strong></p>
                    <p class="review-detail">"${review.detail}"</p>
                    <span class="review-name">- ${review.name}</span>
                    <span class="stars">${"★".repeat(review.stars)}${"☆".repeat(5 - review.stars)}</span>
                </div>
            `)
            .join('');
        updateActiveReview();
    }

    // Funktion: Zeigt die aktive Bewertung
    function updateActiveReview() {
        const items = document.querySelectorAll('.review-item');
        items.forEach((item, index) => {
            item.classList.remove('active');
            item.style.display = 'none';
            if (index === currentIndex) {
                item.classList.add('active');
                item.style.display = 'block';
            }
        });
    }

    // Nächste Bewertung anzeigen
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % reviews.length;
        updateActiveReview();
    });

    // Vorherige Bewertung anzeigen
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        updateActiveReview();
    });

    // Bewertungen automatisch anzeigen lassen
    function autoSlide() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % reviews.length;
            updateActiveReview();
        }, 5000); // Alle 5 Sekunden
    }

    renderReviews();
    autoSlide();
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

