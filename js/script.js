const reviews = [
  { name: "Adrian P.",    text: "Unschlagbar im Spiel.",  detail: "Durch meine neue ML-Stringservice-Besaitung konnte ich nie zuvor erreichte Leistungen erzielen. Ich bin mehr als glücklich, meinen Tennisschläger hier besaitet zu haben.", stars: 5 },
  { name: "Kris N.",      text: "Perfekt!",               detail: "Fantastischer Service! Meine Schläger fühlen sich wie neu an. Absolut professionell und zuverlässig.", stars: 5 },
  { name: "Verena N.",    text: "Sehr zufrieden.",        detail: "Die Besaitung war einfach perfekt! Ich habe meinen Schläger so noch nie gefühlt. Vielen Dank für die tolle Arbeit.", stars: 5 },
  { name: "Lauritz M.",   text: "Klasse Arbeit.",         detail: "Das Team hat meinen Schläger genau nach meinen Wünschen bespannt. Ich habe endlich die Kontrolle, die ich gesucht habe.", stars: 5 },
  { name: "Chris F.",     text: "Top Qualität.",          detail: "Ich bin begeistert! Die Besaitung wurde schnell und mit hoher Präzision durchgeführt. Klare Empfehlung!", stars: 5 },
  { name: "Lena N.",      text: "Einfach super.",         detail: "Die Beratung war sehr freundlich und die Ergebnisse sprechen für sich. Mein Spiel hat sich sofort verbessert.", stars: 5 },
  { name: "Oliver R.",    text: "Rundum zufrieden.",      detail: "Ein großartiger Service, der auf meine individuellen Wünsche eingegangen ist. Immer wieder gerne!", stars: 5 },
  { name: "Adel T.",      text: "Hervorragend.",          detail: "Ich habe selten so einen professionellen Service erlebt. Vielen Dank für die schnelle Bearbeitung!", stars: 5 },
  { name: "Alexander Z.", text: "Toller Service.",        detail: "Ich fühle mich jedes Mal bestens aufgehoben. Mein Schläger ist immer perfekt bespannt.", stars: 5 },
  { name: "Amar L.",      text: "Einfach perfekt.",       detail: "Ich spiele seit Jahren Tennis, aber diese Besaitung war die beste, die ich je hatte. Danke!", stars: 5 },
  { name: "Tim S.",       text: "Beeindruckend.",         detail: "Hervorragender Service und schnelle Umsetzung. Das Team weiß, was es tut!", stars: 5 },
  { name: "Kresimir S.",  text: "Sehr zufrieden.",        detail: "Von der Beratung bis zur Umsetzung – alles perfekt. Mein Spiel ist deutlich besser geworden.", stars: 5 },
  { name: "Branimir S.",  text: "Top Leistung.",          detail: "Alles lief reibungslos und das Ergebnis ist genau das, was ich erwartet habe. Danke!", stars: 5 },
  { name: "Roland T.",    text: "Wunderbar.",             detail: "Ich bin total begeistert. Mein Schläger fühlt sich jetzt wie neu an. Das war es definitiv wert.", stars: 5 },
  { name: "Afan K.",      text: "Einfach klasse!",        detail: "Danke für den großartigen Service. Meine Schläger sind immer perfekt bespannt.", stars: 5 },
  { name: "Bryan D.",     text: "Beste Besaitung!",       detail: "Ich war noch nie so zufrieden mit meinem Schläger. Vielen Dank für die tolle Arbeit.", stars: 5 },
  { name: "Louis C.",     text: "Beeindruckend.",         detail: "Die Qualität ist wirklich hervorragend. Ich werde auf jeden Fall wiederkommen.", stars: 4 },
  { name: "Elias M.",     text: "Sehr gut.",              detail: "Freundlicher Service und eine perfekte Besaitung. Ich bin sehr zufrieden mit dem Ergebnis.", stars: 4 },
  { name: "Patrick S.",   text: "Zuverlässig.",           detail: "Alles wurde genau nach meinen Wünschen umgesetzt. Vielen Dank für die tolle Arbeit!", stars: 4 },
  { name: "Jules F.",     text: "Empfehlenswert.",        detail: "Der Service hat mich wirklich überzeugt. Mein Schläger fühlt sich jetzt großartig an.", stars: 4 },
  { name: "Isa J.",       text: "Tolle Qualität.",        detail: "Mein Schläger ist perfekt bespannt und fühlt sich großartig an. Ich komme gerne wieder.", stars: 4 },
  { name: "Phillip J.",   text: "Guter Service.",         detail: "Ich bin zufrieden mit der Besaitung und der Beratung. Es war definitiv die richtige Wahl.", stars: 4 },
  { name: "Nils B.",      text: "Sehr professionell.",    detail: "Ich bin begeistert von der Qualität und dem freundlichen Service. Vielen Dank!", stars: 4 },
  { name: "Florian B.",   text: "Einfach super.",         detail: "Alles lief reibungslos und das Ergebnis hat mich überzeugt. Mein Schläger ist perfekt!", stars: 4 }
];

const rHead = document.getElementById('review-headline');
const rDet  = document.getElementById('review-detail');
const rName = document.getElementById('review-name');
const rStar = document.getElementById('review-stars');
const rIdx  = document.getElementById('review-idx');
let rCur = 0;

function showReview(i) {
  const r = reviews[i];
  rHead.textContent = '\u201C' + r.text + '\u201D';
  rDet.textContent  = r.detail;
  rName.textContent = '\u2014 ' + r.name;
  rStar.textContent = '\u2605'.repeat(r.stars) + '\u2606'.repeat(5 - r.stars);
  rIdx.textContent  = String(i + 1).padStart(2, '0') + ' / ' + String(reviews.length).padStart(2, '0');
}
showReview(0);

document.getElementById('review-next').addEventListener('click', () => {
  rCur = (rCur + 1) % reviews.length;
  showReview(rCur);
});
document.getElementById('review-prev').addEventListener('click', () => {
  rCur = (rCur - 1 + reviews.length) % reviews.length;
  showReview(rCur);
});
setInterval(() => {
  rCur = (rCur + 1) % reviews.length;
  showReview(rCur);
}, 6000);

document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('is-open');
});
