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
        { name: "Verena N.", text: "Sehr zufrieden", detail: "Die Besaitung war einfach perfekt! Ich habe meinen Schläger so noch nie gefühlt. Vielen Dank für die tolle Arbeit.", stars: 5 },
        { name: "Laura K.", text: "Klasse Arbeit", detail: "Das Team hat meinen Schläger genau nach meinen Wünschen bespannt. Ich habe endlich die Kontrolle, die ich gesucht habe.", stars: 5 },
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

    let currentReviewIndex = 0;

    const reviewContainer = document.querySelector('.reviews-slider');
    const reviewName = document.querySelector('.review-name');
    const reviewText = document.querySelector('.review-text');
    const reviewDetail = document.querySelector('.review-detail');
    const reviewStars = document.querySelector('.review-stars');

    // Funktion, um eine zufällige Bewertung auszuwählen
    function getRandomReview() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * reviews.length);
        } while (randomIndex === currentReviewIndex); // Gleiche Bewertung vermeiden
        currentReviewIndex = randomIndex;
        return reviews[randomIndex];
    }

    // Funktion, um eine Bewertung anzuzeigen
    function displayReview() {
        const review = getRandomReview();

        // Bewertungselemente füllen
        reviewName.textContent = review.name;
        reviewText.textContent = review.text;
        reviewDetail.textContent = review.detail;

        // Sterne aktualisieren
        reviewStars.innerHTML = '';
        for (let i = 0; i < review.stars; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.textContent = '★';
            reviewStars.appendChild(star);
        }
    }

    // Automatischer Wechsel der Bewertungen alle 5 Sekunden
    setInterval(displayReview, 5000);

    // Sofort eine Bewertung anzeigen
    displayReview();

    // Wischen/Wechseln per Buttons
    const nextButton = document.querySelector('.next-review');
    const prevButton = document.querySelector('.prev-review');

    nextButton.addEventListener('click', displayReview);
    prevButton.addEventListener('click', displayReview);
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

