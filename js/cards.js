document.addEventListener('DOMContentLoaded', function() {
    
    const popups = [
        { card: 'card1', popupid: 'popup1' },
        { card: 'card2', popupid: 'popup2' },
        { card: 'card3', popupid: 'popup3' },
        { card: 'card4', popupid: 'popup4' },
        { card: 'card5', popupid: 'popup5' }
    ];

    function openPopup(popup) {
        popup.style.display = 'flex';
    }
    
    function closePopup(popup) {
        popup.style.display = 'none';
    }
    popups.forEach(config => {
        const card = document.querySelector('.' + config.card);
        const popup = document.getElementById(config.popupid);
        if (card && popup) {
            card.addEventListener('click', function() {
                openPopup(popup);
            });
            
            popup.addEventListener('click', function(event) {
                if (event.target === popup) {
                    closePopup(popup);
                }
            });
        }
    });
});