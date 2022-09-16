const squareEl = document.querySelectorAll('.square');
const el1 = document.getElementById('1')

let toggle = true;
let click = 0;

const playerOne = []
const playerTwo = []

squareEl.forEach((square) => {

    square.addEventListener('click', () => {
        square.style.backgroundRepeat = "no-repeat"
        square.style.backgroundPosition = "center"
        if (toggle) {
            square.style.backgroundImage = "url(assets/red.png)"
            window.onclick = e => {
                playerOne.push(e.target.id)
            }
            toggle = !toggle
        } else {
            square.style.backgroundImage = "url(assets/yellow.png)"
            window.onclick = e => {
                playerTwo.push(e.target.id)
            }
            toggle = !toggle

        }
    })
});