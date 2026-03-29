document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
        'Привет ковбой',
        'Поскакали на ранчо',
        'Классная шляпа',
        'Иго го',
        'Галоп - моя слабость',
        'Дикий дикий запад'
    ];
    
    const dialog = document.querySelector('.dialogimage');
    const random = document.querySelector('.dialogcontainer p');
    dialog.addEventListener('click', function() {

        const randomphrase = Math.floor(Math.random() * phrases.length);

        random.textContent = phrases[randomphrase];
    });
});