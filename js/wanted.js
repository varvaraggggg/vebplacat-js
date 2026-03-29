document.addEventListener('DOMContentLoaded', function() {
    const wanted = document.getElementById('wanted');
    const money = document.querySelector('.money');

    if (wanted && money) {
        wanted.onclick = function() {
            wanted.classList.add('wanted-anim');
            money.classList.add('money-anim');
        };
    }
});