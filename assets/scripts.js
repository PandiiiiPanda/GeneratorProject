const liste=["Page de présentation personnelle", "CV en ligne", "Carte de visite digitale", "Formulaire de contact stylisé", "Tableau de tarifs (pricing table)", "Bouton animé", "Loader / spinner CSS", "Page de menu de restaurant", "Galerie d'images responsive", "Navbar responsive (sans JS)", "Compteur (+ / - / reset)", "Changeur de couleur de fond", "Horloge numérique", "Calculatrice simple", "Générateur de citations aléatoires", "Mode sombre / clair (toggle)", "Menu burger", "Accordéon (FAQ)", "Générateur de mot de passe", "Convertisseur de température / devises", "To-do list", "To-do list avec localStorage", "Carrousel / slider d'images", "Quiz interactif", "Jeu du Pendu", "Jeu Pierre-Feuille-Ciseaux", "Application météo (API)", "Filtre de liste en temps réel (search bar)", "Validation de formulaire en JS", "Chronomètre / minuteur Pomodoro", "Galerie avec lightbox (modale)", "Tri et filtre de produits (mini e-commerce)", "Calculateur d'IMC", "Générateur de palette de couleurs", "Jeu de mémoire (memory cards)", "Morpion (Tic-Tac-Toe) avec IA simple", "Jeu du Snake (Canvas)", "Application de notes (CRUD complet)", "Kanban board avec drag & drop", "Lecteur de musique personnalisé", "Éditeur Markdown avec aperçu en direct", "Dashboard avec graphiques", "Recherche de films (API TMDB)", "Infinite scroll", "Calendrier interactif", "Mini-SPA avec routeur maison", "Application PWA (installable, hors-ligne)",];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// Tableau des données + randomisation //
const roulette = document.querySelector("#roulette");

roulette.textContent = liste[getRandomInt(liste.length)];

const start = document.querySelector("#start");
const startLabel = start.querySelector(".start-label");
const resultCount = document.querySelector("#result-count");

start.addEventListener("click", () => {
  start.disabled = true;
  startLabel.textContent = "Sélection en cours";
  roulette.classList.add("is-spinning");
  resultCount.textContent = "Recherche";

  let interval = setInterval(() => {
    roulette.textContent = liste[getRandomInt(liste.length)];
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
    localStorage.setItem("projectIdeas", JSON.stringify(roulette.textContent));
    roulette.classList.remove("is-spinning");
    startLabel.textContent = "Générer un autre";
    resultCount.textContent = "Projet sélectionné";
    start.disabled = false;
    start.focus();
  }, 2000);
});

const sujetSauvegarder = localStorage.getItem("projectIdeas");
if (sujetSauvegarder) {
  roulette.textContent = JSON.parse(sujetSauvegarder);
}






