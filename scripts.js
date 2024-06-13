document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('open');
        });
    });
});

function shareMenu() {
    const shareData = {
        title: 'Menu della Sagra',
        text: 'Scopri il menu della Sagra!',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Menu condiviso con successo'))
            .catch((error) => console.log('Errore nella condivisione:', error));
    } else {
        // Copia il link negli appunti per i browser che non supportano l'API di condivisione
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('Link copiato negli appunti'))
            .catch((error) => console.log('Errore nella copia del link:', error));
    }
}

