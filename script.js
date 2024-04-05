const btnLeft = document.getElementById('icon_arrow_left');
const btnRight = document.getElementById('icon_arrow_right');

const scrollContainer = document.querySelector('.scroll-container');
const scrollContent = document.querySelector('.scroll-content')

const containerWidth = scrollContainer.offsetWidth;

/*// Fonction pour faire défiler à gauche
btnLeft.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 500; // Vous pouvez ajuster cette valeur selon vos besoins
});

// Fonction pour faire défiler à droite
btnRight.addEventListener('click', () => {
    scrollContainer.scrollLeft += 500; // Vous pouvez ajuster cette valeur selon vos besoins
});*/


// Événement pour le bouton de défilement vers la gauche
btnLeft.addEventListener('click', () => {
    scrollContainer.scrollLeft -= containerWidth;
    if (scrollContainer.scrollLeft <= 0) {
        // Si on atteint le début, déplacer le dernier élément au début
        scrollContainer.scrollLeft = scrollContent.offsetWidth;
    }
});

// Événement pour le bouton de défilement vers la gauche
btnRight.addEventListener('click', () => {
    scrollContainer.scrollLeft -= containerWidth;
    if (scrollContainer.scrollLeft <= 0) {
        // Si on atteint le début, déplacer le dernier élément au début
        scrollContainer.scrollLeft = scrollContent.offsetWidth;
    }
});