const squareEl = document.querySelectorAll('.square');

let click = 0;

squareEl.forEach((square) => {

    square.addEventListener('click', () => {
        square.style.backgroundRepeat = "no-repeat"
        square.style.backgroundPosition = "center"
    }
    );
});