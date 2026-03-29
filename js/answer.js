document.addEventListener('DOMContentLoaded', function() {
    const answerinput = document.querySelector('.answerinput');
    const correct = document.querySelector('.correct');
    const wrong = document.querySelector('.wrong');

    const correctanswers = ['мел', 'мелок'];
    
    answerinput.addEventListener('input', function() {
        const answer = this.value.trim().toLowerCase();
        correct.style.opacity = '0';
        wrong.style.opacity = '0';
        
        if (answer !== '') {
            if (correctanswers.includes(answer)) {
                correct.style.opacity = '1';
            } else {
                wrong.style.opacity = '1';
            }
        }
    });
});