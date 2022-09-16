const squareEl = document.querySelectorAll('.square');
const player1El = document.getElementById('player1');
const player2El = document.getElementById('player2');
const resetEl = document.getElementById('reset')

let toggle = true;
let click = 0;

let playerOne = [];
let playerTwo = [];
let player1score = 0;
let player2score = 0;

squareEl.forEach((square) => {

    square.addEventListener('click', () => {
        square.style.backgroundRepeat = "no-repeat"
        square.style.backgroundPosition = "center"
        if (toggle) {
            square.style.backgroundImage = "url(assets/red.png)"
            window.onclick = e => {
                playerOne.push(e.target.id)
                for (let i = 0; i < 8; i++) {
                    if (checker(playerOne, target[i])) {
                        playerOne = []
                        playerTwo = []
                        console.log("PLAYER ONE WIN");
                        player1score++
                        player1El.innerHTML = `PLAYER 1 : ${player1score}`
                        setTimeout(function () {
                            squareEl.forEach((square) => {
                                square.style.backgroundImage = ""
                            })
                        }, 1000);
                    };
                }
            }
            toggle = !toggle
        } else {
            square.style.backgroundImage = "url(assets/yellow.png)"
            window.onclick = e => {
                playerTwo.push(e.target.id)
                for (let i = 0; i < 8; i++) {
                    if (checker(playerTwo, target[i])) {
                        playerOne = []
                        playerTwo = []
                        console.log("PLAYER TWO WIN");
                        player2score++
                        player2El.innerHTML = `PLAYER 2 : ${player2score}`
                        setTimeout(function () {
                            squareEl.forEach((square) => {
                                square.style.backgroundImage = ""
                            })
                        }, 1000);
                    };
                }
            }
            toggle = !toggle
        }

        let checker = (arr, target) => target.every(v => arr.includes(v));
        target = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['3', '6', '9'],
            ['1', '5', '9'],
            ['7', '5', '3']]
    })
});

resetEl.addEventListener('click', () => {
    squareEl.forEach((square) => {
        square.style.backgroundImage = ""
    })
    playerOne = [];
    playerTwo = [];
})