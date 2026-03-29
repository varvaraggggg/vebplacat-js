document.addEventListener('DOMContentLoaded', () => {
    // перетаскивание шпор
    document.querySelectorAll('.shpora').forEach(shpora => {
        shpora.onpointerdown = function(e) {
            e.preventDefault();
            shpora.setPointerCapture(e.pointerId);

            const container = document.querySelector('.bootcontainer');
            const rect = container.getBoundingClientRect();

            let shiftX = e.clientX - shpora.getBoundingClientRect().left;
            let shiftY = e.clientY - shpora.getBoundingClientRect().top;

            function move(pageX, pageY) {
                let newX = pageX - rect.left - window.scrollX - shiftX;
                let newY = pageY - rect.top - window.scrollY - shiftY;

                if (newX < 0) newX = 0;
                let rightEdge = rect.width - shpora.offsetWidth;
                if (newX > rightEdge) newX = rightEdge;

                if (newY < 0) newY = 0;
                let bottomEdge = rect.height - shpora.offsetHeight;
                if (newY > bottomEdge) newY = bottomEdge;

                shpora.style.left = newX + 'px';
                shpora.style.top = newY + 'px';
            }

            function inmove(e) {
                move(e.pageX, e.pageY);
            }

            shpora.addEventListener('pointermove', inmove);

            shpora.onpointerup = function() {
                shpora.removeEventListener('pointermove', inmove);
                shpora.onpointerup = null;
                shpora.releasePointerCapture(e.pointerId);
            };
        };

        shpora.ondragstart = () => false;
        shpora.style.touchAction = 'none';
    });
    
    // перетаскивание кружка
    const ball = document.querySelector('.ball');
    if (ball) {
        ball.onpointerdown = function(e) {
            e.preventDefault();
            ball.setPointerCapture(e.pointerId);
            
            ball.classList.add('over');

            const container = document.querySelector('.labirint');
            const rect = container.getBoundingClientRect();

            let shiftX = e.clientX - ball.getBoundingClientRect().left;
            let shiftY = e.clientY - ball.getBoundingClientRect().top;

            function move(pageX, pageY) {
                let newX = pageX - rect.left - window.scrollX - shiftX;
                let newY = pageY - rect.top - window.scrollY - shiftY;
                
                if (newX < 0) newX = 0;
                let rightEdge = rect.width - ball.offsetWidth;
                if (newX > rightEdge) newX = rightEdge;

                if (newY < 0) newY = 0;
                let bottomEdge = rect.height - ball.offsetHeight;
                if (newY > bottomEdge) newY = bottomEdge;

                ball.style.left = newX + 'px';
                ball.style.top = newY + 'px';
            }

            function inmove(e) {
                move(e.pageX, e.pageY);
            }

            ball.addEventListener('pointermove', inmove);
            ball.onpointerup = function() {
                ball.removeEventListener('pointermove', inmove);
                ball.onpointerup = null;
                ball.releasePointerCapture(e.pointerId);
            }; 
        };

        ball.ondragstart = () => false;
        ball.style.touchAction = 'none';
    }
});