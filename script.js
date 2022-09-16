const squareEl = document.querySelectorAll('.square');

let toggle = true;
let click = 0;

squareEl.forEach((square) => {

    square.addEventListener('click', () => {
        square.style.backgroundRepeat = "no-repeat"
        square.style.backgroundPosition = "center"

        if (toggle) {
            square.style.backgroundImage = "url(assets/red.png)"
            toggle = !toggle
        } else {
            square.style.backgroundImage = "url(assets/yellow.png)"
            toggle = !toggle

        }
    }
    );
});