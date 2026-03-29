document.addEventListener('DOMContentLoaded', function() {
    const parts = document.querySelectorAll('#part');
    const restart = document.getElementById('restart');
    
    function checkwords() {
        let allFound = true;
        parts.forEach(element => {
            if (!element.classList.contains('special')) {
                allFound = false;
            }
        });
        
        if (allFound) {
            setTimeout(function() {
                alert('Поздравляю, вы нашли все слова!\n\nОказывается и в кантри, и в русской народной музыке присутствует мощная струя бунтарства и вольницы.');
            }, 500);
        }
    }
    
    parts.forEach(element => {
        element.addEventListener('click', function() {
            this.classList.add('special');
            checkwords();
        });
    });
    
    restart.addEventListener('click', function() {
        parts.forEach(element => {
            element.classList.remove('special');
        });
        checkwords();
    });
});