document.addEventListener('DOMContentLoaded', function() {
    const gun = document.getElementById('gun');
    const bullet = document.querySelector('.bullet');
    const counter = document.querySelector('.counter p');
    let shots = 4;
    
    gun.addEventListener('click', function() {
        if (shots > 0) {
            bullet.classList.remove('bullet-animation');
            bullet.offsetHeight;
            bullet.classList.add('bullet-animation');

            shots--;
            counter.textContent = 'Счетчик: ' + shots;
            document.querySelector('.hole' + (4 - shots)).style.opacity = '1';
        } else {
            shots = 4;
            counter.textContent = 'Счетчик: 4';
            for (let i = 1; i <= 4; i++) {
                document.querySelector('.hole' + i).style.opacity = '0';
            }
        }
    });
});