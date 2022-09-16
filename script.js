const squareEl = document.querySelectorAll('.square');
const player1El = document.getElementById('player1');
const player2El = document.getElementById('player2');
const resetEl = document.getElementById('reset');
const resultsEl = document.querySelector('.results');

let click = 0;
let clicked = 0;
let toggle = true;
let playerOne = [];
let playerTwo = [];
let player1score = 0;
let player2score = 0;

const reset = () => {
    squareEl.forEach((square) => {
        square.style.backgroundImage = ""
    })
    click = 0;
    clicked = 0;
    toggle = true;
    playerOne = [];
    playerTwo = [];
}

squareEl.forEach((square) => {
    square.addEventListener('click', () => {
        clicked++;
        if (clicked === 9) {

            resultsEl.innerHTML = 'Draw!';
            resultsEl.style.color = "white";
            setTimeout(function () {
                reset();
                resultsEl.innerHTML = '';
            }, 2000);
        }

        square.style.backgroundRepeat = "no-repeat";
        square.style.backgroundPosition = "center";
        if (toggle) {
            square.style.backgroundImage = "url(assets/red.png)";
            window.onclick = e => {
                playerOne.push(e.target.id);
                for (let i = 0; i < 8; i++) {
                    if (checker(playerOne, target[i])) {
                        playerOne = [];
                        playerTwo = [];
                        resultsEl.innerHTML = 'Player one win!';
                        resultsEl.style.color = "red";
                        player1score++;
                        player1El.innerHTML = `PLAYER 1 : ${player1score}`;
                        setTimeout(function () {
                            squareEl.forEach((square) => {
                                square.style.backgroundImage = "";
                                resultsEl.innerHTML = '';
                            })
                        }, 2000);
                    };
                };
            };
            toggle = !toggle;
        } else {
            square.style.backgroundImage = "url(assets/yellow.png)";
            window.onclick = e => {
                playerTwo.push(e.target.id);
                for (let i = 0; i < 8; i++) {
                    if (checker(playerTwo, target[i])) {
                        playerOne = [];
                        playerTwo = [];
                        resultsEl.innerHTML = 'Player two win!';
                        resultsEl.style.color = "yellow";
                        player2score++;
                        player2El.innerHTML = `PLAYER 2 : ${player2score}`;
                        setTimeout(function () {
                            squareEl.forEach((square) => {
                                square.style.backgroundImage = "";
                                resultsEl.innerHTML = '';
                            });
                        }, 2000);
                    };
                };
            };
            toggle = !toggle;
        };

        let checker = (arr, target) => target.every(v => arr.includes(v));
        target = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['3', '6', '9'],
            ['1', '5', '9'],
            ['7', '5', '3']];
    });
});

resetEl.addEventListener('click', () => {
    click = 0;
    clicked = 0;
    toggle = true;
    playerOne = [];
    playerTwo = [];
    player1score = 0;
    player2score = 0;
})